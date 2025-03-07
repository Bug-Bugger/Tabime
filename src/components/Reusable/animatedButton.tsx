import React, { forwardRef } from "react";
import {
  AnimatedButtonProps,
  DEFAULT_INTENSITY,
} from "@components/types/ReusableTypes";

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      children,
      onClick,
      className = "",
      baseColor = "purple",
      accentColor = "blue",
      intensity = {},
      rounded = "lg",
      padding = "px-8 py-3",
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const fullIntensity = {
      ...DEFAULT_INTENSITY,
      ...intensity,
    };

    const baseGradient = `from-${baseColor}-${fullIntensity.base} to-${accentColor}-${fullIntensity.accent}`;
    const hoverGradient = `from-${baseColor}-${fullIntensity.hoverBase} to-${accentColor}-${fullIntensity.hoverAccent}`;
    const glowGradient = `before:from-transparent before:via-${baseColor}-${fullIntensity.glow} before:to-transparent`;

    return (
      <button
        ref={ref}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        className={`
        ${padding} z-20 text-white font-semibold w-fit
        relative overflow-hidden
        rounded-${rounded} 
        bg-gradient-to-r ${baseGradient}
        ${className}
        after:absolute after:inset-0 after:z-[1]
        after:bg-gradient-to-r ${hoverGradient}
        after:opacity-0
        after:transition-opacity after:duration-700 after:ease-in-out
        hover:after:opacity-100
        before:absolute before:inset-0 before:z-[2]
        before:bg-gradient-to-r ${glowGradient}
        before:translate-x-[-100%]
        before:transition-transform before:duration-700 before:ease-in-out
        hover:before:translate-x-[100%]
        ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
      `}
        {...rest}
      >
        <span className="relative z-[3]">{children}</span>
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
