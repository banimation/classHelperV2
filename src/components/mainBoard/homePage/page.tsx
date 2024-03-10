import { TodayMeal } from "./todayMeal"
import { TODO } from "./TODO"
import "./page.css"
import { AllowNotification } from "@/components/welcome"
import React from "react"

export async function HomePage() {
    return (
        <div id="home-container">
            <TodayMeal></TodayMeal>
            <AllowNotification></AllowNotification>
        </div>
    )
}