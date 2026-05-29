import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View } from "react-native";

interface Props {
  children: React.ReactNode;
  scroll?: boolean;
  className?: string;
}

export default function ScreenWrapper({ children, scroll = false, className = "" }: Props) {
  const inner = scroll ? (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerClassName="px-6 pb-10"
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  ) : (
    <View className={`flex-1 bg-white px-6 ${className}`}>{children}</View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {inner}
    </SafeAreaView>
  );
}
