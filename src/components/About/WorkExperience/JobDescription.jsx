import PropTypes from 'prop-types';
import { LiIcon } from '@/components/icons';
import { useRef } from 'react';
import { motion, spring } from 'framer-motion';

function JobDescription({ position, company, websiteLink, time, adress, work }) {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="mx-auto my-8 flex w-[60%] flex-col justify-between first:mt-0 last:mb-0">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: spring }}>
                <h3 className="text-2xl font-bold capitalize ">
                    {position}{' '}
                    <a
                        href={websiteLink}
                        target="_blank"
                        className="capitalize text-primary">
                        @{company}
                    </a>
                </h3>
                <span className="font-medium capitalize text-dark/75">
                    {time} | {adress}
                </span>
                <p className="w-full font-medium">{work}</p>
            </motion.div>
        </li>
    );
}

JobDescription.propTypes = {
    adress: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    websiteLink: PropTypes.string.isRequired,
    work: PropTypes.string.isRequired
};

export default JobDescription;
