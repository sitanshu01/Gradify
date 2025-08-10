"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronRightIcon, LucideMoveUpRight, Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [bgColor, setBgColor] = useState("bg-neutral-100");
  const colors = [
    "bg-[radial-gradient(125%_125%_at_50%_10%,_white_40%,_#6366f1_100%)]",
    "bg-[radial-gradient(125%_125%_at_50%_10%,_white_40%,_#f59e0b_100%)]",
    "bg-[radial-gradient(125%_125%_at_50%_10%,_white_40%,_#10b981_100%)]",
    "bg-[radial-gradient(125%_125%_at_50%_10%,_white_40%,_#ef4444_100%)]",
    "bg-[radial-gradient(125%_125%_at_50%_10%,_white_40%,_#8b5cf6_100%)]",
    "bg-[radial-gradient(125%_125%_at_50%_10%,_white_40%,_#f472b6_100%)]",
    
  ];

  function handleColorChange(color: string) {
    setBgColor(color);
  }

  return (
    <div id="home">
      <div
        className={`fixed top-0 left-0 right-0 -z-10 h-screen w-full ${bgColor}`}
      ></div>
      <div className="min-h-screen h-max w-full  py-5 flex flex-col items-center ">
        <Navbar />
        <div className="flex flex-col items-center justify-center space-y-10 mt-15">
          <div className="flex space-x-2 bg-indigo-600 p-1 rounded-md">
            <Button variant="default" className="!bg-indigo-500">
              New Features
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-indigo-500 text-primary-foreground hover:text-primary-foreground "
            >
              Read More
            </Button>
          </div>
          <div className="flex justify-center items-center flex-col space-y-2">
            <h1 className="sm:text-6xl text-4xl font-medium">Create Beautiful,</h1>
            <h1 className="sm:text-6xl text-4xl  font-medium ">Pattern Backgrounds</h1>
            <p className="text-lg w-1/2 text-center text-neutral-500 font-medium mt-5">
              Professional-grade background patterns and gradients. Easily copy
              the code and seamlessly integrate it into your projects. Crafted
              with modern CSS and Tailwind
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="!BG">
              Get Started Now <ChevronRightIcon />{" "}
            </Button>
            <Button variant="default">
              Explore Features <LucideMoveUpRight />{" "}
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-5 mt-10 sm:px-20 px-10 w-full">
          <div className="w-full">
            <h1 className="text-neutral-900 font-bold text-3xl">
              Pattern Library
            </h1>
            <p className="text-neutral-500 font-medium">
              Explore our extensive library of patterns and gradients.
            </p>
          </div>
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <Input
              placeholder="Search Patterns..."
              className="w-full shadow-sm pl-10"
            />
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start items-start mt-10 gap-8 w-full">
            {colors.map((key, i) => (
              <Card
                key={i}
                handldeColorChange={handleColorChange}
                color={key}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
