import "@fontsource/space-mono"; // Changed font to Space Mono for a more indie look
import "./globals.css";

export const metadata = {
  title: "Thomas Cormican - Dev",
  description: "Fullstack Dev & ML Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-mono antialiased">
        {children}
      </body>
    </html>
  );
}
