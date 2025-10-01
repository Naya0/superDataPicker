import { useEffect } from "react";

interface PropsTheme {
  theme: "light" | "dark";
}

function ThemeToggle({ theme }: PropsTheme) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return null;
}
export default ThemeToggle;
