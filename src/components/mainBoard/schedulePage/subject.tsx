import Link from "next/link"
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
export function Subject(prop: {id: string}) {
    const id: string = prop.id
    const subjectName: string = subjects[id]
    return (
        <Link href={`/schedule/${id}`} className={`${id} board-item`}>
            <h2 className="subject-name">{subjectName}</h2>
        </Link>
    )
}