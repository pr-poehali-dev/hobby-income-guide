import { createContext, useContext, useState, useEffect } from "react";

interface AccessibilityContextType {
  enabled: boolean;
  toggle: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType>({
  enabled: false,
  toggle: () => {},
});

export function useAccessibility() {
  return useContext(AccessibilityContext);
}

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(() => {
    return localStorage.getItem("a11y") === "1";
  });

  useEffect(() => {
    localStorage.setItem("a11y", enabled ? "1" : "0");
    if (enabled) {
      document.documentElement.classList.add("a11y");
    } else {
      document.documentElement.classList.remove("a11y");
    }
  }, [enabled]);

  const toggle = () => setEnabled((v) => !v);

  return (
    <AccessibilityContext.Provider value={{ enabled, toggle }}>
      {children}
    </AccessibilityContext.Provider>
  );
}
