import React from 'react';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    icon?: React.ElementType;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    icon: Icon,
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary-navy text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20",
        secondary: "bg-primary-gold text-white hover:bg-[#b59049] shadow-lg shadow-orange-900/10",
        outline: "bg-transparent border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white",
        text: "bg-transparent text-primary-gold hover:text-primary-navy p-0",
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
            {...props}
        >
            {Icon && <Icon size={18} className="mr-2" />}
            {children}
        </button>
    );
};

export default Button;
