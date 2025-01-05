// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { MdSchool } from "react-icons/md";
// const Experience = () => {
//   return (
//     <>
//       <div className="education" id="education">
//         <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
//           {" "}
//           Education Details
//         </h2>
//         <hr />
//         <VerticalTimeline>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             contentStyle={{ background: "black", color: "cyan" }}
//             contentArrowStyle={{ borderRight: "7px solid  white" }}
//             date="2021-present"
//             iconStyle={{ background: "cyan", color: "white" }}
//             icon={<MdSchool />}
//           >
//             <h3 className="vertical-timeline-element-title">BTech</h3>
//             <h4 className="vertical-timeline-element-subtitle">
//               Indian Institute of Technology (BHU) Varanasi, IN
//             </h4>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             contentStyle={{ background: "black", color: "cyan" }}
//             contentArrowStyle={{ borderRight: "7px solid  white" }}
//             date="2018-2020"
//             iconStyle={{ background: "cyan", color: "white" }}
//             icon={<MdSchool />}
//           >
//             <h3 className="vertical-timeline-element-title">12th</h3>
//             <h4 className="vertical-timeline-element-subtitle">
//               Sarvodaya Sr. Sec. School,Kota Rajasthan, IN
//             </h4>
//           </VerticalTimelineElement>
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default Experience;

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { workExperiences } from "../Constants/index.js";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import Developer from "../Components/Developer.jsx";

const Experience = () => {
  return (
 <section className="c-space my-20" >
      <p className="head-text">My Experience </p>
      <div className="w-full text-white-600">
        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1.5} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} />
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ id, name, pos, duration, title, icon }) => (
                  <div key={id} className="work-content_container group">
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="logo" className="w-full h-full" />
                      </div>
                      <div className="work-content_bar" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5 ">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {pos}--{duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
