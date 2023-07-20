import PropTypes from 'prop-types';
import { useId } from 'react';
import { motion } from 'framer-motion';
import { quoteAnimationVariant, wordAnimationVariant } from './animationVariants';

function AnimatedText({ text, className = '' }) {
    const wordId = useId();
    return (
        <div
            className={
                'mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-center'
            }>
            <motion.h1
                className={`${className} inline-block w-full text-6xl font-bold capitalize text-dark`}
                variants={quoteAnimationVariant}
                initial="initial"
                animate="animate">
                {text.split(' ').map((word) => (
                    <motion.span
                        key={wordId}
                        className="inline-block"
                        variants={wordAnimationVariant}>
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
}

AnimatedText.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default AnimatedText;
