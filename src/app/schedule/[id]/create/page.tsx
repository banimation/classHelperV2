"use client"
import { requestNotification } from "@/utils/requestNotification"
import "./page.css"

const subjects: {[key: string]: string} = {
    "Different-and-Integral-Calculus": "미적분",
    "Probability-and-Staristics": "확률과 통계",
    "Language-and-Media": "언어와 매체",
    "English-Reading-and-Writing": "영어 독해와 작문",
    "Geometry": "기하",
    "physics": "물리II",
    "chemistry": "화학II",
    "bioscience": "생명과학II",
    "Speech-and-Writing": "화법과 작문",
    "Science-and-Liberal-Arts": "과학교양",
    "Travel-Geography": "여행지리"
}
const types: {[key: string]: string} = {
    "performance": "수행평가",
    "paper": "지필고사",
    "etc": "기타 과제"
}
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id
    let selectedTypeName: string = "performance"
    const selectType = (type: string) => {
        selectedTypeName = type
        const performance = document.getElementById("performance")!
        const paper = document.getElementById("paper")!
        const etc = document.getElementById("etc")!
        let selectedType: HTMLElement
        let exceptedTypes: Array<HTMLElement> = []
        if(type === "performance") {
            selectedType = performance
            exceptedTypes.push(paper, etc)
        } else if(type === "paper") {
            selectedType = paper
            exceptedTypes.push(performance, etc)
        } else if(type === "etc") {
            selectedType = etc
            exceptedTypes.push(performance, paper)
        }
        selectedType!.classList.remove("excepted-type")
        exceptedTypes.map((element) => {element!.classList.add("excepted-type")})
    }
    return (
        <div className="main-board-container">
            <div className="create-container">
                <h2>유형 선택</h2>
                <div className="select-type">
                    <div className="type" id="performance" onClick={() => {selectType("performance")}}>📖 수행</div>
                    <div className="type excepted-type" id="paper" onClick={() => {selectType("paper")}}>📄 지필</div>
                    <div className="type excepted-type" id="etc" onClick={() => {selectType("etc")}}>🖊 기타</div>
                </div>
                <h2>제목 작성</h2>
                <div className="text-title">
                    <input id="title" type="text" placeholder={"타이틀 작성"}/>
                </div>
                <h2>마감일 선택</h2>
                <div className="select-endYMDH">
                    <div>
                        <h3>날짜</h3>
                        <input type="date" id="YMD"/>
                    </div>
                    <div>
                        <h3>시간</h3>
                        <input type="time" id="H"/>
                    </div>
                </div>
                <h2>설명 작성</h2>
                <div className="text-description">
                    <textarea id="description" placeholder={"설명 작성"}/>
                </div>
                <div id="submit" onClick={async () => {
                    const type = selectedTypeName
                    const title = (document.getElementById("title") as HTMLInputElement).value
                    const YMD = ((document.getElementById("YMD") as HTMLInputElement).value).replaceAll("-", "") // YYYY-MM-DD
                    const H = ((document.getElementById("H") as HTMLInputElement).value).split(":")[0] // HH:MM\
                    const endYMDH = Number(YMD+H)
                    const description = (document.getElementById("description") as HTMLInputElement).value
                    console.log({id, type, title, endYMDH, description})
                    await fetch("https://classhelpertest.kro.kr/api/createSchedule", {
                        method: "POST",
                        headers: {
                            "Content-Type" : "application/json"
                        },
                        cache: 'no-store',
                        body: JSON.stringify({id, type, title, endYMDH, description})
                    }).then(async () => {
                        await requestNotification({
                            title: `[일정] ${subjects[id]} ${types[type]}`,
                            body: `${title} (${endYMDH.toString().slice(0, 4)}}년 ${endYMDH.toString().slice(4, 6)}월 ${endYMDH.toString().slice(6, 8)}일 ${endYMDH.toString().slice(8, 10)}시 마감)`,
                            click_action: `/schedule/${id}`
                        }).then(() => {
                            location.reload()
                        })
                    })
                }}>
                    <h2>Create!</h2>
                </div>
            </div>
        </div>
    )
}