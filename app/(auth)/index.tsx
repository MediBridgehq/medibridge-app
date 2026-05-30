import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import Button from "@/components/ui/Button";

export default function Welcome() {
  const router = useRouter();

  return (
    <ScreenWrapper className="justify-between py-10">
      {/* Logo */}
      <View className="items-center mt-8">
        <View className="w-24 h-24 rounded-3xl bg-primary items-center justify-center mb-4">
          <Text className="text-white text-2xl font-bold">MB</Text>
        </View>
        <Text className="text-3xl font-bold text-gray-900">MediBridge</Text>
        <Text className="text-base text-muted mt-2 text-center">
          Find a doctor. Book in seconds.
        </Text>
      </View>

      {/* Feature bullets */}
      <View className="gap-3">
        {[
          "31-day waits → 1 tap",
          "$150B problem solved",
          "HIPAA compliant",
        ].map((item) => (
          <View key={item} className="flex-row items-center gap-3 bg-surface rounded-xl px-4 py-3">
            <View className="w-6 h-6 rounded-full bg-primary-light items-center justify-center">
              <Text className="text-primary text-xs font-bold">✓</Text>
            </View>
            <Text className="text-gray-800 text-base font-medium">{item}</Text>
          </View>
        ))}
      </View>

      {/* CTA */}
      <View className="gap-3">
        <Button label="Get Started" onPress={() => router.push("/(auth)/sign-up")} />
        <TouchableOpacity
          onPress={() => router.push("/(auth)/sign-in")}
          className="items-center py-2"
        >
          <Text className="text-primary text-sm font-medium">
            Already have an account? Sign in
          </Text>
        </TouchableOpacity>

        {/* HIPAA badge */}
        <View className="items-center mt-2">
          <View className="bg-surface rounded-full px-4 py-2">
            <Text className="text-muted text-xs">🔒 HIPAA Compliant</Text>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
