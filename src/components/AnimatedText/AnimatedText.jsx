import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useId } from 'react';
import { quoteAnimationVariant, wordAnimationVariant } from './animationVariants';

function AnimatedText({ text, className = '' }) {
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
                {text.split(' ').map((word, index) => (
                    <motion.span
                        key={index}
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
