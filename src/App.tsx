import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./themes/ThemeContext";
import { AppNavigator } from "./navigation/AppNavigator";
import { SplashScreen } from "./screens/SplashScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { SignInScreen } from "./screens/SignInScreen";
import { SignUpScreen } from "./screens/SignUpScreen";
import { BottomTabNavigator } from "./navigation/BottomTabNavigator";
import { View, Text, TouchableOpacity } from "react-native";

// Simple illustration components (you can replace these with more detailed SVGs later)
const WelcomeIllustration1: React.FC = () => (
  <View
    style={{
      width: 300,
      height: 200,
      backgroundColor: "#E3F2FD",
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ fontSize: 24, color: "#0066FF" }}>💳 Payment</Text>
  </View>
);

const WelcomeIllustration2: React.FC = () => (
  <View
    style={{
      width: 300,
      height: 200,
      backgroundColor: "#E3F2FD",
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ fontSize: 24, color: "#0066FF" }}>🔒 Security</Text>
  </View>
);

const WelcomeIllustration3: React.FC = () => (
  <View
    style={{
      width: 300,
      height: 200,
      backgroundColor: "#E3F2FD",
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ fontSize: 24, color: "#0066FF" }}>💰 Easy Payment</Text>
  </View>
);

// Welcome content for the three pages
const welcomeContent = [
  {
    title: "Fastest Payment in the world",
    description:
      "Integrate multiple payment methods to help you up the process quickly",
    illustration: <WelcomeIllustration1 />,
  },
  {
    title: "The most Secure Platform for Customer",
    description:
      "Built-in Fingerprint, face recognition and more, keeping you completely safe",
    illustration: <WelcomeIllustration2 />,
  },
  {
    title: "Paying for Everything is Easy and Convenient",
    description:
      "Built-in Fingerprint, face recognition and more, keeping you completely safe",
    illustration: <WelcomeIllustration3 />,
  },
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<
    "splash" | "welcome" | "signin" | "signup" | "dashboard"
  >("splash");
  const [welcomePage, setWelcomePage] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // Error boundary for web
  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 18, marginBottom: 20 }}>
          Something went wrong
        </Text>
        <Text style={{ fontSize: 14, marginBottom: 20, textAlign: "center" }}>
          {error}
        </Text>
        <TouchableOpacity
          style={{ padding: 10, backgroundColor: "#0066FF", borderRadius: 8 }}
          onPress={() => setError(null)}
        >
          <Text style={{ color: "white" }}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleSplashFinish = () => {
    try {
      setCurrentScreen("welcome");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  const handleWelcomeNext = () => {
    if (welcomePage < 2) {
      setWelcomePage(welcomePage + 1);
    } else {
      setCurrentScreen("signin");
    }
  };

  const handleWelcomeSkip = () => {
    setCurrentScreen("signin");
  };

  const handleSignInBack = () => {
    setCurrentScreen("welcome");
    setWelcomePage(0);
  };

  const handleSignIn = async (email: string, password: string) => {
    // No auth for now - directly go to dashboard
    console.log("Sign in:", email, password);
    setCurrentScreen("dashboard");
  };

  const handleSignUp = () => {
    setCurrentScreen("signup");
  };

  const handleSignUpBack = () => {
    setCurrentScreen("signin");
  };

  const handleSignUpSubmit = async (
    fullName: string,
    phone: string,
    email: string,
    password: string
  ) => {
    // No auth for now - directly go to dashboard
    console.log("Sign up:", { fullName, phone, email, password });
    setCurrentScreen("dashboard");
  };

  const handleSignUpToSignIn = () => {
    setCurrentScreen("signin");
  };

  const renderCurrentScreen = () => {
    console.log("Current screen:", currentScreen); // Debug log

    switch (currentScreen) {
      case "splash":
        console.log("Rendering splash screen"); // Debug log
        return <SplashScreen onFinish={handleSplashFinish} />;
      case "welcome":
        console.log("Rendering welcome screen"); // Debug log
        return (
          <WelcomeScreen
            content={welcomeContent[welcomePage]}
            currentPage={welcomePage}
            totalPages={3}
            onNext={handleWelcomeNext}
            onSkip={handleWelcomeSkip}
          />
        );
      case "signin":
        console.log("Rendering signin screen"); // Debug log
        return (
          <SignInScreen
            onSignIn={handleSignIn}
            onBack={handleSignInBack}
            onSignUp={handleSignUp}
          />
        );
      case "signup":
        console.log("Rendering signup screen"); // Debug log
        return (
          <SignUpScreen
            onSignUp={handleSignUpSubmit}
            onBack={handleSignUpBack}
            onSignIn={handleSignUpToSignIn}
          />
        );
      case "dashboard":
        console.log("Rendering dashboard screen"); // Debug log
        return (
          <NavigationContainer>
            <BottomTabNavigator />
          </NavigationContainer>
        );
      default:
        console.log("Rendering default screen"); // Debug log
        return <SplashScreen onFinish={handleSplashFinish} />;
    }
  };

  return (
    <ThemeProvider>
      <StatusBar style="light" />
      {renderCurrentScreen()}
    </ThemeProvider>
  );
}
