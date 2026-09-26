import  { useState } from 'react';
import logo from "../assets/logo-text.png";
import { RxHamburgerMenu } from 'react-icons/rx';
const Navbar = () => {
    const[menu,setMenu] = useState(false);
    return (
        <nav className=" bg-white border-b border-gray-100">
            <div className= "relative flex justify-between items-center container mx-auto px-4 py-2" >
            <button className="md:hidden cursor-pointer" onClick={() => setMenu(!menu)}>
                <RxHamburgerMenu />
            </button>
            <img className="md:static absolute left-1/2 transform -translate-x-1/2 md:translate-x-0  md:w-28" src={logo} alt="Devstack" />
            <ul className="hidden md:flex gap-3 items-center text-xs text-gray-500 ">
                <li className="cursor-pointer hover:text-pink-500">Home</li>
                <li className="cursor-pointer hover:text-pink-500">Technologies</li>
                <li className="cursor-pointer hover:text-pink-500">Projects</li>
                <li className="cursor-pointer hover:text-pink-500">About</li>
                <li className="cursor-pointer hover:text-pink-500">Contact</li>
            </ul>

            <div className="flex gap-2 items-center">
                <button className="btn btn-sm rounded-full">Sign In</button>
                <button className="btn btn-secondary  btn-sm rounded-full">Sign Up</button>
            </div>
            </div>
            {menu && (
                <ul className="md:hidden flex flex-col gap-3  text-xs text-gray-500 px-4 py-2">
                    <li className="cursor-pointer hover:text-pink-500">Home</li>
                    <li className="cursor-pointer hover:text-pink-500">Technologies</li>
                    <li className="cursor-pointer hover:text-pink-500">Projects</li>
                    <li className="cursor-pointer hover:text-pink-500">About</li>
                    <li className="cursor-pointer hover:text-pink-500">Contact</li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;