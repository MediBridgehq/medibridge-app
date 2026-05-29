import { View } from "react-native";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: Props) {
  return (
    <View className={`bg-white border border-border rounded-2xl p-4 ${className}`}>
      {children}
    </View>
  );
}
