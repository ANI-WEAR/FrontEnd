import React, { useState } from 'react'
import Leftbar from './header/sidebar';
import Menubar from './header/menubar';

export default function Header() {
    const [isSideOpen, setIsSideOpen] = useState(false);

    return (
        <div className='flex w-full h-15 border-b border-black'>
            <div className='menu'>
                <Menubar isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
                {isSideOpen && (
                    <Leftbar />
                )}
            </div>
            <div className='w-full'>
                <h1 className='text-center text-[2.5rem] font-bold'>ANI-WEAR</h1>
            </div>
            <div className='flex ml-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <ellipse cx="32.5217" cy="31.5217" rx="12.5217" ry="12.5217" stroke="black" stroke-width="3" />
                    <line x1="41.9302" y1="40.2002" x2="51.6694" y2="49.9393" stroke="black" stroke-width="3" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <rect x="22" y="25.9565" width="25.0435" height="25.0435" stroke="black" stroke-width="3" />
                    <path d="M40.7826 30.1304V25.2609C40.7826 21.8031 37.9795 19 34.5218 19V19C31.064 19 28.2609 21.8031 28.2609 25.2609V30.1304" stroke="black" stroke-width="3" />
                </svg>
                <svg className='mr-3' xmlns="http://www.w3.org/2000/svg" width="80" height="70" viewBox="0 0 80 70" fill="none">
                    <path d="M53.4348 51V38.4782H27V51" stroke="black" stroke-width="3" />
                    <ellipse cx="39.5218" cy="25.9565" rx="6.95652" ry="6.95652" stroke="black" stroke-width="3" />
                </svg>
            </div>
        </div>
    )
}