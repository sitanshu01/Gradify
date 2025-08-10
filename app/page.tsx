"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, LucideMoveUpRight } from "lucide-react";

import { useState } from "react";
import { FAQs } from "@/components/faq";

export default function Home() {
  return (
    <div id="#">
      <div
        className={`fixed top-0 left-0 right-0 -z-10 h-screen w-full bg-[radial-gradient(125%_125%_at_50%_10%,_#e5e5e5_40%,_#8b5cf6_100%)]`}
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
        <div id="features" className="flex flex-col items-center justify-center mt-10 w-full h-screen px-10 border-t-1 border-neutral-900 pt-10">
          <h1 className="text-4xl font-bold">Gradients</h1>
          <p className="text-lg text-neutral-500 font-medium mt-5">
            Explore our collection of stunning gradients. Click on a gradient to
            preview it and copy the code.
          </p>
          
        </div>
        <div id="faq" className="flex flex-col items-center justify-center my-10 w-full px-10 border-t-1 border-neutral-900 pt-10">
          <h1 className="text-2xl sm:text-4xl font-bold mb-10 relative before:content-[''] before:absolute before:w-2/3 before:h-0.5 before:bg-neutral-800 before:-bottom-3 before:translate-1/4 ">Frequently Asked Questions</h1>
          <FAQs/>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
