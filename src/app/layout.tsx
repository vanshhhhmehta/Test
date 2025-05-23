import HeaderMain from "../../components/HeaderMain";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <HeaderMain/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
