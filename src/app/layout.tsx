import "./globals.css";

export const metadata = {
  title: "Spotwind Clone",
  description: "A spotify ui clone made with tailwindcss and nextjs framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-zinc-900 text-zinc-50'>{children}</body>
    </html>
  );
}
