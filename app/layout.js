import "./globals.css";

export const metadata = {
  title: "Pahadi Pickle",
  description: "Authentic Himachali Pickles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
