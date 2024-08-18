import { createContext } from "react";

export const LightModeContext = createContext<{
  isLightMode: boolean;
  setLightMode: React.Dispatch<boolean>;
}>({ isLightMode: false, setLightMode: () => {} });
