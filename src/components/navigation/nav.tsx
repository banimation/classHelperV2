import Item from "./item"
import "./nav.css"
export function Nav() {
    return (
        <div id="nav-container">
            <Item id="schedule"></Item>
            <Item id="timeTable"></Item>
            <Item id="home"></Item>
            <Item id="meal"></Item>
            <Item id="setting"></Item>
        </div>
    )
}