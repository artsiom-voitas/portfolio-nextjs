import AnimatedText from '../AnimatedText';
import Education from '../Education';
import Layout from '../Layout';
import WorkExperience from '../WorkExperience';
import Biography from './Biography';
import Skills from './Skills';

function AboutMe() {
    return (
        <main className="flex w-full flex-col items-center justify-center">
            <Layout className="pt-16">
                <AnimatedText
                    className="mb-16"
                    text="Lorem ipsum dolor"
                />
                <Biography />
                <Skills />
                <WorkExperience />
                <Education />
            </Layout>
        </main>
    );
}

export default AboutMe;
