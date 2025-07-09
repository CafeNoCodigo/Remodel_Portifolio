import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { project1, project2, project3, project_logo_link } from "../constants";


gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => { 
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y:50, opacity: 0
            },
            {
                y:0, opacity:1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card, 
                    start: 'top bottom-=100',
                }
            }
        )
    });

    gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
        )
  }, []);

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/*LEFT SIDE */}
                <div ref={project1Ref} className='first-project-wrapper '>
                    <div className='image-wrapper hoverCard'>
                        <a href={ project1.link } target="_blank"><img src={ project1.img } alt={ project1.alt } /></a>
                    </div>
                    <div className="flex mt-7 gap-5">
                        <a href= { project1.link } target="_blank">
                            <img className="showcase-img-logo" src={ project_logo_link.imgDeploy } alt="Deploy" />
                        </a>
                    </div>
                    <div className='text-content'>
                        <h2>{ project1.title }</h2>
                        <p className='text-white-50 md:text-xl text-justify'>{ project1.text }</p>
                    </div>
                </div>

                {/*RIGHT SIDE */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div ref={project2Ref} className='project '>
                        <div className='image-wrapper bg-[#ffefdb] hoverCard-showcase'>
                            <img src={ project2.img } alt="Point of sale System" />
                            
                        </div>
                        <div className="flex w-7 h-7 mt-7">
                            <a href={ project2.link } target="_blank" alt={ project2.alt }>
                                <img className="showcase-img-logo" src={ project_logo_link.imgDeploy } alt="Deploy" />
                            </a>
                        </div>
                        <h2>{ project2.title }</h2>
                    </div>

                    <div ref={project3Ref} className='project'>
                        <div className='image-wrapper bg-[#ffefdb] hoverCard-showcase'>
                            <img src={ project3.img } alt={ project3.alt } />
                        </div>
                        <div className="flex w-20 h-20 gap-5">
                            <a href={ project3.link }><img className="showcase-img-logo" src={ project_logo_link.imgDeploy } alt="Deploy" /></a>
                            <a href={ project3.link_github }><img className="showcase-img-logo" src={ project_logo_link.imgGitHub } alt="GitHub" /></a>
                        </div>
                        <h2 className="md:mt-[-2px]">{ project3.title }</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowCaseSection