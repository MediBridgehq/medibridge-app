import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

interface Props {
  onPress?: () => void;
}

export default function BackButton({ onPress }: Props) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={onPress ?? (() => router.back())}
      className="p-1 -ml-1 mb-2"
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Text className="text-2xl text-gray-700">←</Text>
    </TouchableOpacity>
  );
}
