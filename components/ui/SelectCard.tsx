import { TouchableOpacity, View, Text } from "react-native";

interface Props {
  label: string;
  description?: string;
  selected: boolean;
  onPress: () => void;
  icon?: string;
}

export default function SelectCard({ label, description, selected, onPress, icon }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`border-2 rounded-xl p-4 mb-3 flex-row items-center gap-3 ${
        selected ? "border-primary bg-primary-light" : "border-border bg-white"
      }`}
      activeOpacity={0.7}
    >
      {icon && <Text className="text-2xl">{icon}</Text>}
      <View className="flex-1">
        <Text className={`text-base font-medium ${selected ? "text-primary" : "text-gray-900"}`}>
          {label}
        </Text>
        {description && (
          <Text className="text-sm text-muted mt-0.5">{description}</Text>
        )}
      </View>
      <View
        className={`w-5 h-5 rounded-full border-2 items-center justify-center ${
          selected ? "border-primary" : "border-border"
        }`}
      >
        {selected && <View className="w-2.5 h-2.5 rounded-full bg-primary" />}
      </View>
    </TouchableOpacity>
  );
}
