import { motion, useScroll } from 'framer-motion';

function LiIcon({ reference }) {
    const { scrollYProgress } = useScroll({
        layoutEffect: false,
        target: reference,
        offset: ['center end', 'center center']
    });
    return (
        <figure className="absolute left-0 stroke-dark dark:stroke-light md:left-[1px]">
            <svg
                width={75}
                height={75}
                viewBox="0 0 100 100"
                className="-rotate-90 md:h-[60px] md:w-[60px] xs:h-[60px] xs:w-[40px]">
                <circle
                    className="fill-none stroke-primary stroke-1 dark:stroke-primaryDark"
                    cx={75}
                    cy={50}
                    r={20}
                />
                <motion.circle
                    className="fill-light stroke-[5px] dark:fill-dark"
                    cx={75}
                    cy={50}
                    r={20}
                    style={{
                        pathLength: scrollYProgress
                    }}
                />
                <circle
                    className="animate-pulse fill-primary stroke-1 dark:fill-primaryDark"
                    cx={75}
                    cy={50}
                    r={10}
                />
            </svg>
        </figure>
    );
}

export default LiIcon;
