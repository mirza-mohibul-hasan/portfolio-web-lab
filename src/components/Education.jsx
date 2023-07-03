// import React from 'react'

import { Educard } from "./Educard";

export const Education = () => {
  return (
    <div>
      <div className="py-6 font-titleFont flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Academic Qualification</h2>
      </div>
      <div className="space-y-5 lg:space-y-0 w-full border-l-[6px] border-l-black border-opacity-30 lg:flex flex-col gap-10">

        <Educard
          title="BSc in Computer Science and Engineering"
          subTitle="Jashore University of Science and Technology"
          time="2019 - Present"
          result="Jashore-7408, Khulna"
          des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
        />
        <Educard
          title="Higher Secondary (Science)"
          subTitle="Cambrian College (2016 - 2018)"
          result="Campus-04, Baridhara, Dhaka"
          des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
        />
      </div>
    </div>
  );
}
