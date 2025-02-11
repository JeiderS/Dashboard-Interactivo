import { IoStatsChartSharp } from "react-icons/io5";
import { HiMusicNote } from "react-icons/hi";
import { FiUsers, FiSettings } from "react-icons/fi";
import { SiDatacamp, Si1001Tracklists } from "react-icons/si";
import Logo from "../../assets/image.png"
import Navbar from "./Navbar";
import MostrarBitcoin from "../DatosBitcoin/MostrarBitcoin";
import ValorBtc from "../ValorBitcoin/valorBtc";
import MostrarCriptos from "../DatosCriptos/MostrarCriptos";



const Sidebar = () => {
  return (
    <>
      <div className="fixed left-0 top-0 w-64 h-full bg-slate-800 p-4 z-50 sidebar-menu transition-transform">
        <div className="cursor-pointer mb-4">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="space-y-2">
          <li className="flex items-center gap-4 text-lg text-white cursor-pointer hover:bg-[#FF9119] p-2">
              <IoStatsChartSharp />
              <a href="#">Overview</a>
          </li>
          <li className="flex items-center gap-4 text-lg text-white cursor-pointer hover:bg-[#FF9119] p-2">
            <SiDatacamp />
            <a href="#">A&R Data</a>
          </li>
          <li className="flex items-center gap-4 text-lg text-white cursor-pointer hover:bg-[#FF9119] p-2">
            <Si1001Tracklists />
            <a href="#">Challenges</a>
          </li>
          <li className="flex items-center gap-4 text-lg text-white cursor-pointer hover:bg-[#FF9119] p-2">
            <HiMusicNote />
            <a href="#">Songs</a>
          </li>
          <li className="flex items-center gap-4 text-lg text-white cursor-pointer hover:bg-[#FF9119] p-2">
            <FiUsers />
            <a href="#">Users</a>
          </li>
          <li className="flex items-center gap-4 text-lg text-white cursor-pointer hover:bg-[#FF9119] p-2">
            <FiSettings />
            <a href="#">Settings</a>
          </li>
        </ul>
      </div>

      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-slate-700 min-h-screen transition-all p-6 space-y-4">
        <Navbar />
        <MostrarBitcoin />
        <ValorBtc />
        <MostrarCriptos />
      </main>
    </>
      
       
       

    );
};

export default Sidebar;