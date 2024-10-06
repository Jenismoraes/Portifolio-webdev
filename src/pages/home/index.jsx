import profilePlaceholder from "../../assets/react.svg";
import Badge from "../../components/badge";
import Button from "../../components/button";
import { Paragraph, Title } from "../../components/typography";

const Home = () => {
    return (
        <div className="flex w-full">
            <div className="mr-4 ml-4 mb-4 flex flex-col w-full rounded-lg md:flex-row items-center p-8 bg-white dark:bg-gray-900 dark:bg-gradient-to-r dark:from-[#13072e] dark:to-[#3f2182] from-gray-900 to-gray-700">
                <div className="text-center md:text-left w-full">
                    <Badge>Jeniffer Moraes</Badge>
                    <Title className="mt-6">Design e estudante de Engenharia de SoftWare.</Title>
                    <Paragraph className="mt-4 text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Paragraph>
                    <Button className="mt-6">
                        <p className="text-xl">Conheça meus projetos</p>
                    </Button>
                </div>
                <div className="flex justify-center md:justify-center w-full">
                    <img
                        src={profilePlaceholder}
                        alt="Minha foto"
                        className="w-48 h-48 object-cover rounded-full mt-8 md:mt-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
