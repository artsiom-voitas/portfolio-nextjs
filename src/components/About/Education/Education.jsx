import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import EducationDecription from './EducationDecription';

function Education() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        layoutEffect: false,
        target: ref,
        offset: ['start end', 'center start']
    });
    return (
        <div className="my-64">
            <h2 className="mb-32 w-full text-center text-8xl font-bold">
                Education
            </h2>
            <div
                ref={ref}
                className="relative mx-auto w-[75%]">
                <motion.div
                    className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light"
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
