import "./page.css"
type timeTableData = Array<Array<{
    grade: number
    class: number
    weekday: number
    weekdayString: string
    classTime: number
    teacher: string
    subject: string
}>>
const fetchOption: any = {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    cache: 'no-store'
}
const weekDay = ["월", "화", "수", "목", "금"]
export async function TimeTablePage() {
    const requestData = await fetch("http://localhost/api/get-timeTable-data", fetchOption)
    const jsonData = await requestData.json()
    const timeTableData: timeTableData = await jsonData.data.myClassTimeTable
    return (
        <div id="time-table-container">
            <div id="time-table-column">
                <div className="time-table-rows">
                    <div>/요일<br />교시/</div>
                    <div>1교시<br />(9:10)</div>
                    <div>2교시<br />(10:10)</div>
                    <div>3교시<br />(11:10)</div>
                    <div>4교시<br />(12:10)</div>
                    <div>5교시<br />(14:00)</div>
                    <div>6교시<br />(15:00)</div>
                    <div>7교시<br />(16:00)</div>
                    <div>8교시<br />(17:00)</div>
                </div>
                {weekDay.map((week, index) => {
                    return (
                        <div key={index} className="time-table-rows">
                            <div className="text-to-center">
                                <p>
                                    {week}
                                </p>
                            </div>
                            {timeTableData[index].map((element, _index) => {
                                return (
                                    <div key={_index}>
                                        {element.subject} <br />
                                        {element.teacher}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div id="time-table-description">본 시간표는 컴시간 API에서 제공하는 데이터에 의존하고 있습니다. (매주 월요일 09시에 본 라이브러리 동작 여부를 확인합니다.)</div>
        </div>
    )
}