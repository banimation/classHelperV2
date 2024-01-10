import { TodayMeal } from "./todayMeal"
import { MealSchedule } from "./mealSchedule";
import { Comment } from "./comment"
import "./page.css"
export function MealPage() {
    return (
        <div id="meal-container">
            <TodayMeal></TodayMeal>
            <Comment></Comment>
            <MealSchedule></MealSchedule>
        </div>
    )
}