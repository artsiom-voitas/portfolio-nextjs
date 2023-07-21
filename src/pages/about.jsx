import AboutMe from '@/components/AboutMe';
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
            <AboutMe />
        </>
    );
}

export default About;
