import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Badge from "../../components/badge";

import { Paragraph, Title } from "../../components/typography";
import Slider from "../../components/slider";
import Button from '../../components/button';

const Projetos = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(parseInt(projectId) || 0);
    const totalSlides = 4;

    useEffect(() => {
        const id = parseInt(projectId) || 0;
        if (currentSlide !== id) {
            navigate(`/projetos/${currentSlide}`);
        }
    }, [currentSlide, navigate, projectId]);

    const nextSlide = () => {
        const nextIndex = (currentSlide + 1) % totalSlides;
        setCurrentSlide(nextIndex);
    };

    const settings = {
        infinite: true,
        duration: 700,
        showIndicators: true,
    };

    return (
        <div className="flex w-full">
            <div className="mr-4 ml-4 mb-4 flex flex-col w-full rounded-lg md:flex-col items-end p-8 bg-white dark:bg-gray-900 dark:bg-gradient-to-r dark:from-[#13072e] dark:to-[#822159] from-gray-900 to-gray-700">
                <Slider settings={settings} currentSlide={currentSlide} className="h-full">
                    <div className="flex flex-col sm:flex-row w-full h-full"> 
                        <div className="flex items-center justify-center md:justify-center w-full ">
                            <img
                                src="../public/imgs/projetos.jpg"
                                alt="Notebook e caderno"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center w-full items-center text-right">
                            <Badge>Meus Projetos</Badge>
                            <ul className="text-gray-900 dark:text-gray-300 text-lg">
                                <li><a onClick={() => setCurrentSlide(1)} className='underline'>Vinícola Agnello</a></li>
                                <li><a onClick={() => setCurrentSlide(2)} className='underline'>Formula E</a></li>
                                <li><a onClick={() => setCurrentSlide(3)} className='underline'>Social Mídia</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full h-full">
                        <div className="flex items-center justify-center md:justify-center w-full p-6">
                            <img
                                src="../public/imgs/Agnello_pj.png"
                                alt="Page de cadastro do site da Agnello"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center w-full items-center text-left">
                            <Title className="mt-6 text-pink-500 dark:text-white">Vinícola Agnello</Title>
                            <Paragraph className="mt-8">Um projeto para a Vinícola Agnello, um novo e-commerce, projetado para oferecer uma experiência única e envolvente aos amantes de vinhos. Este site não é apenas uma vitrine de produtos; é uma plataforma interativa que destaca a qualidade e a tradição da vinícola. Desenvolvido com tecnologias modernas como HTML, CSS e JavaScript, o e-commerce combina um design responsivo e intuitivo, permitindo que os visitantes naveguem facilmente por uma ampla seleção de vinhos, desde os clássicos até as edições especiais e vinhos personalizados.</Paragraph>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full h-full">
                        <div className="flex flex-col justify-center w-full items-center text-left">
                            <Title className="mt-10 text-pink-500 dark:text-white">E-racingbet</Title>
                            <Paragraph className="mt-8">E-Racingbet: Apostas que Conectam Paixão e TecnologiaO, um site de apostas desenvolvido com o objetivo de atrair um público diversificado e aumentar a visibilidade da Fórmula E. Este projeto ambicioso combina a emoção das corridas elétricas com uma experiência de aposta intuitiva e envolvente, permitindo que os fãs se conectem ainda mais com o esporte. Para garantir um desempenho excepcional e uma interface atraente, o site foi desenvolvido com uma combinação de tecnologias modernas, incluindo: Python, C++:, React e entre outras.</Paragraph>
                        </div>
                        <div className="flex items-center justify-center md:justify-center w-full p-6">
                            <img
                                src="../public/imgs/formule-pj.png"
                                alt="Home E-racingbet"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full h-full">
                        <div className="flex flex-col justify-center w-full items-center text-left">
                            <Title className="mt-6 text-pink-500 dark:text-white">Social Mídia</Title>
                            <Paragraph className="mt-8">Atuo como agente de diversos perfis do Instagram, onde sou responsável pela criação de designs atraentes e pelo desenvolvimento de estratégias de marketing eficazes. Meu trabalho vai além de simplesmente postar conteúdo; busco entender a essência de cada marca e o público-alvo para desenvolver uma identidade visual que ressoe com seus seguidores.</Paragraph>
                        </div>
                        <div className="flex items-center justify-center md:justify-center w-full p-6">
                            <img
                                src="../public/imgs/projetos animma.png"
                                alt="Minha foto"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </Slider>
                <div>
                    <Button className="mt-6 align-right" onClick={nextSlide}>Próximo Projeto</Button>
                </div>
            </div>
        </div>
    );
};

export default Projetos;
