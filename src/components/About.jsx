// import React from 'react';
import about from "../assets/personal/00000IMG_00000_BURST20220625155032925_COVER-01-01.jpeg";
const About = () => {
    const info = [
        { text: "Years experience", count: "01" },
        { text: "Completed Projects", count: "30" },
        { text: "Companies Work", count: "02" },
    ];
    return (
        <section id="about" className="py-10 text-white lg:w-11/12 mx-auto">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold mb-8">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-4 max-w-6xl mx-auto">
                    <div className="p-2">
                        <div className="text-gray-300 my-3">
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                                I am an undergraduate student and full-stack developer proficient in MERN stack web development. I have strong skills in HTML, CSS, Tailwind, JavaScript, React.js, Node.js, Express.js, and MongoDB. I have built a lots of project such as Language Oasis, an online language learning platform, with features such as authentication, attractive frontend design, payment integration, and admin controls. I am a fast learner, logical thinker, and capable team leader, but he can be straightforward, impatient, and finds it hard to refuse help requests.
                            </p>
                            <div className="flex mt-10 items-center gap-7">
                                {info.map((content) => (
                                    <div key={content.text}>
                                        <h3 className="md:text-4xl text-2xl font-semibold text-white">
                                            {content.count}
                                            <span className="text-cyan-600">+</span>{" "}
                                        </h3>
                                        <span className="md:text-base text-xs">{content.text}</span>
                                    </div>
                                ))}
                            </div>
                            <br />
                            <br />
                            <a href="../../public/Mirza Mohibul Hasan Resume.pdf" download>
                                <button className="btn-primary">Download Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                        <img src={about} className="lg:w-96 h-full relative w-11/12 max-w-sm aboutImg  rounded-2xl" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;