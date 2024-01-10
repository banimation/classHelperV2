const fetchOption: any = {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    cache: 'no-store'
}
type ToDoJson = {data: Array<{
    uid: number
    title: string
    description: string
    startYMD: number
    endYMD: number
}>}
export async function TODO() {
    const date = new Date()
    const getYear = date.getFullYear()
    const getMonth = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`
    const getDay = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`
    const ymd = `${getYear}${getMonth}${getDay}`
    const postToDo = await fetch("http://localhost/api/get-TODO-data", fetchOption)
    const toDoJson: ToDoJson = await postToDo.json()
    const toDoData = toDoJson.data
    const deadlineTomorrow = toDoData.filter((element) => element.endYMD - Number(ymd) === 1)
    return (
        <div className="board-item">
            <h3>내일 마감인 과제</h3>
            <div id="deadline-tomorrow-list">
                {deadlineTomorrow.map((element, index) => <div key={index} className="deadline-tomorrow">{element.title} <div className="deadline-tomorrow-date">({String(element.endYMD).substr(4, 2)}월 {String(element.endYMD).substr(6, 2)}일 마감)</div></div>)}
            </div>
        </div>
    )
}