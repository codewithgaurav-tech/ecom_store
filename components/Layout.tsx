import React, { ReactNode, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './DashboardFooter';

import instance from '../src/axios/interceptor'; // Use 'instance' instead of 'axios'


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Example GET request
        instance.get('todos/1')
            .then((response) => {
                console.log(response)
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="preloader-wrapper">
                    <div className="preloader"></div>
                </div>
            ) : (
                <>
                    <Header />
                    {children}
                    <Footer />
                </>
            )}
        </>
    );
};

export default Layout;
