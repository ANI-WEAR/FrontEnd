import Postcode from "../modal/postcode";


export default function Memberpg() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-[75%] flex p-10">
                <div className="flex flex-col ml-3 space-y-10">
                    <div className="flex flex-col space-y-5">
                        <span className="text-[0.88rem] text-[#666] font-normal">아이디</span>
                        <span>xxxxxxxxx@xxxx.xxx</span>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <span className="text-[0.88rem] text-[#666] font-normal">이름</span>
                        <span>xxx</span>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <span className="text-[0.88rem] text-[#666] font-normal">이메일</span>
                        <span>xxxxxxxxx@xxxxx.xxx</span>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <span className="text-[0.88rem] text-[#666] font-normal">휴대폰번호</span>
                        <span>010-xxxx-xxxx</span>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <span className="text-[0.88rem] text-[#666] font-normal">비밀번호</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="159" height="33" viewBox="0 0 159 33" fill="none">
                            <path d="M0 0H159V33H0V0Z" fill="#D9D9D9" />
                        </svg>
                        <span className="text-[0.88rem] text-[#666] font-normal">고객님의 소중한 회원정보를 확인/변경 하기 위해 비밀번호 재확인이 필요합니다.</span>
                    </div>
                </div>
                <div className="w-[28.5rem] ml-auto flex flex-col">
                    <span className="font-sans text-[0.88rem] font-normal p-3">배송지 정보</span>
                    <div className="w-full h-0.5 bg-[#D9D9D9]" />
                    <span className="font-sans text-[0.88rem] font-normal p-3">배송지 목록</span>
                    <div className="w-full h-0.5 bg-[#D9D9D9]" />
                    <Postcode />
                </div>
            </div>
        </div>
    )
}