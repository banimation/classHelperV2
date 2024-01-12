export function Meal(prop: {date: string, meal: string}) {
    const mealData = prop.meal
    let htmlMealInfo: Array<string> = ["데이터 없음", "(본 데이터는 neis API에서 제공하는 데이터를 사용중이며 데이터 관리는 영양 선생님이 관리합니다. 영양 선생님이 해당 달의 급식 데이터를 neis에 등록해야 정보가 표시됩니다.)"]
    htmlMealInfo = mealData.split("<br/>")
    return (
        <div className="board-item">
            <h3>{prop.date.substring(4, 6)}월 {prop.date.substring(6, 8)}일</h3>
            {htmlMealInfo.map((element, index) => <div key={index}>{element}</div>)}
        </div>
    )
}