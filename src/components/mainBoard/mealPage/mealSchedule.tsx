type mealData = {mealData: Array<{date: string, meal: string, origin: string}>}
export function MealSchedule() {
    return (
        <div className="board-item">
            <div id="meal-schedule-title">
                <img src="/schedule.png" alt="schedule" id="meal-schedule-image"/>
                <h3>이번달 전체 급식 일정 확인하기 &#8250;</h3>
            </div>
        </div>
    )
}