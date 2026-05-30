import { View, Text } from "react-native";

interface Props {
  current: number;
  total: number;
  label?: string;
}

export default function StepIndicator({ current, total, label }: Props) {
  return (
    <View className="mb-6">
      <Text className="text-xs text-muted mb-2">
        {label ?? `Step ${current} of ${total}`}
      </Text>
      <View className="flex-row gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <View
            key={i}
            className={`flex-1 h-1 rounded-full ${
              i < current ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </View>
    </View>
  );
}
