import Basebg from "../components/basebg"
import Button from "../components/button";
import Menubar from "../components/header/menubar"
import Sidebar from "../components/header/sidebar"
import React, { useState } from 'react';
import { useForm } from "react-hook-form";




export default function Find() {
    const [isSideOpen, setIsSideOpen] = useState(false);

    const regExpEm = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // 아이디 찾기 폼에 대한 상태 관리
    const {
        register: idRegister,
        handleSubmit: idHandleSubmit,
        formState: { errors: iderrors },
    } = useForm();

    // 비밀번호 찾기 폼에 대한 상태 관리
    const {
        register: pwRegister,
        handleSubmit: pwHandleSubmit,
        formState: { errors: pwerrors },
    } = useForm();

    const onIdSubmit = (data) => console.log(data);
    const onPwSubmit = (data) => console.log(data);

    return (
        <div>
            <Menubar isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
            {isSideOpen && (
                <Sidebar />
            )}
            <Basebg>
                <form className='mt-8 flex flex-col space-y-8' onSubmit={idHandleSubmit(onIdSubmit)}>
                    <div className='mt-8 flex flex-col space-y-8'>
                        <h1 className="text-[1.3rem] font-bold">아이디 찾기</h1>
                        <input className={`bg-[#d9d9d9] w-72 h-9 text-[0.63rem] pl-3 text-center mx-auto outline-none z-10 ${iderrors.email && 'border border-[#FF0505]'}`} type='email' placeholder='복구 이메일'
                            {...idRegister('email', { required: '올바른 이메일 주소를 입력해주세요', pattern: regExpEm })} />
                        {iderrors.email && (<p className="absolute text-[#FF0505] text-[11px] flex ml-[7.5rem] pt-[4.5rem]">{iderrors.email.message}</p>)}
                        <Button buttonText="아이디 찾기" />
                    </div>
                </form>
                <form className='mt-8 flex flex-col space-y-8' onSubmit={pwHandleSubmit(onPwSubmit)}>
                    <h1 className="text-[1.3rem] font-bold">비밀번호 찾기</h1>
                    <input className={`bg-[#d9d9d9] w-72 h-9 text-[0.63rem] pl-3 text-center mx-auto outline-none z-10 ${pwerrors.email && 'border border-[#FF0505]'}`} type='text' placeholder='아이디'
                        {...pwRegister('id', { required: '' })} />
                    <input className={`bg-[#d9d9d9] w-72 h-9 text-[0.63rem] pl-3 text-center mx-auto outline-none z-10 ${pwerrors.email && 'border border-[#FF0505]'}`} type='text' placeholder='복구 이메일'
                        {...pwRegister('email', { required: '잘못된 id 혹은 이메일 주소 입니다. 다시 입력해주세요.' })} />
                    {pwerrors.email && <p className="absolute text-[#FF0505] text-[11px] flex ml-[7.5rem] pt-[8.8rem]">{pwerrors.email.message}</p>}
                    <Button buttonText="비밀번호 찾기" />
                </form>
            </Basebg>
        </div>
    )
}