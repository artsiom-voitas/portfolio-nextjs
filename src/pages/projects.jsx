import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import {
    FeaturedProject,
    Project,
    avStore,
    githubDashboard,
    honeyStore,
    mortgageCalc,
    movieSearch,
    rayalPark,
    todoApp,
    universalStore,
    weatherApp,
    webovio
} from '@/components/Projects';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';

function Projects() {
    return (
        <>
            <Head>
                <title>AV | Projects</title>
                <meta
                    name="description"
                    content="Artsiom's Voitas Projects"
                />
            </Head>
            <TransitionEffect />
            <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="It's not a bug, it's an undocumented feature"
                        className="mb-16 lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <FeaturedProject
                            type="Featured Project"
                            title="Movie Search"
                            summary="Search for movies on OMDbAPI"
                            img={movieSearch}
                            demoLink="https://movie-search-acpn.vercel.app/"
                            githubLink="https://github.com/artsiom-voitas/movie-search"
                        />
                        <Project
                            type="React TypeScript"
                            title="Weather App"
                            img={weatherApp}
                            demoLink="https://artsiom-voitas.github.io/weather-app/"
                            githubLink="https://github.com/artsiom-voitas/weather-app/"
                        />
                        <Project
                            type="ReactJS with Redux"
                            title="Todo App"
                            img={todoApp}
                            demoLink="https://artsiom-voitas.github.io/todo-app/"
                            githubLink="https://github.com/artsiom-voitas/todo-app/"
                        />
                        <FeaturedProject
                            type="Featured Project"
                            title="GitHub Dashboard"
                            summary="Search for repositories on GitHub"
                            img={githubDashboard}
                            demoLink="https://artsiom-voitas.github.io/github-dashboard/#/"
                            githubLink="https://github.com/artsiom-voitas/github-dashboard"
                        />
                        <Project
                            type="ReactJS with MUI"
                            title="Mortgage calculator"
                            img={mortgageCalc}
                            demoLink="https://artsiom-voitas.github.io/mortgage-calculator/"
                            githubLink="https://github.com/artsiom-voitas/mortgage-calculator/"
                        />
                        <Project
                            type="Vanila JS"
                            title="AV Store"
                            img={avStore}
                            demoLink="https://artsiom-voitas.github.io/av-store/dist/index.html"
                            githubLink="https://github.com/artsiom-voitas/av-store/"
                        />
                        <Project
                            type="Responsive landing"
                            title="Webovio"
                            img={webovio}
                            demoLink="https://artsiom-voitas.github.io/webovio/build/"
                            githubLink="https://github.com/artsiom-voitas/webovio/"
                        />

                        <Project
                            type="Responsive landing"
                            title="Rayal Park"
                            img={rayalPark}
                            demoLink="https://artsiom-voitas.github.io/rayal-park/"
                            githubLink="https://github.com/artsiom-voitas/rayal-park/"
                        />
                        <Project
                            type="Landing"
                            title="Universal Store"
                            img={universalStore}
                            demoLink="https://artsiom-voitas.github.io/universal-store/build/"
                            githubLink="https://github.com/artsiom-voitas/universal-store"
                        />
                        <Project
                            type="Landing"
                            title="Honey Store"
                            img={honeyStore}
                            demoLink="https://artsiom-voitas.github.io/honey-store/"
                            githubLink="https://github.com/artsiom-voitas/honey-store"
                        />
                    </div>
                </Layout>
            </main>
        </>
    );
}

export default Projects;
