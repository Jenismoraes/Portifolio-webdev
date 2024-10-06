import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import profilePlaceholder from "../../assets/react.svg";
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
            <div className="mr-4 ml-4 mb-4 flex flex-col w-full rounded-lg md:flex-col items-end p-8 bg-white dark:bg-gray-900 dark:bg-gradient-to-r dark:from-[#13072e] dark:to-[#3f2182] from-gray-900 to-gray-700">
                <Slider settings={settings} currentSlide={currentSlide} className="h-full">
                    <div className="flex flex-col sm:flex-row w-full h-full">
                        <div className="flex items-center justify-center md:justify-center w-full ">
                            <img
                                src={profilePlaceholder}
                                alt="Minha foto"
                                className="w-48 h-48 object-cover rounded-full mt-8 md:mt-0"
                            />
                        </div>
                        <div className="flex flex-col justify-center w-full items-center text-right">
                            <Title className="mt-6">Lista de Projetos</Title>
                            <ul className="text-gray-900 dark:text-gray-300">
                                <li><a onClick={() => setCurrentSlide(1)} className='underline'>Vinícola Agnello</a></li>
                                <li><a onClick={() => setCurrentSlide(2)} className='underline'>Formula E</a></li>
                                <li><a onClick={() => setCurrentSlide(3)} className='underline'>Social Mídia</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full h-full">
                        <div className="flex items-center justify-center md:justify-center w-full ">
                            <img
                                src={profilePlaceholder}
                                alt="Minha foto"
                                className="w-48 h-48 object-cover rounded-full mt-8 md:mt-0"
                            />
                        </div>
                        <div className="flex flex-col justify-center w-full items-center text-right">
                            <Title className="mt-6">Projeto 1</Title>
                            <Paragraph>Bla bla bla</Paragraph>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full h-full">
                        <div className="flex flex-col justify-center w-full items-center text-right">
                            <Title className="mt-6">Projeto 2</Title>
                            <Paragraph>Bla bla bla</Paragraph>
                        </div>
                        <div className="flex items-center justify-center md:justify-center w-full ">
                            <img
                                src={profilePlaceholder}
                                alt="Minha foto"
                                className="w-48 h-48 object-cover rounded-full mt-8 md:mt-0"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full h-full">
                        <div className="flex flex-col justify-center w-full items-center text-right">
                            <Title className="mt-6">Projeto 3</Title>
                            <Paragraph>Bla bla bla</Paragraph>
                        </div>
                        <div className="flex items-center justify-center md:justify-center w-full ">
                            <img
                                src={profilePlaceholder}
                                alt="Minha foto"
                                className="w-48 h-48 object-cover rounded-full mt-8 md:mt-0"
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
