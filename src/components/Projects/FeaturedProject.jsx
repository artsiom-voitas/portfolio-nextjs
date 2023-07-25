import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { GithubIcon } from '../icons';

function FeaturedProject({ type, title, summary, img, demoLink, githubLink }) {
    return (
        <article
            className="relative flex w-full items-center justify-between rounded-3xl
        rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl
        dark:border-light dark:bg-dark">
            <div
                className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2.5rem]
            rounded-br-3xl bg-dark dark:bg-light"
            />
            <Link
                href={demoLink}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <Image
                    src={img}
                    alt={title}
                    className="h-auto w-full"
                />
            </Link>
            <div className="flex w-1/2 flex-col items-start justify-between pl-6">
                <span className="text-xl font-medium text-primary dark:text-primaryDark">
                    {type}
                </span>
                <Link
                    href={demoLink}
                    target="_blank"
                    className="underline-offset-2 hover:underline">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light">
                    {summary}
                </p>
                <div className="mt-2 flex items-center">
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
                        dark:bg-light dark:text-dark">
                        Visit Project
                    </Link>
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
