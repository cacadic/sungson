import "./styles/app.scss";

export const metadata = {
  title: "Súng Bắn Sơn - Tây Hồ",
  description: "09 111111 21",
  themeColor: "black",
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
