import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../themes/ThemeContext";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { SPACING } from "../constants/spacing";
import { TYPOGRAPHY } from "../constants/typography";

interface SignInScreenProps {
  onSignIn: (email: string, password: string) => void;
  onBack: () => void;
  onSignUp: () => void;
}

export const SignInScreen: React.FC<SignInScreenProps> = ({
  onSignIn,
  onBack,
  onSignUp,
}) => {
  const { colors } = useTheme();
  const [email, setEmail] = useState("tanyamyroniuk@gmail.com");
  const [password, setPassword] = useState("password123");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) return;

    setLoading(true);
    try {
      await onSignIn(email, password);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Ionicons name="arrow-back" size={24} color={colors.text} />
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <Text style={[styles.title, { color: colors.text }]}>Sign In</Text>

        {/* Form */}
        <View style={styles.form}>
          <Input
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            leftIcon="mail"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            leftIcon="lock-closed"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        {/* Sign In Button */}
        <Button
          title="Sign In"
          onPress={handleSignIn}
          loading={loading}
          size="large"
          style={styles.signInButton}
        />

        {/* Sign Up Link */}
        <View style={styles.signUpContainer}>
          <Text style={[styles.signUpText, { color: colors.text }]}>
            I'm a new user.{" "}
          </Text>
          <TouchableOpacity onPress={onSignUp}>
            <Text style={[styles.signUpLink, { color: colors.primary }]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: SPACING.xl + 40,
    left: SPACING.lg,
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING["3xl"] + 40,
  },
  title: {
    fontSize: TYPOGRAPHY.sizes["3xl"],
    fontWeight: TYPOGRAPHY.weights.bold,
    marginBottom: SPACING["2xl"],
    textAlign: "left",
  },
  form: {
    marginBottom: SPACING["2xl"],
  },
  signInButton: {
    width: "100%",
    marginBottom: SPACING.xl,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: SPACING.lg,
  },
  signUpText: {
    fontSize: TYPOGRAPHY.sizes.base,
  },
  signUpLink: {
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.weights.semibold,
  },
});
