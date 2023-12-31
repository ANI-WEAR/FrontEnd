export default function Sidebar() {
    const categories = [
        { ko: '상의', en: 'Top' },
        { ko: '아우터', en: 'Outer' },
        { ko: '하의', en: 'Pants' },
        { ko: '신발', en: 'Shoes' },
        { ko: '가방', en: 'Bag' },
        { ko: '모자', en: 'Headwear' },
    ];

    return (
        <div className='w-80 h-[92.3vh] absolute top-[4.4rem] border-t border-r border-black bg-white z-10'>
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
    )
}