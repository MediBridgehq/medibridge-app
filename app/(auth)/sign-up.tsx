import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import StepIndicator from "@/components/ui/StepIndicator";

type Tab = "email" | "phone";

export default function SignUp() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("email");
  const [value, setValue] = useState("");

  return (
    <ScreenWrapper scroll>
      <StepIndicator current={1} total={6} />

      <Text className="text-2xl font-bold text-gray-900 mb-1">Create your account</Text>
      <Text className="text-muted text-sm mb-6">Enter your email or phone to get started.</Text>

      {/* Tab switcher */}
      <View className="flex-row bg-surface rounded-xl p-1 mb-5">
        {(["email", "phone"] as Tab[]).map((t) => (
          <TouchableOpacity
            key={t}
            onPress={() => { setTab(t); setValue(""); }}
            className={`flex-1 py-2.5 rounded-lg items-center ${tab === t ? "bg-white shadow" : ""}`}
          >
            <Text className={`text-sm font-medium ${tab === t ? "text-gray-900" : "text-muted"}`}>
              {t === "email" ? "Email" : "Phone Number"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {tab === "email" ? (
        <Input
          label="Email address"
          placeholder="you@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={value}
          onChangeText={setValue}
        />
      ) : (
        <Input
          label="Phone number"
          placeholder="+1 (555) 000-0000"
          keyboardType="phone-pad"
          value={value}
          onChangeText={setValue}
        />
      )}

      <Button
        label="Continue →"
        onPress={() => router.push("/(auth)/otp")}
        disabled={!value}
        className="mb-5"
      />

      {/* Divider */}
      <View className="flex-row items-center gap-3 mb-5">
        <View className="flex-1 h-px bg-border" />
        <Text className="text-muted text-xs">or continue with</Text>
        <View className="flex-1 h-px bg-border" />
      </View>

      {/* Social */}
      <View className="gap-3 mb-6">
        <TouchableOpacity className="border border-border rounded-xl py-3.5 items-center flex-row justify-center gap-2">
          <Text className="text-base font-semibold text-gray-700">G</Text>
          <Text className="text-sm font-medium text-gray-700">Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-border rounded-xl py-3.5 items-center flex-row justify-center gap-2">
          <Text className="text-base">🍎</Text>
          <Text className="text-sm font-medium text-gray-700">Continue with Apple</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-xs text-muted text-center">
        By continuing you agree to our Terms &amp; Privacy Policy
      </Text>
    </ScreenWrapper>
  );
}
