import { View, Text, TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  hint?: string;
}

export default function Input({ label, error, hint, className = "", ...props }: Props & { className?: string }) {
  return (
    <View className="mb-4">
      {label && (
        <Text className="text-sm font-medium text-gray-700 mb-1">{label}</Text>
      )}
      <TextInput
        className={`border rounded-xl px-4 py-3.5 text-base text-gray-900 bg-white ${
          error ? "border-danger" : "border-border"
        } ${className}`}
        placeholderTextColor="#94A3B8"
        {...props}
      />
      {error && <Text className="text-danger text-xs mt-1">{error}</Text>}
      {hint && !error && <Text className="text-muted text-xs mt-1">{hint}</Text>}
    </View>
  );
}
