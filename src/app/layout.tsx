import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import { Providers } from "./providers";

export const metadata = {
  title: "Bensare Homestay Solo - Your Home Away From Home",
  description: "Experience the charm of Surakarta with a comfortable stay at BenSare Homestay. Ideal for families, solo travelers, and business trips. Book your stay now!",
  openGraph: {
    images: [
      {
        url: "/thumbImg.webp",
        width: 1200,
        height: 630,
        alt: "BenSare Homestay Thumbnail Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
