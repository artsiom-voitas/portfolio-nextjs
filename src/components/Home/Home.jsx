import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import reactImg from '../../assets/images/react-js.png';
import AnimatedText from '../AnimatedText';
import { LinkArrow } from '../icons';
import HireButton from './HireButton/HireButton';

const MotionImage = motion(Image);

function Home() {
    return (
        <div className="sm:gap-15 flex w-full items-center justify-between lg:flex-col md:gap-10">
            <div className="w-1/2 md:w-[70%] md:overflow-hidden sm:w-full">
                <MotionImage
                    src={reactImg}
                    alt="ReactJS"
                    priority
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"
                    className="h-auto w-full lg:hidden md:inline-block md:w-full"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 5
                    }}
                />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
                <AnimatedText
                    text="Programmer: A machine that turns coffee into code"
                    className="!text-left !text-6xl xl:!text-5xl lg:!text-center
                    lg:!text-6xl md:!text-5xl sm:!text-3xl"
                />
                <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                    As a newbie frontend developer, I&apos;m looking to find my
                    first job where I can translate ideas into innovative web
                    applications. Check out my latest projects, showcasing my
                    experience in React.js development.
                </p>
                <div className="relative mt-2 flex items-center self-start lg:self-center">
                    <Link
                        href="files/Artsiom's Voitas CV.pdf"
                        target="_blank"
                        className="flex items-center overflow-visible rounded-lg border-2 border-solid
                                bg-dark p-2.5 px-6 text-lg font-semibold capitalize
                                text-light hover:border-dark hover:bg-transparent hover:text-dark
                                dark:bg-light dark:text-dark
                                dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                                md:p-2 md:px-4 md:text-base"
                        download={true}>
                        CV
                        <LinkArrow className={'ml-1 !w-6'} />
                    </Link>
                    <Link
                        href="mailto:artsiom.voitas@gmail.com"
                        target="_blank"
                        className="ml-4 text-lg font-medium capitalize text-dark underline
                        dark:text-light md:text-base">
                        Contact me
                    </Link>
                </div>
            </div>
            <HireButton className="md:hidden" />
        </div>
    );
}
2;

export default Home;
