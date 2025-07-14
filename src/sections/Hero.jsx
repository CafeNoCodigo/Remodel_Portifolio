import { words } from '../constants/index.js';
import Button from '../components/Button.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter.jsx';

const Hero = () => {
    useGSAP(() =>{
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger:0.2,
                duration: 1,
                ease: 'Power2.inOut'
            },
        )
    })
  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background"/>
        </div>

        <div className="hero-layout">
            {/*LEFT: HERO CONTENT */}
            <header className="flex flex-col justify-center md:w-full w:screen md:px-20 px-2">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>
                        Transformo
                        <span className="slide">
                            <span className="wrapper">
                                {words.map((word) => (
                                    <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                        <img 
                                        src = {word.imgPath}
                                        alt={word.text}
                                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                        />

                                        <span>{word.text}</span>
                                    </span>
                                ))}
                            </span>
                        </span>
                        </h1>
                        <h1>em Projectos Reais</h1>
                        <h1>que Entregam Resultados</h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">Olá! Chamo-me Fabião Mainato e sou desenvolvedor de software, </p>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none bottom-6">sistemas Desktop e sistemas web.</p>
                    
                    <Button 
                        text="Trabalhos Feitos"
                        className="md:w-80 md:h-17 w-75 h-12"
                        id="button"
                        />
                </div>
            </header>

            {/*RIGTH: 3D MODEL */}
            <figure className='flex justify-center items-center'>
                
                <div 
                    className='hero-3d-layout md:h-4/5 h-10 mt-40'
                    style={{ perspective: '800px'}}>
                <img 
                    src="./images/perfil.png" alt="Perfil"
                    className='mt-[-13rem] md:mt-[-35rem] md:scale-90 md:ml-[-10rem] ml-[-20px]'
                    style={{ transition: 'transform 0.2s '}}
                    onMouseMove={e => {
                      const img = e.currentTarget;
                      const rect = img.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      let rotateY = ((x - centerX) / centerX) * 30;
                      let rotateX = -((y - centerY) / centerY) * 30;
                      rotateY = Math.max(-15, Math.min(15, rotateY));
                      rotateX = Math.max(-15, Math.min(15, rotateX));
                      img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                    }}
                    onMouseLeave={ e => {
                        e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
                    }}/>
                </div>
            </figure>
        </div>

        <AnimatedCounter />
    </section>
  )
}

export default Hero
