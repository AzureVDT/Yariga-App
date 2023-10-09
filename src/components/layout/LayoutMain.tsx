import React from "react";
interface ILayoutMainProps {
    children: React.ReactNode;
}
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
const LayoutMain = ({ children }: ILayoutMainProps) => {
    return (
        <>
            <Topbar></Topbar>
            <div className="grid grid-cols-[250px_minmax(0,1fr)] min-h-screen">
                <Sidebar></Sidebar>
                {children}
            </div>
        </>
    );
};

export default LayoutMain;
