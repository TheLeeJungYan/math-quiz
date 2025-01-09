import Logo from "@/images/Logo2.png"
import { GithubIcon } from "hugeicons-react";
const Header = () => {
    return (
        <div className="flex px-20 py-10 items-center ">
            <div className="flex gap-5 items-end">
                <img src={Logo} className="h-12 object-contain"></img>
                <div className="font-montserratBold text-3xl font-medium text-gray-600">
                    <span className="text-sky-400">M</span>
                    <span className="text-orange-400">A</span>
                    <span className="text-red-300">T</span>
                    <span className="text-yellow-400">H</span>
                    ZAP
                </div>
            </div>
           <div className="ml-auto">
            <a href="https://github.com/TheLeeJungYan/math-quiz" target="__blank" className="text-gray-600">
                <GithubIcon size={28} />
            </a>
            
           </div>
        </div>
    )
}

export default Header;