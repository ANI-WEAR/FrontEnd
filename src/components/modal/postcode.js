import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal";

const Postcode = () => {
    const [zipCode, setZipcode] = useState("");
    const [roadAddress, setRoadAddress] = useState("");
    const [detailAddress, setDetailAddress] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const completeHandler = (data) => {
        setZipcode(data.zonecode);
        setRoadAddress(data.roadAddress);
        setIsOpen(false);
    };

    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
        },
        content: {
            left: "0",
            margin: "auto",
            width: "500px",
            height: "400px",
            padding: "0",
            overflow: "hidden",
        },
    };

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const changeHandler = (e) => {
        setDetailAddress(e.target.value);
    };

    const clickHandler = () => {
        if (detailAddress === "") {
            alert("상세주소를 입력해주세요.");
        } else {
            console.log(zipCode, roadAddress, detailAddress);
        }
    };

    return (
        <div className="p-3">
            <span className="text-[0.75rem] font-normal">주소</span>
            <div className="mt-3 flex">
                <input className="bg-[#D9D9D9] w-20 h-6 pl-2" value={zipCode} readOnly placeholder="우편번호" />
                <button className="bg-[#5D5D5D] text-[#EEE] text-[0.7rem] w-24 h-6 ml-2" onClick={toggle}>우편번호 검색</button>
            </div>
            <div className="space-y-2 mt-2">
                <input className="bg-[#D9D9D9] w-80 pl-2" value={roadAddress} readOnly placeholder="도로명 주소" />
                <Modal isOpen={isOpen} ariaHideApp={false} style={customStyles}>
                    <DaumPostcode onComplete={completeHandler} height="100%" />
                </Modal>
                <input
                    className="bg-[#D9D9D9] w-80 pl-2"
                    type="text"
                    onChange={changeHandler}
                    value={detailAddress}
                    placeholder="상세주소"
                />
            </div>
            <button className="bg-black text-white w-24 mt-2" onClick={clickHandler}>저장</button>
        </div>
    );
};

export default Postcode;