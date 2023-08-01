import Leftbar from "../components/header/sidebar";
import Menubar from "../components/header/menubar";
import React, { useState } from 'react';
import Button from "../components/button";
import Basebg from "../components/basebg";
import { useForm } from "react-hook-form"; // react-hook-form에서 register만 import
import Postregi from "../components/modal/postregi";

export default function Register() {
    const [isSideOpen, setIsSideOpen] = useState(false);

    const inputFields = [
        { name: '아이디', placeholder: '아이디', type: 'text', className: 'mt-8' },
        { name: '비밀번호', placeholder: '비밀번호', type: 'password', className: 'mt-4' },
        { name: '비밀번호 확인', placeholder: '비밀번호 확인', type: 'password', className: 'mt-4' },
        { name: '복구 이메일', placeholder: '복구 이메일', type: 'text', className: 'mt-4' },
        { name: '이름', placeholder: '이름', type: 'text', className: 'mt-16' },
        { name: '핸드폰 번호', placeholder: '핸드폰 번호', type: 'text', className: 'mt-4' },
    ];

    const {
        handleSubmit,
        register, // register만 import
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // 이곳에서 폼 데이터를 처리할 수 있습니다.
    };


    return (
        <div>
            <Menubar isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
            {isSideOpen && (
                <Leftbar />
            )}
            <Basebg>
                <div className='w-72 mt-5 mx-auto'>
                    <span className='text-[1.2rem] font-black self-center items-center'>회원가입</span>
                    <div>
                        {inputFields.map((field, index) => (
                            <div key={index} className={field.className}>
                                <input
                                    className='bg-[#d9d9d9] w-72 h-9 text-[0.63rem] pl-3'
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    {...register(field.name, {
                                        required: `${field.placeholder}를 입력해주세요.`, // 필수 입력 필드로 지정
                                    })}
                                />
                            </div>
                        ))}
                        <Postregi />
                        <div className="flex items-center mt-1 mb-10">
                            <label className="flex items-center">
                                <input className="rounded-full appearance-none border border-black w-3 h-3 checked:bg-[#507C4E]" type="checkbox" />
                                <span className="text-[10px] ml-1">입점 브랜드</span>
                            </label>
                            <label className="flex items-center mx-auto">
                                <input className="rounded-full appearance-none border border-black w-3 h-3 checked:bg-[#507C4E]" type="checkbox" />
                                <span className="text-[10px] ml-1">일반 사용자</span>
                            </label>
                        </div>
                    </div>
                </div>
                <Button buttonText="회원가입하기" onClick={handleSubmit(onSubmit)} />
            </Basebg>
        </div>
    )
}