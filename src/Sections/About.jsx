import { useState } from "react";
import Globe from "react-globe.gl";
// import { color } from "three/tsl";
import Button from "../Components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("sukriti.001sharma@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20 " id="about">
      <div className="grid  xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/Profile.jpeg"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
              style={{ borderRadius: "50%" }}
            />
            <div>
              <p className="grid-headtext">About Me</p>
              <p className="grid-subtext">
                A passionate and dedicated Full Stack Developer with a strong
                focus on software development. During my internship at
                CodesDope, I worked as a Backend Developer, building scalable
                systems and APIs. I've also held leadership roles as Captain of
                the boxing team and a member of the Students' Parliament,
                contributing to internships and placements. I was the 2nd
                runner-up in the HULT Prize and won a Gold Medal in boxing at
                Spardha. Passionate about coding, I constantly strive to learn
                and build impactful solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                {" "}
                I am proficient in a wide array of technologies that enable me
                to build scalable and efficient web applications. My key stack
                includes following technologies:
                <br /> <span style={{ fontWeight: "bold" }}>Frontend:</span>
                React, Redux, Next.js, HTML, CSS, JavaScript, Three.js, Chart.js{" "}
                <br /> <span style={{ fontWeight: "bold" }}>Backend:</span>
                Node.js, Express.js, RESTful APIs <br />{" "}
                <span style={{ fontWeight: "bold" }}>Databases:</span> MongoDB,
                PostgreSQL, MySQL, Redis <br />
                <span style={{ fontWeight: "bold" }}>Tools & Others:</span> Git,
                GitHub, Postman, Unreal Engine <br /> I am always seeking new
                opportunities to expand my knowledge.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4 ">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topolgy.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "I'm here",
                    size: 20,
                    color: "white",
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely accross most timezones
              </p>
              <p className="grid-subtext">
                {" "}
                Flexibility is key in today’s interconnected world. I am
                equipped and fully prepared to work remotely, collaborating
                seamlessly with teams across all timezones. Whether it’s early
                mornings or late nights, I prioritize clear communication,
                deadlines, and deliverables, ensuring smooth collaboration
                regardless of where the team is based.
              </p>
              <a href="#contact">
                <Button
                  name="Contact me"
                  isBeam
                  containerClass={"w-full mt-10"}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext"> My passion for Coding</p>
              <p className="grid-subtext">
                {" "}
                Coding is my true passion. I love solving complex problems,
                optimizing performance, and building impactful applications.
                With a{" "}
                <a
                  href="https://leetcode.com/u/sukkuzzz/"
                  target="_blank"
                  style={{ color: "green" }}
                >
                  LeetCode
                </a>{" "}
                contest rating 1441+ and over 700 problems solved, I
                continuously challenge myself to improve my skills. Whether it’s
                health-tech apps or game development with Unreal Engine, I’m
                dedicated to creating innovative solutions that make a
                difference.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  sukriti.001sharma@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
