import Link from "next/link"
import "./page.css"

export function DeveloperInfoPage() {
    return (
        <div className="developer-info-container">
            <div className="item-container">
                <h2>developer</h2>
                <div className="description">조성욱</div>
                
            </div>
            <div className="item-container">
                <h2>github</h2>
                <div className="description"><Link href={"https://github.com/banimation/classHelperV2"}>https://github.com/banimation/classHelperV2</Link></div>
            </div>
        </div>
    )
}