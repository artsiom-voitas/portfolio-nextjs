import { motion } from 'framer-motion';

function TransitionEffect() {
    return (
        <>
            <motion.div
                className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-dark dark:bg-light"
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
            <motion.div
                className="fixed bottom-0 right-full top-0 z-20 h-screen w-screen bg-blue"
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
            />
            <motion.div
                className="fixed bottom-0 right-full top-0 z-10 h-screen w-screen bg-light dark:bg-dark"
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
            />
        </>
    );
}

export default TransitionEffect;
