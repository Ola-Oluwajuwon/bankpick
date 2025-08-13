import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../themes/ThemeContext";
import { Button } from "../components/Button";
import { SPACING } from "../constants/spacing";
import { TYPOGRAPHY } from "../constants/typography";

const { width, height } = Dimensions.get("window");

interface WelcomeContent {
  title: string;
  description: string;
  illustration: React.ReactNode;
}

interface WelcomeScreenProps {
  content: WelcomeContent;
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onSkip?: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  content,
  currentPage,
  totalPages,
  onNext,
  onSkip,
}) => {
  const { colors } = useTheme();

  const renderPaginationDots = () => {
    return (
      <View style={styles.paginationContainer}>
        {Array.from({ length: totalPages }, (_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              {
                backgroundColor:
                  index === currentPage ? colors.primary : colors.secondaryText,
                opacity: index === currentPage ? 1 : 0.3,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {/* Skip Button */}
      {onSkip && (
        <TouchableOpacity style={styles.skipButton} onPress={onSkip}>
          <Ionicons name="ellipsis-horizontal" size={24} color={colors.text} />
        </TouchableOpacity>
      )}

      {/* Main Illustration */}
      <View style={styles.illustrationContainer}>{content.illustration}</View>

      {/* Pagination Dots */}
      {renderPaginationDots()}

      {/* Title */}
      <Text style={[styles.title, { color: colors.text }]}>
        {content.title}
      </Text>

      {/* Description */}
      <Text style={[styles.description, { color: colors.secondaryText }]}>
        {content.description}
      </Text>

      {/* Next Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Next"
          onPress={onNext}
          size="large"
          style={styles.nextButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl,
  },
  skipButton: {
    position: "absolute",
    top: SPACING.xl + 40,
    left: SPACING.lg,
    zIndex: 1,
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SPACING["3xl"],
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SPACING.xl,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: SPACING.xs,
  },
  title: {
    fontSize: TYPOGRAPHY.sizes["2xl"],
    fontWeight: TYPOGRAPHY.weights.bold,
    textAlign: "center",
    marginBottom: SPACING.md,
    lineHeight: TYPOGRAPHY.lineHeights.tight * TYPOGRAPHY.sizes["2xl"],
  },
  description: {
    fontSize: TYPOGRAPHY.sizes.base,
    textAlign: "center",
    marginBottom: SPACING["2xl"],
    lineHeight: TYPOGRAPHY.lineHeights.normal * TYPOGRAPHY.sizes.base,
    paddingHorizontal: SPACING.md,
  },
  buttonContainer: {
    paddingBottom: SPACING.xl,
  },
  nextButton: {
    width: "100%",
  },
});
