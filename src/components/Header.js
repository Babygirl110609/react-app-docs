import React, { useState } from 'react';
import Home from '../pages/Home';
import About from '../pages/AboutMe';
import Contact from '../pages/Contact';
import NavMenu from "./NavMenu";
import Project from '../pages/Project';
// import Resume from '../pages/Resume';
export default function Header() {
    const [currentPage, setCurrentPage] = useState('Home');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About-Me') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }

        if (currentPage === 'Project') {
            return <Project />;
        }


        // if (currentPage === 'Resume') {
        //     return <Resume />;
        // }

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* We are passing the currentPage from state and the function to update it */}
            <NavMenu currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
        </div>
    );
}
