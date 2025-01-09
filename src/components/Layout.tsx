import React from 'react';
import { ChildrenProps } from "@/global/type";
const Layout: React.FC<ChildrenProps>= ({children}) =>{
    return (
        <div className="flex flex-col min-h-screen w-full">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
            {children}
        </div>
    )
}

export default Layout;

