import React, { useState } from "react";

export default function Menubar({ isSideOpen, setIsSideOpen }) {
    return (
        <svg className='ml-3 cursor-pointer absolute' xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none" onClick={() => { setIsSideOpen(!isSideOpen) }}>
            <path d="M14 49V44.3333H56V49H14ZM14 37.3333V32.6667H56V37.3333H14ZM14 25.6667V21H56V25.6667H14Z" fill="black" />
        </svg>
    )
}