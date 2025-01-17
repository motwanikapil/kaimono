import * as Icons from "lucide-react";

export default function IconRenderer({ iconName, size = 24, color = "black" }) {
  const LucideIcon = Icons[iconName]; // Get the icon component dynamically

  if (!LucideIcon) {
    return <p>Icon not found</p>; // Handle case where icon name is invalid
  }

  return <LucideIcon size={size} color={color} />;
}
