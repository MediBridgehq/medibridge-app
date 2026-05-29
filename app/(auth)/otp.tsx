import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import Button from "@/components/ui/Button";
import OTPInput from "@/components/ui/OTPInput";
import StepIndicator from "@/components/ui/StepIndicator";
import BackButton from "@/components/ui/BackButton";

const RESEND_SECONDS = 42;

export default function OTPVerification() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [seconds, setSeconds] = useState(RESEND_SECONDS);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const mm = String(Math.floor(seconds / 60)).padStart(1, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <ScreenWrapper className="py-6">
      <BackButton />
      <StepIndicator current={2} total={6} />

      <Text className="text-2xl font-bold text-gray-900 mb-1">Verify your email</Text>
      <View className="flex-row items-center gap-2 mb-8">
        <Text className="text-muted text-sm">We sent a 6-digit code to john@example.com</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-primary text-sm font-medium">Change →</Text>
        </TouchableOpacity>
      </View>

      <OTPInput length={6} value={code} onChange={setCode} />

      <View className="items-center mt-6 mb-8">
        <Text className="text-muted text-sm mb-2">Didn't receive the code?</Text>
        {seconds > 0 ? (
          <View className="bg-surface rounded-full px-4 py-2">
            <Text className="text-muted text-sm">Resend in {mm}:{ss}</Text>
          </View>
        ) : (
          <TouchableOpacity onPress={() => setSeconds(RESEND_SECONDS)}>
            <Text className="text-primary text-sm font-medium">Resend code</Text>
          </TouchableOpacity>
        )}
      </View>

      <Button
        label="Verify Code →"
        onPress={() => router.push("/(auth)/personal-info")}
        disabled={false}
        className="mb-4"
      />

      <View className="bg-surface rounded-xl px-4 py-3 flex-row items-center gap-2">
        <Text className="text-muted text-xs">🔒 Your code expires in 10 minutes</Text>
      </View>
    </ScreenWrapper>
  );
}
