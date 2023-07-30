import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'

export default function Histitle() {
    const [currentUrl, setCurrentUrl] = useState('');

    const location = useLocation();
    useEffect(() => {
        setCurrentUrl(location.pathname);
    }, [location.pathname]);

    return (
        <div className="w-[75%] ">
            <h1 className="text-[3rem] font-normal">마이페이지</h1>
            <div className="flex space-x-20 text-[30px] font-normal mt-14">
                <a href="/order" className={`ml-14 ${currentUrl === '/order' ? 'text-[#507C4E] font-bold' : 'text-[#5B5B5B]'}`}>주문 내역</a>
                <a href="/order/cancel" className={`${currentUrl === '/order/cancel' ? 'text-[#507C4E] font-bold' : 'text-[#5B5B5B]'}`}>반품 내역</a>
                <a href="/member" className={`${currentUrl === '/member' ? 'text-[#507C4E] font-bold' : 'text-[#5B5B5B]'}`}>회원정보 수정</a>
            </div >
            <div className="w-full h-1 bg-[#D9D9D9] mt-5 " />
        </div>
    )
}