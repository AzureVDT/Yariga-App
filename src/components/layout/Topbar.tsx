import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconNotification, IconSearch } from "../icon";

const Topbar = () => {
    return (
        <div className="flex items-center justify-between px-5 py-4 bg-grayfc">
            <div className="flex items-center gap-[82px] flex-1">
                <Link href={"/"} className="flex items-center gap-x-3">
                    <Image
                        src={`/Logo.png`}
                        alt="Yariga"
                        width={173}
                        height={35}
                        priority
                    ></Image>
                </Link>
                <div
                    className="px-[10px] bg-grayf4 rounded-lg flex items-center gap-x-2
                flex-[0_1_405px] h-[38px]"
                >
                    <IconSearch></IconSearch>
                    <input
                        type="text"
                        placeholder="Search Property, Customer etc"
                        className="w-full text-xs font-normal placeholder:text-gray80"
                    />
                </div>
            </div>
            <div className="flex items-center flex-shrink-0 gap-x-5">
                <span className="flex-shrink-0">
                    <IconNotification></IconNotification>
                </span>
                <div className="flex items-center flex-shrink-0 gap-x-[10px]">
                    <Image
                        src={`https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80`}
                        alt="avatar"
                        width={40}
                        height={40}
                        className="object-cover w-10 h-10 rounded-full"
                    ></Image>
                    <div className="flex flex-col">
                        <h4 className="font-semibold">Hawkins Maru</h4>
                        <span className="text-gray80">Company Manager</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
