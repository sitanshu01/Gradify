import React from 'react';
import { Button } from "@/components/ui/button"

const Navbar: React.FC = () => {
    return (
        <div className='bg-white px-3 py-2 sm:w-3/5 w-4/5 shadow-sm flex justify-between items-center text-gray-800 rounded-md '>
            <div className='text-base sm:text-lg font-bold'>Gradify</div>
            <div>
                <ul className='flex space-x-2 sm:space-x-10'>
                    <li><a href='#' className='text-gray-700 font-[400] hover:font-medium '>Gradients</a></li>
                    <li><a href='#' className='text-gray-700 font-[400] hover:font-medium'>Templates</a></li>
                    <li><a href='#' className='text-gray-700 font-[400] hover:font-medium'>Fonts</a></li>
                </ul>
            </div>
            <div>
                <Button variant="secondary">Get Started Now</Button>
            </div>
        </div>
    );
};

export default Navbar;