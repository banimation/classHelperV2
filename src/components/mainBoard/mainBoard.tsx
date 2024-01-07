import { TodayMeal } from "./todayMeal"
import { Item } from "./item"
import "./mainBoard.css"
export function MainBorad() {
    return (
        <div id="main-board-container">
            <TodayMeal></TodayMeal>
            <Item></Item>
        </div>
    )
}