import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

import project1 from "../assets/projects/Language_Oasis.png"
import project2 from "../assets/projects/sports_toy.png"
import project3 from "../assets/projects/bengal_cusine.png"

export const Projects = () => {
  return (
    <section id="projects" className="py-10 text-white w-11/12 mx-auto mt-10">
      <div className="text-center ">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
      </div>
      <br />
      <div className="flex lg:w-10/12 gap-6 px-5 mx-auto items-center relative">
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl lg:flex gap-10">
                <img src={project1} alt="" className="rounded-lg w-[500px] h-96" />
                <div>
                  <h3 className="text-4xl mb-4">Language Oasis</h3>
                  <div className="">

                    <h3 className="text-xl text-cyan-600 font-bold mb-4">Features:</h3>
                    <ul className="list-disc ml-4 ">
                      <li>User Login and Register System with Stripe payment gateway implementation</li>
                      <li>Popular Classes by number of enrollment, Popular Instructors and Select class for future payment.</li>
                      <li>Dashboard: User Selected Class, User Enrolled Class, User Payment History. Instructors Add New Class, Instructors
                        Added Classes. Admin Manage Classes, Admin Manage Users</li>
                    </ul>
                    <p className="my-4"><span className="text-cyan-600 font-bold">Tools:</span> React, Express.js, MongoDB, Tailwind, React Router, Firebase, Stripe Payment Gateway, Axios, TanStack Query</p>
                    <div className="flex gap-4">
                      <a
                        href="https://language-oasis.web.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Live Site
                      </a>
                      <a
                        href="https://github.com/mirza-mohibul-hasan/language-oasis-client"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Client Repo
                      </a>
                      <a href="https://github.com/mirza-mohibul-hasan/language-oasis-server"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Server Repo
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl lg:flex gap-10">
                <img src={project2} alt="" className="rounded-lg w-[500px] h-96" />
                <div>
                  <h3 className="text-4xl mb-4">Sports Toy Zone</h3>
                  <div className="">

                    <h3 className="text-xl text-cyan-600 font-bold mb-4">Features:</h3>
                    <ul className="list-disc ml-4 ">
                      <li>Toy Gallery with Football, Cricket & Boxing categories, latest collection, and customer reviews.</li>
                      <li>User Registration, Login (Google or Email/Password).ular Instructors and Select class for future payment.</li>
                      <li>Toy management (Add, View, Update, Delete).All Toys listing, customer messaging, and user-specific toy tracking.</li>
                    </ul>
                    <p className="my-4"><span className="text-cyan-600 font-bold">Tools:</span> React, Express.js, MongoDB, Tailwind, React Router, Firebase</p>
                    <div className="flex gap-4">
                      <a
                        href="https://b7a11-toy-marketplace-4c6e4.web.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Live Site
                      </a>
                      <a
                        href="https://github.com/mirza-mohibul-hasan/sports-toy-zone-client-side"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Client Repo
                      </a>
                      <a href="https://github.com/mirza-mohibul-hasan/-sports-toy-zone-server-side"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Server Repo
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl lg:flex gap-10">
                <img src={project3} alt="" className="rounded-lg w-[500px] h-96" />
                <div>
                  <h3 className="text-4xl mb-4">Bengal Cusine</h3>
                  <div className="">

                    <h3 className="text-xl text-cyan-600 font-bold mb-4">Features:</h3>
                    <ul className="list-disc ml-4 ">
                      <li>Online Recipe Tutorials with chef-specific recipes, user registration, and login options via Github and Google.</li>
                      <li>User Login using Email and Password for personalized experience, featuring a collection of recipes from various chefs.</li>
                      <li>TFavorite list functionality to save and access preferred recipes.</li>
                    </ul>
                    <p className="my-4"><span className="text-cyan-600 font-bold">Tools:</span>React, Express.js, Tailwind, React Router, Firebase</p>
                    <div className="flex gap-4">
                      <a
                        href="https://b7a10-chef-recipe-hunter-88f79.web.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Live Site
                      </a>
                      <a
                        href="https://github.com/mirza-mohibul-hasan/bengal-cuisine-client"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Client Repo
                      </a>
                      <a href="https://github.com/mirza-mohibul-hasan/bengal-cuisine-server"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Server Repo
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
