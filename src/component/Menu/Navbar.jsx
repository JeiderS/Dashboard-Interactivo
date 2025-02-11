



const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-slate-700">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="https://flowbite.com" class="flex items-center" >
          <img src=" https://cryptologos.cc/logos/bitcoin-btc-logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Bitcoin (BTC)</span>
        </a>
        <div className="flex items-center lg:order-2">
          <a href="#" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">Iniciar Sesion</a>
          <a href="#" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">Cerrar Sesion</a>
        </div>
       </div>
    </nav>
    );
};

export default Navbar;