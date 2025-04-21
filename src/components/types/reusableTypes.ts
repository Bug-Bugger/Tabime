import { ButtonHTMLAttributes } from "react";

/**
 * Defines the intensity values for various gradient layers
 */
export type ColorIntensity = {
  /** Primary color intensity for the base gradient */
  base: number;
  /** Secondary color intensity for the base gradient */
  accent: number;
  /** Primary color intensity for the hover gradient */
  hoverBase: number;
  /** Secondary color intensity for the hover gradient */
  hoverAccent: number;
  /** Color intensity for the animated glow effect */
  glow: number;
};

/**
 * Props for the AnimatedButton component
 */
export interface AnimatedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Primary color name (using Tailwind color names) */
  baseColor?: string;
  /** Secondary color name (using Tailwind color names) */
  accentColor?: string;
  /** Controls the intensity values for each gradient layer */
  intensity?: Partial<ColorIntensity>;
  /** Border radius value (using Tailwind rounded classes) */
  rounded?: string;
  /** Padding classes (using Tailwind padding syntax) */
  padding?: string;
  /** Additional CSS classes to apply to the button */
  className?: string;
  /** Whether the button is disabled */
  disabled?: boolean;
}

/**
 * Default intensity values
 */
export const DEFAULT_INTENSITY: ColorIntensity = {
  base: 600,
  accent: 500,
  hoverBase: 500,
  hoverAccent: 400,
  glow: 300,
};

/**
 * Props for the Tab component
 */
export interface TabInfo {
  label: string;
  content: React.ReactNode;
}

export interface TabProps {
  tabs: TabInfo[];
  initialTab?: number;
}
