import "./page.css"
import { Setting } from "./setting"

export function SettingPage() {
    return (
        <div className="setting-container">
            <div className="app-info-container">
                <img src="/logo.png" alt="logo" className="logo"/>
                <div className="app-info-description">1.0 version</div>
            </div>
            <div className="settings">
                <Setting label="PWA(프로그레시브 웹 앱) 사용 안내" href="/setting/pwa"></Setting>
                <Setting label="푸시 알림" href="/setting/push-alarm"></Setting>
                <Setting label="앱 정보" href="/setting/developer"></Setting>
            </div>
        </div>
    )
}