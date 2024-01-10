import { TodayMeal } from "./todayMeal"
import { TODO } from "./TODO"
import "./page.css"
export function HomePage() {
    return (
        <div id="home-container">
            <TodayMeal></TodayMeal>
            <TODO></TODO>
        </div>
    )
}