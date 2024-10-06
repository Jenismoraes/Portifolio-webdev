import Badge from "../../components/badge";
import Button from "../../components/button";
import { Paragraph, Title } from "../../components/typography";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex w-full">
            <div className="mr-4 ml-4 mb-4 flex flex-col w-full rounded-lg md:flex-row items-center p-8 bg-white dark:bg-gray-900 dark:bg-gradient-to-r dark:from-[#13072e] dark:to-[#822159] from-gray-900 to-gray-700">
                <div className="text-center md:text-left w-full">
                    <Badge>Jeniffer Moraes</Badge>
                    <Title className="mt-6">Design e estudante de Engenharia de Software.</Title>
                    <Paragraph className="mt-4 text-xl">
                    Olá, me chamo Jeniffer Moraes, muito prazer e seja bem vindo ao meu portfólio! Atualmente sou estudante de engenharia de software na FIAP, e trabalho como designer e social mídia na Animma Digital a cerca de dois anos! Possuo conhecimento em linguagens como Python, JavaScript, C++ e linguagens de marcação como HTML e CSS, além de ser designer, haha. Busco conhecimento e experiências, espero que goste dos meus projetos!                     </Paragraph>
                    <Button className="mt-6">
                        <Link to="/projetos/0">
                            <p className="text-xl">Conheça meus projetos</p>
                        </Link>
                    </Button>

                </div>
                <div className="flex justify-center md:justify-center w-full">
                    <img
                        src="./public/imgs/foto_jeni.jpeg"
                        alt="Minha foto"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
