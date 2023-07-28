import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button'
import Menubar from '../components/header/menubar'
import Leftbar from '../components/header/sidebar';
import Basebg from '../components/basebg';

function Login() {
    const [isSideOpen, setIsSideOpen] = useState(false);
    return (
        <div>
            <Menubar isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
            {isSideOpen && (
                <Leftbar />
            )}
            <Basebg>
                <div className='w-72 h-60 mt-40 mx-auto'>
                    <span className='text-[1.2rem] font-black self-center items-center'>로그인</span>
                    <div className='mt-8'>
                        <input className='bg-[#d9d9d9] w-72 h-9 text-[0.63rem] pl-3' type='text' placeholder='아이디' />
                    </div>
                    <div className='mt-8'>
                        <input className='bg-[#d9d9d9] w-72 h-9 text-[0.63rem] pl-3' type='password' placeholder='비밀번호' />
                    </div>
                    <div className='flex mt-3'>
                        <span className='text-[0.63rem] font-bold cursor-pointer'>아이디/비밀번호 찾기</span>
                        <Link to="/register" className='text-[0.63rem] font-bold ml-auto cursor-pointer'>
                            <span className=''>회원가입</span>
                        </Link>
                    </div>
                </div>
                <Button buttonText="로그인하기" />
            </Basebg>
        </div>
    )
}

export default Login