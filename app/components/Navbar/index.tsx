'use client'

import React, { SetStateAction, useState } from "react";
import Image from "next/image"; 
import Hero from "../Hero";

const Navigation: React.FC = ({onFilter}) => {
    const [searchQuery, setSearchQuery] = useState<string>(""); 
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState("");
    const onSearch = (e: { target: { value: SetStateAction<string>; }; }) => {
      setQuery(e.target.value);
      onFilter(e.target.value);
    };

    

    return (
        <><div>
            {/* Navigation Bar */}
            <nav className="bg-black p-4 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <h1 className="text-4xl font-bold mb-2">M<span className="text-yellow-500">oo</span>vie</h1><br /><br />


                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-9 py-2 rounded-lg mr-2"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                    <div className="flex justify-between items-center space-x-4 ml-10">
                        <p className="text-lg font-semibold ml-90 hover:text-yellow-500">Home</p>
                        <p className="text-lg font-semibold ml-90 hover:text-yellow-500">My List</p>
                        <p className="text-lg font-semibold ml-90  bg-yellow-500 px-9 py-2 rounded-lg text-white">Sign in</p>
                    </div>


                </div>
            </nav>
        </div><Hero /></>
    );
};

export default Navigation;
