"use client"
import "./bar.css"
export function Bar() {
    return (
        <div id="bar-container">
            <img src="/logo.png" alt="logo" id="logo"/>
            <span id="bar-title">class helper v2</span>
            <img src="/icons/notice.svg" alt="notice" id="notice" onClick={() => {
                
            }} className="icon"/>
        </div>
    )
}