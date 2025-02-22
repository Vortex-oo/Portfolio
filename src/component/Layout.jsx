// src/components/Layout.js
import React from "react";
import { Navbar } from "./navbar";

const Layout = ({ children }) => {
    return (
        <div className="relative">
            {/* Sticky Navbar */}
            <div className="fixed top-0 left-0 w-full bg-transparent text-white z-50 flex items-center font-[Yesteryear]  ">
                <div className='flex items-center justify-center gap-2 '>
                    <img src="https://utfs.io/f/2d51fe9c-199f-4de6-9d70-a8505c909c62-sg2m69.png" alt="logo" className='w-9 h-9 rounded-full' />
                    <h1 className='font-bold text-xl'  >DEBJIT</h1>
                </div>
                <div className='ml-auto'>
                    <Navbar />
                </div>
            </div>

            {/* Page Content (Adds space for navbar height) */}
            <div className="pt-16">{children}</div>
        </div>
    );
};

export default Layout;
