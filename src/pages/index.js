import LeftSide from "@/components/LeftSide";
import NavBar from "@/components/NavBar";
import MainSide from "@/components/MainSide";
import RigthSide from "@/components/RigthSide";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   
    <div className="grid grid-rows-[100px_1fr_100px] grid-cols-[1fr] lg:grid-cols-[20%_1fr_20%] lg:grid-rows-[100px_1fr_100px] lg:gap-y-[10px] lg:gap-x-[10px] bg-gray-200 min-h-dvh gap-y-5">
      <NavBar />
      <LeftSide />
      <MainSide />
      <RigthSide />
      <Footer />
    </div>
    
  );
}
