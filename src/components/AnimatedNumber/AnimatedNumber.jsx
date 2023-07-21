import { useInView, useMotionValue, useSpring } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

function AnimatedNumber({ number }) {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(number);
        }
    }, [isInView, motionValue, number]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= number) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, number]);

    return <span ref={ref}>{number}</span>;
}

AnimatedNumber.propTypes = {
    number: PropTypes.number.isRequired
};

export default AnimatedNumber;
