import React, { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import { COLORS, ColorScheme } from "../constants/colors";

interface ThemeContextType {
  colorScheme: ColorScheme;
  colors: typeof COLORS.light;
  toggleTheme: () => void;
  setTheme: (theme: ColorScheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");

  useEffect(() => {
    // Default to dark theme for now, can be changed to systemColorScheme || 'dark'
    setColorScheme("dark");
  }, [systemColorScheme]);

  const toggleTheme = () => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setTheme = (theme: ColorScheme) => {
    setColorScheme(theme);
  };

  const colors = COLORS[colorScheme];

  const value: ThemeContextType = {
    colorScheme,
    colors,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
