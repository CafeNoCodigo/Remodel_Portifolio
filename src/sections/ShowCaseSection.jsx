import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';


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
                <div ref={project1Ref} className='first-project-wrapper'>
                    <div className='image-wrapper'>
                        <img src="/images/project1.jpg" alt="Point of Sale System" />
                    </div>
                    <div className='text-content'>
                        <h2>Sistema Inteligente de Ponto de Venda (PDV)</h2>
                        <p className='text-white-50 md:text-xl text-justify'>Uma aplicação moderna desenvolvida em Java com JavaFX e MySQL, projetada para agilizar o processo de vendas, controlar estoque, gerenciar funcionários e gerar relatórios em tempo real. Ideal para pequenas e médias empresas que buscam eficiência e controle total do seu negócio.</p>
                    </div>
                </div>

                {/*RIGHT SIDE */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div ref={project2Ref} className='project'>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/project2.jpg" alt="Point of sale System" />
                        </div>
                        <h2>Integração com API do M-PESA e E-MOLA</h2>
                    </div>

                    <div ref={project3Ref} className='project'>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/project3.jpg" alt="Point of sale System" />
                        </div>
                        <h2>Layout Robusto Usando JAVAFX</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowCaseSection