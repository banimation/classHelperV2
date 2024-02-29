import Link from "next/link"
import "./page.css"
export function Setting(prop: {label: string, href: string}) {
    const label = prop.label
    const href = prop.href
    return (
        <Link href={href} className="setting board-item">{label}</Link>
    )
}