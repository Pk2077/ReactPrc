import { useEffect, useState } from "react";
import WelcomeFocus from "./app/Screens/WelcomeFocus";
import WelcomeScreen from "./app/Screens/WelcomeScreen";
import DashBoard from "./app/Screens/DashBoard";

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
