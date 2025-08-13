# BANKPICK - Fintech Mobile App

A modern, responsive fintech mobile application built with React Native and Expo, featuring both light and dark themes.

## 🚀 Features

- **Splash Screen**: Beautiful animated logo with gradient rings
- **Onboarding Flow**: 3 welcome pages with pagination
- **Authentication**: Sign in screen with form validation
- **Theme System**: Light and dark theme support
- **Responsive Design**: Optimized for all mobile devices
- **TypeScript**: Full type safety and better development experience

## 🎨 Design System

### Color Palette

- **Primary Blue**: `#0066FF`
- **Dark Theme Backgrounds**: `#161622`, `#1E1E2D`, `#232533`
- **Light Theme Backgrounds**: `#FFFFFF`, `#F8F9FA`, `#E9ECEF`
- **Text Colors**: `#FFFFFF` (dark), `#161622` (light)
- **Secondary Text**: `#A2A2A7` (dark), `#6C757D` (light)

### Typography

- **Font Sizes**: 12px to 36px scale
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Line Heights**: 1.2 (tight), 1.5 (normal), 1.75 (relaxed)

### Spacing

- **Spacing Scale**: 4px, 8px, 16px, 24px, 32px, 48px, 64px
- **Border Radius**: 8px, 12px, 16px, 20px, full

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Button component with variants
│   ├── Input.tsx       # Input field component
│   └── index.ts        # Component exports
├── screens/            # Screen components
│   ├── SplashScreen.tsx    # App launch screen
│   ├── WelcomeScreen.tsx   # Onboarding screens
│   └── SignInScreen.tsx    # Authentication screen
├── navigation/         # Navigation setup
│   └── AppNavigator.tsx    # Main navigation structure
├── themes/            # Theme management
│   └── ThemeContext.tsx    # Theme context and provider
├── constants/         # Design system constants
│   ├── colors.ts      # Color definitions
│   ├── typography.ts  # Typography scale
│   └── spacing.ts     # Spacing and layout constants
├── utils/             # Utility functions
└── App.tsx            # Main app component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (macOS) or Android Emulator

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd bankpick
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your phone

## 📱 Screens

### 1. Splash Screen

- BANKPICK logo with gradient rings
- 3-second display duration
- Smooth transition to welcome flow

### 2. Welcome Screens (3 pages)

- **Page 1**: Fastest Payment in the world
- **Page 2**: Most Secure Platform for Customer
- **Page 3**: Easy and Convenient Payments
- Pagination dots indicator
- Skip option available

### 3. Sign In Screen

- Email and password inputs
- Form validation
- Sign up link for new users
- Back navigation to welcome flow

## 🎯 Component Library

### Button Component

- **Variants**: Primary, Secondary, Outline
- **Sizes**: Small, Medium, Large
- **States**: Normal, Disabled, Loading
- **Customizable**: Style and text style props

### Input Component

- **Types**: Text, Email, Password
- **Icons**: Left and right icon support
- **Validation**: Error message display
- **Accessibility**: Proper keyboard types and auto-capitalization

## 🔧 Customization

### Adding New Themes

1. Update `src/constants/colors.ts`
2. Add new theme colors
3. Update `ThemeContext.tsx` to include new theme

### Adding New Components

1. Create component in `src/components/`
2. Export from `src/components/index.ts`
3. Follow existing component patterns

### Adding New Screens

1. Create screen in `src/screens/`
2. Add to navigation in `src/navigation/AppNavigator.tsx`
3. Update types and navigation logic

## 🚀 Next Steps

- [ ] Implement actual authentication logic
- [ ] Add more detailed illustrations for welcome screens
- [ ] Create dashboard and main app screens
- [ ] Add animations and micro-interactions
- [ ] Implement backend integration
- [ ] Add biometric authentication
- [ ] Create user profile screens
- [ ] Add transaction history
- [ ] Implement push notifications

## 📄 License

This project is for portfolio purposes.

## 🤝 Contributing

This is a portfolio project, but suggestions and improvements are welcome!

---

Built with ❤️ using React Native + Expo
