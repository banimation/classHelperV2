import Link from "next/link"
import "./page.css"

type ScheduleData = {
    uid: number,
    subjectName: string,
    title: string,
    description: string,
    startYMDH: number,
    endYMDH: number,
    type: string
}
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
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id
    const fetchOption: any = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        cache: 'no-store',
        body: JSON.stringify({id})
    }
    const ScheduleData: Array<ScheduleData> = (await (await fetch("http://localhost/api/getScheduleData", fetchOption)).json()).data
    const assignments: {performance: Array<ScheduleData>, paper: Array<ScheduleData>, etc: Array<ScheduleData>} = {
        performance: [],
        paper: [],
        etc: []
    }
    ScheduleData.map((element) => {
        if(element.type === "performance") {
            assignments.performance.push(element)
        } else if(element.type === "paper") {
            assignments.paper.push(element)
        } else if(element.type === "etc") {
            assignments.etc.push(element)
        }
    })
    return (
        <div className="main-board-container">
            <div className="detailed-schedule-container">
                <div className={`subject-title ${id}`}>
                    <h1>{subjects[id]}</h1>
                    <Link href={`/schedule/${id}/create`} className="create-btn-container">
                    <svg xmlns="http://www.w3.org/2000/svg" className="create-btn" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                    </Link>
                    
                </div>
                <div className="assignment-list-container">
                    <h2 className="type-name">📖 수행평가</h2>
                    {assignments.performance.length === 0 ? (<h4>⚠ 등록된 과제가 없음</h4>) : assignments.performance.map((element, index) => (
                        <div key={index} className="board-item">
                            <h2>{element.title}</h2>
                            <div>
                                <h5>시작: {element.startYMDH.toString().slice(0, 4)}년 {element.startYMDH.toString().slice(4, 6)}월 {element.startYMDH.toString().slice(6, 8)}일 {element.startYMDH.toString().slice(8, 10)}시</h5>
                                <h5>마감: {element.endYMDH.toString().slice(0, 4)}년 {element.endYMDH.toString().slice(4, 6)}월 {element.endYMDH.toString().slice(6, 8)}일 {element.endYMDH.toString().slice(8, 10)}시</h5>
                            </div>
                            <p>{element.description}</p>
                        </div>
                    ))}
                </div>
                <div className="assignment-list-container">
                    <h2 className="type-name">📄 지필고사</h2>
                    {assignments.paper.length === 0 ? (<h4>⚠ 등록된 과제가 없음</h4>) : assignments.paper.map((element, index) => (
                        <div key={index} className="board-item">
                            <h2>{element.title}</h2>
                            <div>
                                <h5>시작: {element.startYMDH.toString().slice(0, 4)}년 {element.startYMDH.toString().slice(4, 6)}월 {element.startYMDH.toString().slice(6, 8)}일 {element.startYMDH.toString().slice(8, 10)}시</h5>
                                <h5>마감: {element.endYMDH.toString().slice(0, 4)}년 {element.endYMDH.toString().slice(4, 6)}월 {element.endYMDH.toString().slice(6, 8)}일 {element.endYMDH.toString().slice(8, 10)}시</h5>
                            </div>
                            <p>{element.description}</p>
                        </div>
                    ))}
                </div>
                <div className="assignment-list-container">
                    <h2 className="type-name">🖊 기타</h2>
                    {assignments.etc.length === 0 ? (<h4>⚠ 등록된 과제가 없음</h4>) : assignments.etc.map((element, index) => (
                        <div key={index} className="board-item">
                            <h2>{element.title}</h2>
                            <div>
                                <h5>시작: {element.startYMDH.toString().slice(0, 4)}년 {element.startYMDH.toString().slice(4, 6)}월 {element.startYMDH.toString().slice(6, 8)}일 {element.startYMDH.toString().slice(8, 10)}시</h5>
                                <h5>마감: {element.endYMDH.toString().slice(0, 4)}년 {element.endYMDH.toString().slice(4, 6)}월 {element.endYMDH.toString().slice(6, 8)}일 {element.endYMDH.toString().slice(8, 10)}시</h5>
                            </div>
                            <p>{element.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}