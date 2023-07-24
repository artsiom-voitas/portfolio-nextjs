import { useRef } from 'react';
import JobDescription from './JobDescription';
import { motion, useScroll } from 'framer-motion';

function WorkExperience() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    });
    return (
        <div className="my-64">
            <h2 className="mb-32 w-full text-center text-8xl font-bold">Experience</h2>
            <div
                ref={ref}
                className="relative mx-auto w-[75%]">
                <motion.div
                    className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark"
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="ml-4 flex w-full flex-col items-start justify-between">
                    <JobDescription
                        position="Trainee HTML/CSS Developer"
                        company="LomraySoftware"
                        websiteLink="https://lomray.com/"
                        time="May 2022 - July 2022"
                        adress="Minsk, Belarus"
                        work="Writing HTML/CSS code, using version control, passing code reviews, and tracking all tasks on Jira."
                    />
                </ul>
            </div>
        </div>
    );
}

export default WorkExperience;
