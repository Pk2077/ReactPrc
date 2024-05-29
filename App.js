import { useEffect, useState } from "react";
import WelcomeScreen from "./app/Screens/WelcomeScreen/WelcomeScreen";
import WelcomeFocus from "./app/Screens/WelcomeFocus/WelcomeFocus";

export default function App() {
  const [isFocused, setIsFocused] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFocused(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return isFocused ? <WelcomeFocus /> : <WelcomeScreen />;
}
