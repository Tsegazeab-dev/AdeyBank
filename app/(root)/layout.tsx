export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    sidebar layout component
    {children}
    </>
  );
}
