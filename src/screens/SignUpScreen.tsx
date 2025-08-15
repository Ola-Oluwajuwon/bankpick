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

interface SignUpScreenProps {
  onSignUp: (
    fullName: string,
    phone: string,
    email: string,
    password: string
  ) => void;
  onBack: () => void;
  onSignIn: () => void;
}

export const SignUpScreen: React.FC<SignUpScreenProps> = ({
  onSignUp,
  onBack,
  onSignIn,
}) => {
  const { colors } = useTheme();
  const [fullName, setFullName] = useState("Tanya Myroniuk");
  const [phone, setPhone] = useState("+8801712663389");
  const [email, setEmail] = useState("tanya.myroniuk@gmail.com");
  const [password, setPassword] = useState("password123");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!fullName || !phone || !email || !password) return;

    setLoading(true);
    try {
      await onSignUp(fullName, phone, email, password);
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
        <Text style={[styles.title, { color: colors.text }]}>Sign Up</Text>

        {/* Form */}
        <View style={styles.form}>
          <Input
            label="Full Name"
            value={fullName}
            onChangeText={setFullName}
            leftIcon="person"
            autoCapitalize="words"
            autoCorrect={false}
          />

          <Input
            label="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            leftIcon="call"
            autoCapitalize="none"
            autoCorrect={false}
          />

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

        {/* Sign Up Button */}
        <Button
          title="Sign Up"
          onPress={handleSignUp}
          loading={loading}
          size="large"
          style={styles.signUpButton}
        />

        {/* Sign In Link */}
        <View style={styles.signInContainer}>
          <Text style={[styles.signInText, { color: colors.text }]}>
            Already have an account.{" "}
          </Text>
          <TouchableOpacity onPress={onSignIn}>
            <Text style={[styles.signInLink, { color: colors.primary }]}>
              Sign In
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
  signUpButton: {
    width: "100%",
    marginBottom: SPACING.xl,
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: SPACING.lg,
  },
  signInText: {
    fontSize: TYPOGRAPHY.sizes.base,
  },
  signInLink: {
    fontSize: TYPOGRAPHY.sizes.base,
    fontWeight: TYPOGRAPHY.weights.semibold,
  },
});
