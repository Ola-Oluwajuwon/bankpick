import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "./themes/ThemeContext";
import { AppNavigator } from "./navigation/AppNavigator";
import { SplashScreen } from "./screens/SplashScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { SignInScreen } from "./screens/SignInScreen";
import { View, Text } from "react-native";

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
    "splash" | "welcome" | "signin"
  >("splash");
  const [welcomePage, setWelcomePage] = useState(0);

  const handleSplashFinish = () => {
    setCurrentScreen("welcome");
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
    // TODO: Implement actual sign in logic
    console.log("Sign in:", email, password);
  };

  const handleSignUp = () => {
    // TODO: Navigate to sign up screen
    console.log("Navigate to sign up");
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case "splash":
        return <SplashScreen onFinish={handleSplashFinish} />;
      case "welcome":
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
        return (
          <SignInScreen
            onSignIn={handleSignIn}
            onBack={handleSignInBack}
            onSignUp={handleSignUp}
          />
        );
      default:
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
