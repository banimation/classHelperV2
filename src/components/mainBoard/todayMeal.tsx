export function TodayMeal() {
    return (
        <div className="main-board-item">
            <div id="today-meal-title">
                <img src="/meal.png" alt="" id="today-meal-image"/>
                <div>
                    <h3>오늘의 급식</h3>
                    <h5 id="today-meal-description">클릭하여 개발자의 평가를 확인해 보세요! &#8250;</h5> 
                </div>
            </div>
            <div id="today-meal-list">
                김치 <br />
                맛도리 감자 <br />
                김치찌개 <br />
                어묵말이 <br />
                뭉탱이
            </div>
        </div>
    )
}