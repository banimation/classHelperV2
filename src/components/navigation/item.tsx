export default function Item(prop: {id: string}) {
    const id = prop.id
    const src = `/icons/${id}.svg`
    const itemName: { [key: string]: string } = {
        "schedule": "일정",
        "home": "홈",
        "meal": "급식표",
        "time-table": "시간표",
        "setting": "설정"
    }
    return (
        <div className="nav-list-item">
            <img src={src} alt="home" className="icon"/>
            <span>{itemName[id]}</span>
        </div>
    )
}