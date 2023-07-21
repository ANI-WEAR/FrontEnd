import React, { useState } from 'react'

export default function Header() {
    const [isSideOpen, setIsSideOpen] = useState(false);

    const categories = [
        { ko: '상의', en: 'Top' },
        { ko: '아우터', en: 'Outer' },
        { ko: '하의', en: 'Pants' },
        { ko: '신발', en: 'Shoes' },
        { ko: '가방', en: 'Bag' },
        { ko: '모자', en: 'Headwear' },
    ];

    return (
        <div className='flex w-full h-15 border-b border-black'>
            <div className='menu'>
                <svg className='ml-3 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none" onClick={() => { setIsSideOpen(!isSideOpen) }}>
                    <path d="M14 49V44.3333H56V49H14ZM14 37.3333V32.6667H56V37.3333H14ZM14 25.6667V21H56V25.6667H14Z" fill="black" />
                </svg>
                {isSideOpen && (
                    <div className='w-80 h-[92.5vh] absolute border-r border-black'>
                        {categories.map((category, index) => (
                            <div>
                                <div className='flex p-3 mx-3' key={index}>
                                    <span className='text-[1.5rem] font-bold self-center'>{category.ko}</span>
                                    <span className='ml-3 text-[#949494] text-[1.25rem] font-medium self-center'>{category.en}</span>
                                    <span className='ml-auto text-[2rem] font-semibold self-center'>+</span>
                                </div>
                                <div className='w-full h-1 border-b border-[#949494]' />
                            </div>
                        ))}

                    </div>
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