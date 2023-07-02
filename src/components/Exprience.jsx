// import React from 'react'

import { Educard } from "./Educard"

export const Exprience = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 py-6">
                <h2 className="text-3xl font-bold">Job Experience</h2>
            </div>
            <div className=" w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                <Educard
                    title="Programming Fundamental Trainer"
                    subTitle="JUST ACM Lab - (2022 - Present)"
                    result="Jashore, Bangladesh"
                    des="A popular destination with a growing number of highly qualified homegrown programmers, it's true that securing a role in Bangladeshi isn't easy."
                />
                <Educard
                    title="Content Writter"
                    subTitle="Startup Khulna - (2012 - 2016)"
                    time="2020 - 2022"
                    result="Khulna, Bangladesh"
                    des="Write a lot's of business related contents"
                />
            </div>
        </div>
    )
}
