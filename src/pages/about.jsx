import {
    Biography,
    Education,
    Skills,
    WorkExperience
} from '@/components/About';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';

function About() {
    return (
        <>
            <Head>
                <title>AV | About</title>
                <meta
                    name="description"
                    content="About Artsiom Voitas"
                />
            </Head>
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                        text="Lorem ipsum dolor"
                    />
                    <Biography />
                    <Skills />
                    <WorkExperience />
                    <Education />
                </Layout>
            </main>
        </>
    );
}

export default About;
