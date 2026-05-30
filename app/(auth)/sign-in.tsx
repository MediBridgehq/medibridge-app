import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function SignIn() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const canSignIn = identifier && password;

  return (
    <ScreenWrapper scroll>
      <View className="mt-6 mb-8">
        <Text className="text-2xl font-bold text-gray-900 mb-1">Welcome back</Text>
        <Text className="text-muted text-sm">Sign in to MediBridge</Text>
      </View>

      <Input
        label="Email or phone"
        placeholder="you@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={identifier}
        onChangeText={setIdentifier}
      />

      <View className="mb-1">
        <Input
          label="Password"
          placeholder="Enter password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword((v) => !v)}
          className="absolute right-4 top-9"
        >
          <Text className="text-muted text-sm">{showPassword ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/(auth)/forgot-password")}
        className="self-end mb-6"
      >
        <Text className="text-primary text-sm font-medium">Forgot password?</Text>
      </TouchableOpacity>

      <Button
        label="Sign in →"
        onPress={() => router.push("/(app)/")}
        disabled={!canSignIn}
        className="mb-5"
      />

      {/* Divider */}
      <View className="flex-row items-center gap-3 mb-5">
        <View className="flex-1 h-px bg-border" />
        <Text className="text-muted text-xs">or continue with</Text>
        <View className="flex-1 h-px bg-border" />
      </View>

      {/* Social */}
      <View className="gap-3 mb-8">
        <TouchableOpacity className="border border-border rounded-xl py-3.5 flex-row items-center justify-center gap-2">
          <Text className="text-base font-semibold text-gray-700">G</Text>
          <Text className="text-sm font-medium text-gray-700">Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-border rounded-xl py-3.5 flex-row items-center justify-center gap-2">
          <Text className="text-base">🍎</Text>
          <Text className="text-sm font-medium text-gray-700">Continue with Apple</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/(auth)/sign-up")}
        className="items-center"
      >
        <Text className="text-muted text-sm">
          Don't have an account?{" "}
          <Text className="text-primary font-medium">Sign up</Text>
        </Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}
