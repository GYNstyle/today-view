import "./globals.css";

export const metadata = {
  title: "Today's View",
  description: "Take me to see the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
