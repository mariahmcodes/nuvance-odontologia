import { Play } from "lucide-react";

export function PlayButton() {
  return (
    <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold/10 border border-gold/40 backdrop-blur-md shadow-gold-glow transition-transform group-hover:scale-110">
      <Play size={32} className="text-gold fill-gold ml-1" />
    </div>
  );
}