import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../themes/ThemeContext";
import { SPACING } from "../constants/spacing";
import { TYPOGRAPHY } from "../constants/typography";

interface SettingsItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: string;
  type: "navigation" | "toggle" | "logout";
  value?: string;
  enabled?: boolean;
}

export const SettingsScreen: React.FC = () => {
  const { colors } = useTheme();
  const [biometricEnabled, setBiometricEnabled] = useState(true);

  const generalSettings: SettingsItem[] = [
    {
      id: "1",
      title: "Language",
      icon: "language",
      type: "navigation",
      value: "English",
    },
    {
      id: "2",
      title: "My Profile",
      icon: "person",
      type: "navigation",
    },
    {
      id: "3",
      title: "Contact Us",
      icon: "mail",
      type: "navigation",
    },
  ];

  const securitySettings: SettingsItem[] = [
    {
      id: "4",
      title: "Change Password",
      icon: "lock-closed",
      type: "navigation",
    },
    {
      id: "5",
      title: "Privacy Policy",
      icon: "shield-checkmark",
      type: "navigation",
      subtitle: "Choose what data you share with us",
    },
    {
      id: "6",
      title: "Biometric",
      icon: "finger-print",
      type: "toggle",
      enabled: biometricEnabled,
    },
  ];

  const renderSettingsItem = (item: SettingsItem) => (
    <TouchableOpacity
      key={item.id}
      style={styles.settingsItem}
      onPress={() => {
        if (item.type === "toggle") {
          if (item.id === "6") {
            setBiometricEnabled(!biometricEnabled);
          }
        } else if (item.type === "navigation") {
          // TODO: Navigate to specific settings pages
          console.log("Navigate to:", item.title);
        }
      }}
      disabled={item.type === "toggle"}
    >
      <View style={styles.itemLeft}>
        <View
          style={[
            styles.itemIcon,
            { backgroundColor: colors.secondaryBackground },
          ]}
        >
          <Ionicons
            name={item.icon as keyof typeof Ionicons.glyphMap}
            size={20}
            color={colors.text}
          />
        </View>
        <View style={styles.itemContent}>
          <Text style={[styles.itemTitle, { color: colors.text }]}>
            {item.title}
          </Text>
          {item.subtitle && (
            <Text
              style={[styles.itemSubtitle, { color: colors.secondaryText }]}
            >
              {item.subtitle}
            </Text>
          )}
        </View>
      </View>

      <View style={styles.itemRight}>
        {item.type === "navigation" && (
          <>
            {item.value && (
              <Text style={[styles.itemValue, { color: colors.secondaryText }]}>
                {item.value}
              </Text>
            )}
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.secondaryText}
            />
          </>
        )}

        {item.type === "toggle" && (
          <Switch
            value={item.enabled}
            onValueChange={(value) => {
              if (item.id === "6") {
                setBiometricEnabled(value);
              }
            }}
            trackColor={{ false: colors.border, true: colors.primary }}
            thumbColor={colors.card}
          />
        )}
      </View>
    </TouchableOpacity>
  );

  const renderSectionHeader = (title: string) => (
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionTitle, { color: colors.secondaryText }]}>
        {title}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* General Section */}
        {renderSectionHeader("General")}
        {generalSettings.map(renderSettingsItem)}

        {/* Security Section */}
        {renderSectionHeader("Security")}
        {securitySettings.map(renderSettingsItem)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl + 40,
    paddingBottom: SPACING.lg,
  },
  headerTitle: {
    flex: 1,
    alignItems: "center",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: TYPOGRAPHY.sizes.xl,
    fontWeight: TYPOGRAPHY.weights.bold,
  },
  logoutButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionHeader: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    paddingTop: SPACING.lg,
  },
  sectionTitle: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: TYPOGRAPHY.weights.medium,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  settingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  itemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SPACING.md,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.weights.medium,
    marginBottom: SPACING.xs,
  },
  itemSubtitle: {
    fontSize: TYPOGRAPHY.sizes.xs,
    lineHeight: TYPOGRAPHY.lineHeights.normal * TYPOGRAPHY.sizes.xs,
  },
  itemRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.sm,
  },
  itemValue: {
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: TYPOGRAPHY.weights.medium,
  },
});
