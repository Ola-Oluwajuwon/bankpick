import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../themes/ThemeContext";
import { SPACING } from "../constants/spacing";
import { TYPOGRAPHY } from "../constants/typography";
import { Button } from "../components/Button";

export const ChangePasswordScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSave = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "New passwords do not match");
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert("Error", "New password must be at least 6 characters");
      return;
    }

    Alert.alert("Success", "Password changed successfully", [
      { text: "OK", onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.left}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>
          Change Password
        </Text>
        <View style={styles.right} />
      </View>

      <View style={styles.body}>
        <Text style={[styles.label, { color: colors.text }]}>
          Current Password
        </Text>
        <View style={[styles.inputContainer, { borderColor: colors.border }]}>
          <TextInput
            style={[styles.input, { color: colors.text }]}
            value={currentPassword}
            onChangeText={setCurrentPassword}
            secureTextEntry={!showCurrentPassword}
            placeholder="Enter current password"
            placeholderTextColor={colors.secondaryText}
          />
          <TouchableOpacity
            onPress={() => setShowCurrentPassword(!showCurrentPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={showCurrentPassword ? "eye-off" : "eye"}
              size={20}
              color={colors.secondaryText}
            />
          </TouchableOpacity>
        </View>

        <Text style={[styles.label, { color: colors.text }]}>New Password</Text>
        <View style={[styles.inputContainer, { borderColor: colors.border }]}>
          <TextInput
            style={[styles.input, { color: colors.text }]}
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={!showNewPassword}
            placeholder="Enter new password"
            placeholderTextColor={colors.secondaryText}
          />
          <TouchableOpacity
            onPress={() => setShowNewPassword(!showNewPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={showNewPassword ? "eye-off" : "eye"}
              size={20}
              color={colors.secondaryText}
            />
          </TouchableOpacity>
        </View>

        <Text style={[styles.label, { color: colors.text }]}>
          Confirm New Password
        </Text>
        <View style={[styles.inputContainer, { borderColor: colors.border }]}>
          <TextInput
            style={[styles.input, { color: colors.text }]}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            placeholder="Confirm new password"
            placeholderTextColor={colors.secondaryText}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={showConfirmPassword ? "eye-off" : "eye"}
              size={20}
              color={colors.secondaryText}
            />
          </TouchableOpacity>
        </View>

        <Button
          title="Change Password"
          onPress={onSave}
          size="large"
          style={{ marginTop: SPACING.lg }}
        />
      </View>
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
  body: { paddingHorizontal: SPACING.lg, paddingTop: SPACING.lg },
  label: {
    fontSize: TYPOGRAPHY.sizes.base,
    marginBottom: SPACING.xs,
    fontWeight: TYPOGRAPHY.weights.medium,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
  },
  input: {
    flex: 1,
    paddingVertical: SPACING.md,
    fontSize: TYPOGRAPHY.sizes.base,
  },
  eyeIcon: {
    padding: SPACING.xs,
  },
});
