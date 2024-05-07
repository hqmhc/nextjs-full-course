import React from 'react';
import Link from "next/link"

const Navbar: React.FC = () => {

    return (
        <div className="flex justify-between items-center py-4 px-8">
            <div className="flex items-center">
                <div className="mr-4">Logo</div>
            </div>
            <div className="flex">
                <Link href="/">Home</Link>
                <Link href="/about" className="ml-4">About</Link>
                <Link href="/contact" className="ml-4">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;
