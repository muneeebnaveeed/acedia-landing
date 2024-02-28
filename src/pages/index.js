import Image from "next/image";
import { Inter } from "next/font/google";
import TopNavbar from "@/components/layout/top-navbar";

const inter = Inter({ subsets: ["latin"] });
const Home = () => {
  return <TopNavbar />;
};

export default Home;
