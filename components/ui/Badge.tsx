import { View, Text } from "react-native";

type Variant = "info" | "success" | "warning" | "muted";

interface Props {
  label: string;
  variant?: Variant;
}

const styles: Record<Variant, { container: string; text: string }> = {
  info: { container: "bg-primary-light", text: "text-primary" },
  success: { container: "bg-green-100", text: "text-green-700" },
  warning: { container: "bg-yellow-100", text: "text-yellow-700" },
  muted: { container: "bg-gray-100", text: "text-muted" },
};

export default function Badge({ label, variant = "info" }: Props) {
  const s = styles[variant];
  return (
    <View className={`self-start px-3 py-1 rounded-full ${s.container}`}>
      <Text className={`text-xs font-medium ${s.text}`}>{label}</Text>
    </View>
  );
}
