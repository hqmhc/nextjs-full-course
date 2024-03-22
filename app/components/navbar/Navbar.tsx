import React from 'react';
import Link from "next/link"

const Navbar: React.FC = () => {

    return (
        <div>
            <div>Logo</div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar