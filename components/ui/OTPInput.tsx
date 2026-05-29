import { useRef, useState } from "react";
import { View, TextInput, Pressable, Text } from "react-native";

interface Props {
  length?: number;
  value: string;
  onChange: (val: string) => void;
}

export default function OTPInput({ length = 6, value, onChange }: Props) {
  const inputs = useRef<(TextInput | null)[]>([]);
  const digits = value.split("").slice(0, length);

  function handleChange(text: string, index: number) {
    const digit = text.replace(/[^0-9]/g, "").slice(-1);
    const next = digits.slice();
    next[index] = digit;
    const joined = next.join("");
    onChange(joined);
    if (digit && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  }

  function handleKeyPress(key: string, index: number) {
    if (key === "Backspace" && !digits[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  }

  return (
    <View className="flex-row justify-between gap-3">
      {Array.from({ length }).map((_, i) => (
        <TextInput
          key={i}
          ref={(el) => { inputs.current[i] = el; }}
          value={digits[i] ?? ""}
          onChangeText={(t) => handleChange(t, i)}
          onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, i)}
          keyboardType="number-pad"
          maxLength={1}
          className="flex-1 border border-border rounded-xl py-4 text-center text-xl font-semibold text-gray-900 bg-white"
          selectionColor="#2563EB"
        />
      ))}
    </View>
  );
}
