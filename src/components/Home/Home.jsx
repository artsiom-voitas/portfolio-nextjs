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
        <div className="flex w-full items-center justify-between">
            <div className="w-1/2">
                <MotionImage
                    src={reactImg}
                    alt="ReactJS"
                    className="h-auto w-full"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 5
                    }}
                />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center">
                <AnimatedText
                    text="Lorem ipsum dolor"
                    className="!text-left"
                />
                <p className="my-4 text-base font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil provident dolorem accusamus aliquid quas reprehenderit
                    magnam, deserunt commodi eveniet unde saepe, ipsa ipsum
                    incidunt consectetur possimus. Ipsam suscipit laboriosam
                    excepturi?
                </p>
                <div className="relative mt-2 flex items-center self-start">
                    <Link
                        href="files/Artsiom's Voitas CV.pdf"
                        target="_blank"
                        className="flex items-center overflow-visible rounded-lg
                                border-2 border-solid bg-dark p-2.5 px-6 text-lg
                                font-semibold capitalize text-light hover:border-dark
                                hover:bg-transparent hover:text-dark
                                dark:bg-light dark:text-dark dark:hover:border-light
                                dark:hover:bg-dark dark:hover:text-light"
                        download={true}>
                        CV
                        <LinkArrow className={'ml-1 !w-6'} />
                    </Link>
                    <Link
                        href="mailto:artsiom.voitas@gmail.com"
                        target="_blank"
                        className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light">
                        Contact me
                    </Link>
                </div>
            </div>
            <HireButton />
        </div>
    );
}

export default Home;
