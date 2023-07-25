import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { GithubIcon } from '../icons';
import { motion } from 'framer-motion';

const FramerImage = motion(Image);

function Project({ type, title, img, demoLink, githubLink }) {
    return (
        <article
            className="relative flex w-full flex-col items-center justify-center
        rounded-3xl border border-solid border-dark bg-light p-6 shadow-2xl
        dark:border-light dark:bg-dark">
            <div
                className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2rem]
            rounded-br-3xl bg-dark dark:bg-light"
            />
            <Link
                href={demoLink}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage
                    src={img}
                    alt={title}
                    className="h-auto w-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    priority={true}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"
                />
            </Link>
            <div className="mt-4 flex w-full flex-col items-start justify-between">
                <span className="text-xl font-medium text-primary dark:text-primaryDark">
                    {type}
                </span>
                <Link
                    href={demoLink}
                    target="_blank"
                    className="underline-offset-2 hover:underline">
                    <h2 className="my-2 w-full text-left text-4xl font-bold">
                        {title}
                    </h2>
                </Link>
                <div className="mt-2 flex w-full items-center justify-between">
                    <Link
                        href={demoLink}
                        target="_blank"
                        className="text-lg font-semibold underline">
                        Visit
                    </Link>
                    <Link
                        href={githubLink}
                        target="_blank"
                        className="w-8">
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
}

Project.propTypes = {
    demoLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Project;
