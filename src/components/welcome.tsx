"use client"
import { useEffect } from "react"
import { registerServiceWorker } from "@/utils/registerServiceWorker"
export function AllowNotification() {
    useEffect(() => {
        registerServiceWorker()
    })
    return (
        <></>
    )
}
