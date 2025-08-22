import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../themes/ThemeContext";
import { SPACING } from "../constants/spacing";
import { TYPOGRAPHY } from "../constants/typography";

export const TermsScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.left}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>Terms & Conditions</Text>
        <View style={styles.right} />
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          1. Acceptance of Terms
        </Text>
        <Text style={[styles.paragraph, { color: colors.secondaryText }]}>
          By accessing and using this application, you accept and agree to be bound by the terms and provision of this agreement.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          2. Use License
        </Text>
        <Text style={[styles.paragraph, { color: colors.secondaryText }]}>
          Permission is granted to temporarily download one copy of the app for personal, non-commercial transitory viewing only.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          3. Disclaimer
        </Text>
        <Text style={[styles.paragraph, { color: colors.secondaryText }]}>
          The materials on the app are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          4. Limitations
        </Text>
        <Text style={[styles.paragraph, { color: colors.secondaryText }]}>
          In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our app.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          5. Privacy Policy
        </Text>
        <Text style={[styles.paragraph, { color: colors.secondaryText }]}>
          Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect while operating our app.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          6. Governing Law
        </Text>
        <Text style={[styles.paragraph, { color: colors.secondaryText }]}>
          These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          7. Changes to Terms
        </Text>
        <Text style={[styles.paragraph, { color: colors.secondaryText }]}>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.
        </Text>

        <Text style={[styles.paragraph, { color: colors.secondaryText }]}>
          Last updated: {new Date().toLocaleDateString()}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl + 40,
    paddingBottom: SPACING.lg,
  },
  left: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  right: { width: 40 },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: TYPOGRAPHY.weights.bold,
  },
  content: { flex: 1 },
  scrollContent: { paddingHorizontal: SPACING.lg, paddingBottom: SPACING.xl },
  sectionTitle: {
    fontSize: TYPOGRAPHY.sizes.lg,
    fontWeight: TYPOGRAPHY.weights.bold,
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
  },
  paragraph: {
    fontSize: TYPOGRAPHY.sizes.base,
    lineHeight: TYPOGRAPHY.lineHeights.relaxed * TYPOGRAPHY.sizes.base,
    marginBottom: SPACING.md,
  },
});
