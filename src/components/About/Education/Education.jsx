import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import EducationDecription from './EducationDecription';

function Education() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        layoutEffect: false,
        target: ref,
        offset: ['start end', 'start end']
    });
    return (
        <div className="my-64 lg:my-32 lg:mb-56 xs:mb-48">
            <h2 className="mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl">
                Education
            </h2>
            <div
                ref={ref}
                className="relative mx-auto w-[75%] lg:w-[90%] md:w-full">
                <motion.div
                    className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light
                    md:left-[30px] md:w-[2px] xs:left-[20px]"
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="ml-4 flex w-full flex-col items-start justify-between">
                    <EducationDecription
                        type="Frontend Developer"
                        time="2022"
                        place="IT SHATTLE"
                        info="The course included learning about javascript,
                              react, redux, using UI libraries and more."
                    />
                    <EducationDecription
                        type="HTML / CSS Developer"
                        time="2022"
                        place="IT SHATTLE"
                        info="The course covered HTML, CSS, preprocessor value, Gulp, and SCSS."
                    />
                    <EducationDecription
                        type="Bachelor of Business Administration"
                        time="2018 - 2022"
                        place="Belarus State Economic University (BSEU)"
                        info="Studying of managing an organization's resources, time and people."
                    />
                </ul>
            </div>
        </div>
    );
}

export default Education;
