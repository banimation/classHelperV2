import comment from "./config.json"
export function Comment() {
    let star: string = ""
    for(let i = 0; i < comment.starPoint; i++) {
        star += "⭐"
    }
    return (
        <div className="board-item">
            <h3>오늘 급식에 대한 개발자의 평가</h3>
            <div id="comment">
                <div id="star">별점: {star} ({comment.starPoint}점)</div>
                <div>{comment.message}</div>
            </div>
        </div>
    )
}