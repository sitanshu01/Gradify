
"use client";
import React, { use } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, CopyIcon, EyeClosedIcon, LucideCopy, LucideEye } from "lucide-react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: string; // Tailwind color class, e.g. "bg-blue-500"
}

const Card: React.FC<CardProps> = ({ color = "bg-neutral-300", className = "", ...props }) => {
    const CopyText = () => {
        navigator.clipboard.writeText(`className="${color}"`);
        alert("Code copied to clipboard!");
    };
    const Preview = (color:string) => {
        console.log(`Previewing color: ${color}`);
        document.getElementById("home")!.style.backgroundColor = color; 
    };
    return (
        <div
            className={`rounded-lg shadow-md ${color} ${className} h-[16rem] w-[16rem] hover:bg-gradient-to-b hover:from-transparent hover:to-neutral-900/80 transition-all duration-300 `}
            {...props}
        >
            <div className="w-full h-full flex flex-col gap-5 justify-center items-center opacity-0 hover:opacity-100 hover:-translate-y-2 transition-all duration-300">
                <h1 className="text-neutral-800 font-medium">{color}</h1>
                <Button onClick={()=> Preview(color)} className="w-2/3" variant="secondary"> <LucideEye/> Preview</Button>
                <Button onClick={CopyText} className="w-2/3" variant="default"><LucideCopy/> Code</Button>
            </div>
        </div>
    );
};

export default Card;