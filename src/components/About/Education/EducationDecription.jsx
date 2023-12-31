import { LiIcon } from '@/components/icons';
import { motion, spring } from 'framer-motion';
import PropTypes from 'prop-types';
import { useRef } from 'react';

function EducationDecription({ type, time, place, info }) {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="mx-auto my-8 flex w-[60%] flex-col justify-between first:mt-0 last:mb-0 md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: spring }}
                viewport={{ once: true }}>
                <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
                    {type}
                </h3>
                <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {place}
                </span>
                <p className="w-full font-medium md:text-sm">{info}</p>
            </motion.div>
        </li>
    );
}

EducationDecription.propTypes = {
    info: PropTypes.string.isRequired,
    place: PropTypes.any.isRequired,
    time: PropTypes.any.isRequired,
    type: PropTypes.any.isRequired
};

export default EducationDecription;
