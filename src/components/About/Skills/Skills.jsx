import Skill from './Skill';

function Skills() {
    return (
        <>
            <h2 className="mt-64 w-full text-center text-8xl font-bold md:mt-32 md:text-6xl">
                Skills
            </h2>
            <div
                className="relative flex h-screen w-full items-center
                justify-center rounded-full bg-circularLight dark:bg-circularDark
                lg:h-[65vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd
                sm:h-[55vh] sm:bg-circularLightSm sm:dark:bg-circularDarkSm xs:h-[40vh]">
                <Skill
                    title="Web"
                    x="0vw"
                    y="0vw"
                    className="xd:text-xs !bg-dark !p-10 !text-light dark:!bg-light dark:!text-dark lg:!p-5
                    md:!p-4 xs:!p-2"
                />
                <Skill
                    title="HTML"
                    x="-22vw"
                    y="2vw"
                />
                <Skill
                    title="CSS"
                    x="-5vw"
                    y="-10vw"
                />{' '}
                <Skill
                    title="JavaScript"
                    x="20vw"
                    y="6vw"
                />
                <Skill
                    title="React"
                    x="0vw"
                    y="12vw"
                />
                <Skill
                    title="Vite"
                    x="-20vw"
                    y="-15vw"
                />
                <Skill
                    title="NextJS"
                    x="15vw"
                    y="-12vw"
                />
                <Skill
                    title="Figma"
                    x="0vw"
                    y="-20vw"
                />
                <Skill
                    title="Tailwind CSS"
                    x="18vw"
                    y="18vw"
                />
            </div>
        </>
    );
}

export default Skills;
