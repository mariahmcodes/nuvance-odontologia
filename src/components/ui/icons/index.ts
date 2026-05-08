import { Smile, Sparkles, Award, Heart } from "lucide-react";

export const iconMap = {
  smile: Smile,
  sparkles: Sparkles,
  award: Award,
  heart: Heart,
} as const;

export type IconName = keyof typeof iconMap;