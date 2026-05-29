import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

type Variant = "primary" | "secondary" | "ghost";

interface Props {
  label: string;
  onPress?: () => void;
  variant?: Variant;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const variantStyles: Record<Variant, { container: string; text: string }> = {
  primary: {
    container: "bg-primary rounded-xl py-4 items-center",
    text: "text-white font-semibold text-base",
  },
  secondary: {
    container: "border border-primary rounded-xl py-4 items-center bg-white",
    text: "text-primary font-semibold text-base",
  },
  ghost: {
    container: "py-4 items-center",
    text: "text-primary font-medium text-sm",
  },
};

export default function Button({
  label,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
  className = "",
}: Props) {
  const styles = variantStyles[variant];
  const opacity = disabled || loading ? "opacity-50" : "";

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`${styles.container} ${opacity} ${className}`}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={variant === "primary" ? "#fff" : "#2563EB"} />
      ) : (
        <Text className={styles.text}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}
