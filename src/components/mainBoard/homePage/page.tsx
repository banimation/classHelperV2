import { TodayMeal } from "./todayMeal"
import { TODO } from "./TODO"
import "./page.css"
import { AllowNotification } from "@/components/welcome"
import React from "react"

export function HomePage() {
    return (
        <div id="home-container">
            <TodayMeal></TodayMeal>
            <TODO></TODO>
            <AllowNotification></AllowNotification>
        </div>
    )
}