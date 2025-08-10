import React from 'react';
import { Button } from "@/components/ui/button"

const Navbar: React.FC = () => {
    return (
        <div className='bg-white px-3 py-2 w-3/5 shadow-sm flex justify-between items-center text-gray-800 rounded-md '>
            <div className='text-lg font-bold'>Gradify</div>
            <div>
                <ul className='flex space-x-10'>
                    <li><a href='#' className='text-gray-700 font-[400] hover:font-medium '>Home</a></li>
                    <li><a href='#' className='text-gray-700 font-[400] hover:font-medium'>About</a></li>
                    <li><a href='#' className='text-gray-700 font-[400] hover:font-medium'>Services</a></li>
                </ul>
            </div>
            <div>
                <Button variant="secondary">Get Started Now</Button>
            </div>
        </div>
    );
};

export default Navbar;