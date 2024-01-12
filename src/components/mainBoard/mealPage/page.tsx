import { TodayMeal } from "./todayMeal"
import { MealScheduleLink } from "./mealScheduleLink";
import { Comment } from "./comment"
import "./page.css"
export function MealPage() {
    return (
        <div id="meal-container">
            <TodayMeal></TodayMeal>
            <Comment></Comment>
            <MealScheduleLink></MealScheduleLink>
        </div>
    )
}