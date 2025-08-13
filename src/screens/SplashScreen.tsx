import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../themes/ThemeContext";
import { SPACING } from "../constants/spacing";
import { TYPOGRAPHY } from "../constants/typography";

const { width, height } = Dimensions.get("window");

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const { colors } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {/* Logo with Gradient Rings */}
      <View style={styles.logoContainer}>
        {/* Outer Ring */}
        <LinearGradient
          colors={["#0066FF", "#00D4FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.outerRing}
        />

        {/* Inner Ring */}
        <LinearGradient
          colors={["#0066FF", "#00D4FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.innerRing}
        />
      </View>

      {/* BANKPICK Text */}
      <Text style={[styles.brandText, { color: colors.text }]}>BANKPICK</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    position: "relative",
    marginBottom: SPACING.xl,
  },
  outerRing: {
    width: 120,
    height: 120,
    borderRadius: 60,
    opacity: 0.8,
  },
  innerRing: {
    position: "absolute",
    top: 15,
    left: 15,
    width: 90,
    height: 90,
    borderRadius: 45,
    opacity: 0.9,
  },
  brandText: {
    fontSize: TYPOGRAPHY.sizes["3xl"],
    fontWeight: TYPOGRAPHY.weights.bold,
    letterSpacing: 2,
  },
});
