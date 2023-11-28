import React, {useState} from "react";

const SideAdmin = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
      <div className={`bg-gray-300 min-h-screen fixed lg:static w-64 transition-all z-50 duration-300 ${showMenu ? "left-0" : "-left-full"}`}>
      <div className="flex flex-col items-center justify-center p-8 gap-2">
                <img
                    src="public\imagenes\logo.png"
                    className="w-30 h-50 object-cover rounded-full"
                />
                <h1 className="text-xl text-black font-bold">GYMBRO</h1>
                <p className="bg-orange-300 py-1 px-3 rounded-full">ADMIN</p>
            </div>
      <div className="bg-orange-400 p-8 rounded-tr-[130px] flex flex-col justify-between flex-grow">
      <nav className="flex flex-col gap-12">
        <a 
  href="/HomeAdmin"
  className="flex items-center gap-8 text-lg text-white py-2 px-4 rounded-xl hover:bg-gray-300/50 transition-colors"
>   
  Inicio   
</a>
<a 
  href="/Dashboard"
  className="flex items-center gap-8 text-lg text-white py-2 px-4 rounded-xl hover:bg-gray-300/50 transition-colors"
>   
  Usuarios   
</a>
<a 
  href=""
  className="flex items-center gap-8 text-lg text-white py-2 px-4 rounded-xl hover:bg-gray-300/50 transition-colors"
>   
  Administra Rutinas
</a>
        </nav>
        <div className="mt-auto">
        <div className="bg-gray-300/50 text-white p-4 rounded-xl">
          <p className="text-gray-900">¿Tienes problemas?</p>
          <a href="/Contactanos">Contactanos</a>
        </div>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden fixed right-4 bottom-4 text-2xl bg-orange-400 p-3 rounded-full text-white z-50"
        >
        </button>
      </div>
    </div>
  </div>
);
}
export default SideAdmin;
