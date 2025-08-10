import { ReactNode } from 'react';

interface BackgroundProps {
    children?: ReactNode;
    color?: string;
    gradient?: string;
    className?: string;
}

const Background = ({ children, color = '', className = '' }: BackgroundProps) => {
    return (
        <div className={`${color} ${className}  w-full h-max min-h-screen`}>
            {children}
        </div>
    );
};

export default Background;