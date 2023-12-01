import React from 'react'

export default function LandingNavbar() {
    return (
        <div>
            <header className="sticky top-0 z-[20] p-4">
                <nav className="flex items-center justify-between max-w-screen-xl mx-auto">
                    {/* Logo */}
                    <div className="font-bold">
                        <a href="/">/split<span className="text-red-600">cost</span></a>
                    </div>

                    {/* Nav Links */}
                    <div className="flex space-x-6 font-semibold">
                        <a href="#">FAQ</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Example</a>
                    </div>

                    {/* Button CTA */}
                    <button className="bg-red-500 text-white text-sm font-semibold py-2 px-4 rounded-full">
                        START
                    </button>
                </nav>
            </header>
        </div>


    )
}
