import { VideoCard } from "@/components/VideoCard";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
      <div>
       <VideoCard/>
      </div>
  );
}
