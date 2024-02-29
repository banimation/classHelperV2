"use client"
import { useEffect } from "react"
import "./page.css"
export function PushAlarmSettingPage() {
    let isAllowed = false
    useEffect(() => {
        if(Notification.permission === "granted") {
            checking()
        }
    })
    function checking() {
        const inCircle = document.createElement("div")!
        const checkCircle = document.getElementsByClassName("check-circle")!
        const permissionState = document.getElementsByClassName("permission-state")!
        inCircle.classList.add("in-circle")
        checkCircle[0].append(inCircle)
        permissionState[0].innerHTML = "권한 설정 (허용됨)"
        isAllowed = true
    }
    async function handleAllowNotification() {
        await Notification.requestPermission().then(async (permission) => {
            if (permission === "granted") {
                if(!isAllowed) {
                    console.log(permission, "허용됨")
                    checking()
                    let registration = await navigator.serviceWorker.getRegistration()
                    if(registration) {
                        registration.showNotification("알림 권한", {
                            body: "🔔 알림 권한이 허용됨",
                            icon: "/icon-512x512.png",
                            vibrate: [200, 200, 200, 200, 200, 200, 200],
                        });
                    }
                }
                
            } else {
                console.log(permission, "차단됨")
            }
        })
    }
    return (
        <div className="push-alarm-setting-page-container">
            <h2 className="title">푸시 알림 설정</h2>
            <div className="options">
                <div className="option-container">
                    <h3>알림 권한 설정</h3>
                    <div className="board-item option">
                        <h4 className="permission-state">권한 설정 (거부됨)</h4>
                        <div className="check-circle" onClick={() => {
                            handleAllowNotification()
                        }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}