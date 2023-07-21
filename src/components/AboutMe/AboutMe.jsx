import AnimatedText from '../AnimatedText';
import Layout from '../Layout';
import Biography from './Biography';
import Skills from './Skills/Skills';

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
            </Layout>
        </main>
    );
}

export default AboutMe;
