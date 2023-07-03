import { saveAs } from 'file-saver';
import about from "../assets/personal/00000IMG_00000_BURST20220625155032925_COVER-01-01.jpeg";
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    const handleDownload = () => {
        const fileUrl = 'https://drive.google.com/uc?export=download&id=18V0A68oIR69tOtAB8YN43kUrzn8EnR1e';
        const fileName = 'Mirza Mohibul Hasan.pdf'; // Adjust the file name and extension accordingly
    
        saveAs(fileUrl, fileName);
      };
    const info = [
        { text: "Years experience", count: "01" },
        { text: "Completed Projects", count: "30" },
        { text: "Companies Work", count: "02" },
    ];
    useEffect(()=>{
        Aos.init({duration: 1000});
    },[])
    return (
        <section id="about" className="py-10 text-white lg:w-11/12 mx-auto">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold mb-8">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-4 max-w-6xl mx-auto">
                    <div className="p-2" data-aos="zoom-in">
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
                                <button className="btn-primary" onClick={handleDownload}>Download Resume</button>
                        </div>
                    </div>
                    <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center " data-aos="zoom-out-down">
                        <img src={about} className="lg:w-96 h-full relative w-11/12 max-w-sm aboutImg  rounded-2xl" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;