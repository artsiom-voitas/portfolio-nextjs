import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { GithubIcon } from '../icons';

const FramerImage = motion(Image);

function FeaturedProject({ type, title, summary, img, demoLink, githubLink }) {
    return (
        <article className="col-span-12">
            <div
                className="relative flex w-full items-center justify-between rounded-3xl
        rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl
        dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
                <div
                    className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2.5rem]
            rounded-br-3xl bg-dark dark:bg-light sm:h-[102%] xs:-right-2 xs:w-full xs:rounded-[1.5rem]"
                />
                <Link
                    href={demoLink}
                    target="_blank"
                    className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
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
                <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                    <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
                        {type}
                    </span>
                    <Link
                        href={demoLink}
                        target="_blank"
                        className="underline-offset-2 hover:underline">
                        <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
                            {title}
                        </h2>
                    </Link>
                    <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                        {summary}
                    </p>
                    <div className="mt-2 flex items-center lg:w-full lg:justify-between">
                        <Link
                            href={githubLink}
                            target="_blank"
                            className="w-10">
                            <GithubIcon />
                        </Link>
                        <Link
                            href={demoLink}
                            target="_blank"
                            className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light
                        dark:bg-light dark:text-dark sm:px-4 sm:text-base">
                            Visit Project
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

FeaturedProject.propTypes = {
    demoLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default FeaturedProject;
