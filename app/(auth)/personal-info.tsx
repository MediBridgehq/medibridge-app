import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import StepIndicator from "@/components/ui/StepIndicator";
import BackButton from "@/components/ui/BackButton";

const SEX_OPTIONS = ["Male", "Female", "Other", "Prefer not to say"] as const;
type Sex = (typeof SEX_OPTIONS)[number];

export default function PersonalInfo() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [sex, setSex] = useState<Sex | null>(null);
  const [zip, setZip] = useState("");
  const [language, setLanguage] = useState("English (US)");

  const canContinue = name && dob && sex && zip;

  return (
    <ScreenWrapper scroll>
      <BackButton />
      <StepIndicator current={3} total={6} />

      <Text className="text-2xl font-bold text-gray-900 mb-1">Tell us about yourself</Text>
      <Text className="text-muted text-sm mb-6">Helps us match you to the right doctors.</Text>

      <Input
        label="Full Name"
        placeholder="John Doe"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />
      <Input
        label="Date of Birth"
        placeholder="MM / DD / YYYY"
        value={dob}
        onChangeText={setDob}
        keyboardType="numeric"
      />

      {/* Biological Sex */}
      <View className="mb-4">
        <Text className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
          Biological Sex
        </Text>
        <View className="flex-row flex-wrap gap-2">
          {SEX_OPTIONS.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => setSex(option)}
              className={`px-4 py-2.5 rounded-xl border ${
                sex === option
                  ? "border-primary bg-primary-light"
                  : "border-border bg-white"
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  sex === option ? "text-primary" : "text-gray-700"
                }`}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Input
        label="ZIP Code"
        placeholder="06511"
        value={zip}
        onChangeText={setZip}
        keyboardType="numeric"
        maxLength={5}
      />

      {/* Language picker (static for now) */}
      <View className="mb-6">
        <Text className="text-sm font-medium text-gray-700 mb-1">Language</Text>
        <View className="border border-border rounded-xl px-4 py-3.5 flex-row justify-between items-center bg-white">
          <Text className="text-base text-gray-900">{language}</Text>
          <Text className="text-muted text-xs">▼</Text>
        </View>
      </View>

      <Button
        label="Continue →"
        onPress={() => router.push("/(auth)/account-created")}
        disabled={!canContinue}
      />
    </ScreenWrapper>
  );
}
