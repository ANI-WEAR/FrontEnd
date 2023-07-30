export default function Orderpg() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-[75%] flex flex-col items-center">
                <div className="flex w-full h-48 text-[0.75rem]">
                    <div className="flex mt-4">
                        <span className="w-48 ml-16 mt-10">2000-00-00<br />11111111111111<br />상세보기</span>
                        <svg className=" w-40" xmlns="http://www.w3.org/2000/svg" width="111" height="156" viewBox="0 0 111 156" fill="none">
                            <g clip-path="url(#clip0_3_226)">
                                <path d="M110.5 0.5L110.5 155.5L0.5 155.5L0.500008 0.499996L110.5 0.5Z" fill="white" stroke="#1A1A1A" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3_226">
                                    <rect width="156" height="111" fill="white" transform="translate(111) rotate(90)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="flex flex-col ml-10">
                            <span>제품명 xxxx xxx xx x xxxx</span>
                            <span>옵션 : xxx/44 1개</span>
                        </div>
                    </div>
                    <span className="w-60 ml-auto mt-4">xxx,xxx원</span>
                    <span className="w-[15.5rem] mt-4">배송완료</span>
                    <span className="w-36 mt-4">취소</span>
                </div>
                <div className="w-full h-0.5 bg-[#D9D9D9]" />
            </div>
        </div>
    )
}