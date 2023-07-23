import { motion, useScroll } from 'framer-motion';

function LiIcon({ reference }) {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ['center end', 'center center']
    });
    return (
        <figure className="absolute left-0 stroke-dark">
            <svg
                width={75}
                height={75}
                viewBox="0 0 100 100"
                className="-rotate-90">
                <circle
                    className="fill-none stroke-primary stroke-1"
                    cx={75}
                    cy={50}
                    r={20}
                />
                <motion.circle
                    className="fill-light stroke-[5px]"
                    cx={75}
                    cy={50}
                    r={20}
                    style={{
                        pathLength: scrollYProgress
                    }}
                />
                <circle
                    className="animate-pulse fill-primary stroke-1"
                    cx={75}
                    cy={50}
                    r={10}
                />
            </svg>
        </figure>
    );
}

export default LiIcon;
