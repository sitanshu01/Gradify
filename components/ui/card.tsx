"use client";
import React, { use } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, CopyIcon, EyeClosedIcon, LucideCopy, LucideEye } from "lucide-react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: string; // Tailwind color class, e.g. "bg-blue-500",
    className?: string; // Additional classes for styling
    handldeColorChange: (color: string) => void; // Function to handle color change
}

const Card: React.FC<CardProps> = ({ handldeColorChange, color = "bg-neutral-300", className = "", ...props }) => {
    const CopyText = () => {
        navigator.clipboard.writeText(`${color}`);
        // alert("Code copied to clipboard!");
    };
    return (
        <div
            className={`rounded-lg shadow-md ${color} ${className} sm:h-[16rem] sm:w-[16rem] h-[10rem] w-[10rem] overflow-hidden
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-100 focus:ring-neutral-500 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer
                `}
            {...props}
        >
            <div className="w-full h-full flex flex-col gap-5 justify-center items-center opacity-0 hover:opacity-100 hover:bg-gradient-to-b hover:from-transparent hover:to-neutral-900/70 transition-all duration-300 overflow-hidden">
                <h1 className="font-bold text-2xl text-white w-full text-center">Hello</h1>
                <Button onClick={()=> {handldeColorChange(color);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }} className="w-2/3" variant="secondary"> <LucideEye/> Preview</Button>
                <Button onClick={CopyText} className="w-2/3" variant="default"><LucideCopy/> Code</Button>
            </div>
        </div>
    );
};

export default Card;