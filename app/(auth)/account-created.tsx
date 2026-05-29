import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ui/ScreenWrapper";
import Button from "@/components/ui/Button";

const PROFILE_PROGRESS = 0.25;

export default function AccountCreated() {
  const router = useRouter();

  return (
    <ScreenWrapper className="justify-between py-10">
      {/* Success icon */}
      <View className="items-center mt-6">
        <View className="w-24 h-24 rounded-full bg-green-500 items-center justify-center mb-6">
          <Text className="text-white text-4xl font-bold">✓</Text>
        </View>
        <Text className="text-3xl font-bold text-gray-900 mb-2">You're in!</Text>
        <Text className="text-base text-muted mb-1">Welcome to MediBridge, John.</Text>
        <Text className="text-sm text-muted text-center px-4">
          Complete your profile to start booking, or explore providers in your area.
        </Text>
      </View>

      {/* Profile progress card */}
      <View className="bg-surface border border-border rounded-2xl p-5">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-sm font-semibold text-gray-700">Profile progress</Text>
          <Text className="text-sm font-bold text-primary">
            {Math.round(PROFILE_PROGRESS * 100)}% complete
          </Text>
        </View>
        <View className="h-2 bg-border rounded-full overflow-hidden mb-3">
          <View
            className="h-full bg-primary rounded-full"
            style={{ width: `${PROFILE_PROGRESS * 100}%` }}
          />
        </View>
        <Text className="text-xs text-muted">
          Add insurance + preferences to unlock booking
        </Text>
      </View>

      {/* Actions */}
      <View className="gap-3">
        <Button
          label="Complete profile"
          onPress={() => router.push("/(onboarding)/profile")}
        />
        <Button
          label="Explore first"
          variant="secondary"
          onPress={() => router.push("/(app)/")}
        />
      </View>
    </ScreenWrapper>
  );
}
