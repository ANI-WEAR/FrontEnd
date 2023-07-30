import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'

export default function History() {
    const [currentUrl, setCurrentUrl] = useState('');

    const location = useLocation();
    useEffect(() => {
        setCurrentUrl(location.pathname);
    }, [location.pathname]);

    return (
        <div className="w-[75%] ">
            <h1 className="text-[3rem] font-normal">마이페이지</h1>
            <div className="flex space-x-20 text-[30px] font-normal mt-14">
                <a href="/order" className={`ml-14 ${currentUrl === '/order' ? 'text-[#507C4E] font-bold' : 'text-black'}`}>주문 내역</a>
                <a href="/order/cancel" className={`${currentUrl === '/order/cancel' ? 'text-[#507C4E] font-bold' : 'text-black'}`}>반품 내역</a>
                <a href="#">회원정보 수정</a>
            </div >
            <div className="w-full h-9 bg-[#D9D9D9] flex p-2 text-[0.75rem] font-normal mt-5 font-sans text-center">
                <span className="w-52">주문일/주문번호</span>
                <span className="w-60">상품정보/옵션정보</span>
                <span className="ml-auto w-60">결제금액</span>
                <span className="w-60">주문상태</span>
                <span className="w-60">취소/반품</span>
            </div>
        </div >
    )
}