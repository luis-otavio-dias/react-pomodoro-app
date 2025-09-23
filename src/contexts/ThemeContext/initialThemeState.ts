import type { ThemeProviderState } from "@/models/Theme/ThemeStateModel";

export const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  changeTheme: () => null,
};
