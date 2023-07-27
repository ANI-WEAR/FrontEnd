import Leftbar from "../components/header/leftbar";
import Menubar from "../components/header/menubar";
import React, { useState } from 'react';
import Button from "../components/register/button";

export default function Register() {
    const [isSideOpen, setIsSideOpen] = useState(false);

    const inputFields = [
        { placeholder: '아이디', type: 'text', className: 'mt-8' },
        { placeholder: '비밀번호', type: 'password', className: 'mt-4' },
        { placeholder: '복구 이메일', type: 'text', className: 'mt-4' },
        { placeholder: '이름', type: 'text', className: 'mt-16' },
        { placeholder: '핸드폰 번호', type: 'text', className: 'mt-4' },
        { placeholder: '배송지 주소', type: 'text', className: 'mt-4 flex items-center w-1' },
        { placeholder: '', type: 'text', className: 'mt-4' },
        { placeholder: '', type: 'text', className: 'mt-4' },
    ];

    return (
        <div>
            <Menubar isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
            {isSideOpen && (
                <Leftbar />
            )}
            <div className='w-full h-screen flex items-center justify-center'>
                <div className='w-[33rem] h-[48rem] bg-[#F2F2F2] rounded-[80px] text-center'>
                    <h1 className='text-[2.5rem] font-bold mt-10'>ANI-WEAR</h1>
                    <div className='w-72 mt-5 mx-auto'>
                        <span className='text-[1.2rem] font-black self-center items-center'>회원가입</span>
                        <div>
                            {inputFields.map((field, index) => (
                                <div key={index} className={field.className}>
                                    <input className='bg-[#d9d9d9] w-72 h-9 text-[0.63rem] pl-3' type={field.type} placeholder={field.placeholder} />
                                    {field.placeholder === '배송지 주소' && (
                                        <div className="flex items-center">
                                            <button className="bg-[#525252] w-24 h-6 text-[#EEE] font-sans text-[11px] ml-1">우편번호 검색</button>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="flex items-center mt-1 mb-10">
                                <label className="flex items-center">
                                    <input className=" rounded-full" type="checkbox" />
                                    <span className="text-[10px] ml-1">입점 브랜드</span>
                                </label>
                                <label className="flex items-center mx-auto">
                                    <input type="checkbox" />
                                    <span className="text-[10px] ml-1">일반 사용자</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <Button />
                </div>
            </div>
        </div>
    )
}