"use client";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeBtn() {
  // Look at next-themes documentation:
  const { theme, setTheme, systemTheme } = useTheme();
  // * theme = "dark" or "light" or "system", systemTheme = "dark" or "light"
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(theme);

  useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <FontAwesomeIcon
            icon={faSun}
            className="text-xl cursor-pointer hover:text-[#f36913] transition-colors duration-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            className="text-xl cursor-pointer hover:text-[#f36913] transition-colors duration-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
}

export default ThemeBtn;
