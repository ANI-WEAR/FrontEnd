import React from 'react'
import Sidebar from '../components/sidebar'
import Button from '../components/login/button'

function Login() {
    return (
        <div>
            <Sidebar />
            <div className='w-full h-screen flex items-center justify-center'>
                <div className='w-[37rem] h-[51rem] bg-[#F2F2F2] rounded-[80px]'>
                    <h1 className='text-[2.5rem] font-bold'>ANI-WEAR</h1>
                    <div className='w-72 h-96 mx-auto justify-center self-center items-center'>
                        <span className='text-[1.2rem] font-bold self-center items-center'>로그인</span>
                        <div>
                            <input className='bg-[#d9d9d9] w-72 h-9' type='text' placeholder='아이디' />
                        </div>
                        <div>
                            <input className='bg-[#d9d9d9] w-72 h-9 ' type='text' placeholder='비밀번호' />
                        </div>
                        <div className='flex'>
                            <span>아이디/비밀번호 찾기</span>
                            <span className='ml-auto'>회원가입</span>
                        </div>
                    </div>
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Login