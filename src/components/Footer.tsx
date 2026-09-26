import { FaRegCopyright } from "react-icons/fa";
import logo from "../assets/logo-text.png";
const Footer = () => {
    return (
        <footer className="border border-gray-100 bg-white px-4 py-3">
            <div className=" flex justify-around items-center mx-auto  ">
                <div>
                    <img src={logo} alt="DevStack" className="mx-auto md:mx-0"/>
                    <p className="text-gray-500 text-sm text-center md:text-start ">Curated tools, technologies, and resources for developers building modern software.</p>
                    <div className=" flex justify-center md:justify-start gap-4 mt-5">
                        <a href="https://github.com/rafiqsd85" className="text-gray-500 hover:text-red-400 cursor-pointer">Github</a>
                        <a href="https://x.com/Rafiqul9378"className=" text-gray-500 hover:text-red-400 cursor-pointer">Twitter</a>
                        <a href="https://www.linkedin.com/in/mdrafiqulislam2085/"className=" text-gray-500 hover:text-red-400 cursor-pointer">Linkedin</a>
                    </div>
                </div>
                <div className="hidden md:block">
                    <h5 className="font-semibold">PRODUCT</h5>
                    <ul className="text-gray-500 text-sm ">
                        <li className="hover:text-red-400 cursor-pointer">Home</li>
                        <li className="hover:text-red-400 cursor-pointer">Technologies</li>
                        <li className="hover:text-red-400 cursor-pointer">Projects</li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <h5 className="font-semibold">COMPANY</h5>
                    <ul className="text-gray-500 text-sm  ">
                        <li className="hover:text-red-400 cursor-pointer">About</li>
                        <li className="hover:text-red-400 cursor-pointer">Contact</li>
                        <li className="hover:text-red-400 cursor-pointer">Careers</li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <h5 className="font-semibold">LEGAL</h5>
                    <ul className="text-gray-500 text-sm ">
                        <li className="hover:text-red-400 cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-red-400 cursor-pointer">Terms of Service</li>
                    </ul>
                </div>
            </div>
            <div className=" relative flex justify-between items-center container mx-auto mt-5">
                <p className="flex justify-between gap-1 items-center text-gray-500 text-sm"><FaRegCopyright />2026 Dev Stack. All rights reserved.</p>
                <div className="flex justify-between items-center gap-6 text-sm text-gray-500 ">
                    <a href="" className="hover:text-red-400 cursor-pointer">Privacy</a>
                    <a href="" className="hover:text-red-400 cursor-pointer">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;