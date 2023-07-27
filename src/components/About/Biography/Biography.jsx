import profilePic from '@/assets/images/profile-pic.jpeg';
import AnimatedNumber from '@/components/AnimatedNumber';
import Image from 'next/image';

function Biography() {
    return (
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
                className="col-span-3 flex flex-col items-start justify-start xl:col-span-4
            md:order-2 md:col-span-8">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                    Biography
                </h2>
                <p className="font-medium">
                    During that period when I was a student and got a part-time
                    job in an IT company, I realized that I wanted to write
                    code.
                </p>
                <p className="my-4 font-medium">
                    I decided to take a course in frontend development. I
                    finished and learned: HTML, CSS, Gulp, SCSS, Pug. Almost
                    immediately after that I was taken on an internship at
                    Lomray Software for the position of Trainee HTML/CSS
                    developer. During the internship I wrote HTML/CSS code,
                    learned how to use Version control, went through code
                    review, all tasks were tracked through Jira. At the same
                    time I started learning JavaScript and then React. I
                    developed the final project using: React, Redux,
                    React-router, JS, Bootstrap, and CSS.
                </p>
                <p className="font-medium">
                    I just recently returned from a mandatory duty in the Army
                    and now I&apos;m moving forward with my dream of getting a
                    job as a developer.
                </p>
            </div>
            <div
                className="relative col-span-3 h-max rounded-2xl border-2 border-solid
                border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4
                md:order-1 md:col-span-8
            ">
                <div
                    className="absolute -right-3 top-0 -z-10 h-[103%]
                    w-[102%] rounded-[2rem] bg-dark dark:bg-light"
                />
                <Image
                    src={profilePic}
                    alt="Artsiom Voitas picture"
                    className="h-auto w-full rounded-2xl"
                    priority={true}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-around xl:col-span-8 xl:flex-row md:order-3">
                <div className="flex flex-col items-end justify-center xl:items-center">
                    <span className="inline-block text-7xl font-bold md:mb-3 md:text-6xl sm:text-5xl xs:text-4xl">
                        <AnimatedNumber number={10} />+
                    </span>
                    <h2
                        className="text-right text-xl font-medium capitalize text-dark/75 dark:text-light/75
                    xl:text-center md:text-lg sm:text-base xs:text-sm">
                        projects completed
                    </h2>
                </div>
                <div className="flex flex-col items-end justify-center xl:items-center">
                    <span className="inline-block text-7xl font-bold md:mb-3 md:text-6xl sm:text-5xl xs:text-4xl">
                        <AnimatedNumber number={3} />
                    </span>
                    <h2
                        className="text-right text-xl font-medium capitalize text-dark/75 dark:text-light/75
                    xl:text-center md:text-lg sm:text-base xs:text-sm">
                        month of commercial experience
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Biography;
