
import "./globals.css";
import Providers from "./providers";
import ThemeSwitcher from "./ThemeSwitcher";


export const metadata = {
  title: "Dark /Light Mode UI",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers> 
          <ThemeSwitcher />
          {children}
          </Providers>
      </body>
    </html>
  );
}
 