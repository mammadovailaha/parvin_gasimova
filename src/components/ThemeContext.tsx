// import { createContext, useState, useEffect } from "react";
// import type { ReactNode } from "react";

// export type ThemeContextType = {
//   dark: boolean;
//   toggleTheme: () => void;
// };

// export const ThemeContext = createContext<ThemeContextType | undefined>(
//   undefined
// );

// type ThemeProviderProps = {
//   children: ReactNode;
// };

// export const ThemeProvider = ({ children }: ThemeProviderProps) => {
//   const [dark, setDark] = useState<boolean>(() => {
//     return localStorage.getItem("theme") === "dark";
//   });

//   const toggleTheme = () => setDark((prev) => !prev);

//   useEffect(() => {
//     localStorage.setItem("theme", dark ? "dark" : "light");
//   }, [dark]);

//   return (
//     <ThemeContext.Provider value={{ dark, toggleTheme }}>
//       <div className={`${dark ? "dark" : ""} overflow-x-hidden`}>{children}</div>
//     </ThemeContext.Provider>
//   );
// };
