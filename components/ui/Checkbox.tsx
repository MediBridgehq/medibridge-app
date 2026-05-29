import { TouchableOpacity, View, Text } from "react-native";

interface Props {
  label: string;
  checked: boolean;
  onToggle: () => void;
  description?: string;
}

export default function Checkbox({ label, checked, onToggle, description }: Props) {
  return (
    <TouchableOpacity
      onPress={onToggle}
      className="flex-row items-start gap-3 py-3"
      activeOpacity={0.7}
    >
      <View
        className={`w-5 h-5 rounded border-2 items-center justify-center mt-0.5 ${
          checked ? "bg-primary border-primary" : "border-border bg-white"
        }`}
      >
        {checked && <Text className="text-white text-xs font-bold">✓</Text>}
      </View>
      <View className="flex-1">
        <Text className="text-base text-gray-900">{label}</Text>
        {description && (
          <Text className="text-sm text-muted mt-0.5">{description}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
