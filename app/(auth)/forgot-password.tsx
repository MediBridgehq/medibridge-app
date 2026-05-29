import { useState } from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import BackButton from "@/components/ui/BackButton";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSend() {
    setSent(true);
  }

  if (sent) {
    return (
      <ScreenWrapper className="justify-center">
        <View className="items-center px-4">
          <View className="w-20 h-20 rounded-full bg-primary-light items-center justify-center mb-6">
            <Text className="text-3xl">📧</Text>
          </View>
          <Text className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Check your email
          </Text>
          <Text className="text-muted text-sm text-center mb-8">
            We sent a reset link to {email}. It expires in 15 minutes.
          </Text>
          <Button
            label="Back to Sign In"
            onPress={() => router.replace("/(auth)/sign-in")}
          />
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper className="py-6">
      <BackButton />

      <View className="mt-4 mb-8">
        <Text className="text-2xl font-bold text-gray-900 mb-1">Forgot password?</Text>
        <Text className="text-muted text-sm">
          Enter your email and we'll send you a reset link.
        </Text>
      </View>

      <Input
        label="Email address"
        placeholder="you@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Button
        label="Send reset link →"
        onPress={handleSend}
        disabled={!email}
        className="mt-2"
      />
    </ScreenWrapper>
  );
}
