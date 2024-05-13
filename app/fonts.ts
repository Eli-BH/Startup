import { Inter, Poppins, Bungee_Shade, Press_Start_2P } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export const bungee = Bungee_Shade({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
});

export const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});
