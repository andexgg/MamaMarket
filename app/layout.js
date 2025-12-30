import "./globals.css";

export const metadata = {
  title: "Mama Market",
  description: "Premium products delivered nationwide"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
