import Basebg from "../components/basebg"
import Button from "../components/button";
import Menubar from "../components/header/menubar"
import Sidebar from "../components/header/sidebar"
import React, { useState } from 'react';

export default function Find() {
    const [isSideOpen, setIsSideOpen] = useState(false)
    return (
        <div>
            <Menubar isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
            {isSideOpen && (
                <Sidebar />
            )}
            <Basebg>
                <div className='mt-8 flex flex-col space-y-5'>
                    <h1 className="text-[1.3rem] font-bold">아이디 찾기</h1>
                    <input className='bg-[#d9d9d9] w-72 h-9 text-[0.63rem] pl-3 text-center mx-auto' type='text' placeholder='복구 이메일' />
                    <Button buttonText="아이디 찾기" />
                </div>
                <div className='mt-8 flex flex-col space-y-5'>
                    <h1 className="text-[1.3rem] font-bold">비밀번호 찾기</h1>
                    <input className='bg-[#d9d9d9] w-72 h-9 text-[0.63rem] pl-3 text-center mx-auto' type='text' placeholder='아이디' />
                    <input className='bg-[#d9d9d9] w-72 h-9 text-[0.63rem] pl-3 text-center mx-auto' type='text' placeholder='복구 이메일' />
                    <Button buttonText="비밀번호 찾기" />
                </div>
            </Basebg>
        </div>
    )
}