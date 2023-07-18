import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Hero = () => {
  const social_media = [
    { logo: "logo-github", link: "https://github.com/mirza-mohibul-hasan" },
    { logo: "logo-linkedin", link: "https://www.linkedin.com/in/mirza-mohibul-hasan/" },
  ];
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center w-11/12 mx-auto"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="-z-50" />
      {/* <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="w-8/12 rounded-full shadow-cyan-600 border-cyan-600 h-full object-cover mt-14 lg:mt-0 shadow-2xl " />
      </div> */}
      <div className="flex-1 flex items-center justify-center h-full">
        <div className="blob"></div>
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-4xl text-4xl">
              Hi there!
              <br /></span>
            I am <span>Mirza Mohibul Hasan</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Web Developer based on Jashore, Bangladesh
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon, index) => (
              <div
                key={index}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a rel="stylesheet" href={icon.link}><ion-icon name={icon.logo}></ion-icon></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
