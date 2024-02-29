"use client"
import { useEffect } from "react"
import { registerServiceWorker } from "@/utils/notification"

export function AllowNotification() {
    useEffect(() => {
        registerServiceWorker()
    })
    return (
        <></>
    )
}
