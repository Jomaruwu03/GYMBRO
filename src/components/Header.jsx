import React from "react";

const Header = () => {
    return (
        <header className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="tex-2xl md:text-3xl font-mono">Bienvenido a <span className="text-orange-500">GYMBRO</span></h1>
        <form className="w-full md:w-auto">
            <div className="relative">
            </div>
        </form>
        </header>
    );
}


export default Header;