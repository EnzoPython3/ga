import React from 'react';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage }) => {
    return (
        <div className="bg-primary-navy py-20 relative overflow-hidden">
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <img src={backgroundImage} alt={title} className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-primary-navy/80 mix-blend-multiply"></div>
                </div>
            )}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{title}</h1>
                {subtitle && <p className="text-xl text-slate-300 max-w-2xl mx-auto">{subtitle}</p>}
            </div>
        </div>
    );
};

export default PageHeader;
