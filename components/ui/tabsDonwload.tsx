'use client'

import { useState } from "react"
import { twMerge } from "tailwind-merge"

export const TabsDonwload = () => {
    const [active, setActive] = useState(1)
    const getClass = (isActive: boolean) => {
        const objLayout = {
            textLayout: "text-md text-gray-400",
            bgLayout: "absolute bg-gray-200 bottom-0 left-0 h-[2px] w-full"
        }
        if (isActive) {
            objLayout.textLayout = twMerge(objLayout.textLayout, "text-green-600");
            objLayout.bgLayout = twMerge(objLayout.bgLayout, "bg-green-600");
        }
        return objLayout;
    }
    return <div className="flex gap-2">
        <div className="grid cursor-pointer relative pb-2 px-3" onClick={() => setActive(1)}>
            <div className={getClass(1 === active).textLayout}>
                Windows
            </div>
            <div className={getClass(1 === active).bgLayout}></div>
        </div>
        <div className="grid cursor-pointer relative pb-2 px-3" onClick={() => setActive(2)}>
            <div className={getClass(2 === active).textLayout}>
                macOS
            </div>
            <div className={getClass(2 === active).bgLayout}></div>
        </div>
        <div className="grid cursor-pointer relative pb-2 px-3" onClick={() => setActive(3)}>
            <div className={getClass(3 === active).textLayout}>
                Linux
            </div>
            <div className={getClass(3 === active).bgLayout}></div>
        </div>
    </div>
} 