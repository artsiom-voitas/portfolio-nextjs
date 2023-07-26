import { useRef } from 'react';
import JobDescription from './JobDescription';
import { motion, useScroll } from 'framer-motion';

function WorkExperience() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        layoutEffect: false,
        target: ref,
        offset: ['start end', 'center start']
    });
    return (
        <div className="my-64 lg:my-32">
            <h2 className="mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl">
                Experience
            </h2>
            <div
                ref={ref}
                className="relative mx-auto w-[75%] lg:w-[90%] md:w-full">
                <motion.div
                    className="absolute left-9 top-0 h-full w-[4px]
                    origin-top bg-dark dark:bg-light md:left-[30px] md:w-[2px] xs:left-[20px]"
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="ml-4 flex w-full flex-col items-start justify-between">
                    <JobDescription
                        position="Trainee HTML/CSS Developer"
                        company="LomraySoftware"
                        websiteLink="https://lomray.com/"
                        time="May 2022 - July 2022"
                        adress="Minsk, Belarus"
                        work="Writing HTML/CSS code, using version control,
                            passing code reviews, and tracking all tasks on Jira."
                    />
                </ul>
            </div>
        </div>
    );
}

export default WorkExperience;
