import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
};

export default function Reveal({
  children,
  delay = 0,
  className,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay,
        duration: 0.35,
        ease: "easeOut",
      }}
      className={cn("transform-gpu will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}