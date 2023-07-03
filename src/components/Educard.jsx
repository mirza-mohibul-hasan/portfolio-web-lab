// import React from 'react'

export const Educard = ({title,subTitle,result,des, time}) => {
    return (
        <div className="w-full h-96 lg:h-64 group flex">
          <div className="w-10 h-[6px] bgOpacity mt-16 relative">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
              <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
            </span>
          </div>
          <div className="w-full bg-gray-800 bg-opacity-1000 hover:bg-opacity-30 duration-300  rounded-lg p-4 lg:flex flex-col justify-center gap-6 lg:gap-10 shadow-shadowOne h-full space-y-2">
            <div className="">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                  {title}
                </h3>
                <p className="text-md mt-2 text-gray-400 group-hover:text-white duration-300">
                  {subTitle}
                </p>
                <p className="text-md mt-2 text-gray-400 group-hover:text-white duration-300">
                  {time}
                </p>
              </div>
              <div>
                <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-left items-center shadow-shadowOne text-sm font-medium">
                  {result}
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
              {des}
            </p>
          </div>
        </div>
      );
}
