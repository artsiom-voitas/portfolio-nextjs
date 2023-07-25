import Skill from './Skill';

function Skills() {
    return (
        <>
            <h2 className="mt-64 w-full text-center text-8xl font-bold">
                Skills
            </h2>
            <div
                className="relative flex h-screen w-full items-center
                justify-center rounded-full bg-circularLight dark:bg-circularDark">
                <Skill
                    title="Web"
                    x="0vw"
                    y="0vw"
                    className="!p-10"
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
