import { Meal } from "./meal"
import "./page.css"
type mealData = {state: boolean, mealData: Array<{date: string, meal: string, origin: string}>}
export async function MealSchedule() {
    const fetchOption: any = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        cache: 'no-store'
    }
    const postMeal = await fetch("http://localhost/api/get-meal-data", fetchOption)
    const mealJson: mealData = await postMeal.json()
    let mealSchedule
    if(mealJson.state) {
        mealSchedule = mealJson.mealData.map((element, index) => {
            return (
                <Meal date={element.date} meal={element.meal} key={index}></Meal>
            )
        })
    } else {
        mealSchedule = (<div className="board-item"><h3>정보없음</h3></div>)
    }
    return (
        <div id="meal-schedule-container">
            {mealSchedule}
        </div>
    )
}