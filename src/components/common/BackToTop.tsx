'use client'
import {BackToTopArrow} from '@/utils/icons';
import { useEffect, useState } from 'react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-dark-red text-white p-1 sm:p-3 rounded-full shadow-md z-40 transition-opacity duration-300 hover:opacity-55"
                >
                  <BackToTopArrow/>
                </button>
            )}
        </>
    );
};

export default BackToTop;
