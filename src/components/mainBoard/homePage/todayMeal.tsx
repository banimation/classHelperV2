import Link from "next/link"

type mealData = {state: boolean, mealData: Array<{date: string, meal: string}>}
export async function TodayMeal() {
    let htmlMealInfo: Array<string> = ["데이터 없음", "(본 데이터는 neis API에서 제공하는 데이터를 사용중이며 데이터 관리는 영양 선생님이 관리합니다. 영양 선생님이 해당 달의 급식 데이터를 neis에 등록해야 정보가 표시됩니다.)"]
    const date = new Date()
    const getYear = date.getFullYear()
    const getMonth = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`
    const getDay = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`
    const ymd = `${getYear}${getMonth}${getDay}`
    const fetchOption: any = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        cache: 'no-store'
    }
    const postMeal = await fetch("http://localhost/api/get-meal-data", fetchOption)
    const mealJson: mealData = await postMeal.json()
    if(mealJson.state) {
        const isExistTodayMeal = mealJson.mealData.filter((value) => value.date === ymd)
        if(isExistTodayMeal.length !== 0) {
            htmlMealInfo = isExistTodayMeal[0].meal.split("<br/>")
        }
    }
    
    return (
        <div className="board-item">
            <div id="today-meal-title">
                <img src="/meal.png" alt="" id="today-meal-image"/>
                <div>
                    <h3>오늘의 급식</h3>
                    <Link href={"/meal"}><h5 id="today-meal-description">클릭하여 개발자의 평가를 확인해 보세요! &#8250;</h5></Link>
                </div>
            </div>
            <div id="today-meal-list">
                {htmlMealInfo.map((value, index) => <div key={index}>{value}</div>)}
            </div>
        </div>
    )
}