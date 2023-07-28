export default function Basebg({ children }) {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-[33rem] h-[48rem] bg-[#F2F2F2] rounded-[80px] text-center'>
                <h1 className='text-[2.5rem] font-bold mt-10'>ANI-WEAR</h1>
                {children}
            </div>
        </div>
    )
}