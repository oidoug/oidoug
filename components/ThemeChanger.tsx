import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { FiSun, FiMoon } from "react-icons/fi";

export const ThemeChanger = () => {
  const { theme, themes, setTheme } = useTheme();

  return (
    <>
      <Button
        auto
        size="sm"
        color="secondary"
        icon={
          themes[0] === theme ? (
            <FiMoon color="#010101" />
          ) : (
            <FiSun color="#fff" />
          )
        }
        onClick={() => setTheme(themes[0] === theme ? themes[1] : themes[0])}
      />
    </>
  );
};
