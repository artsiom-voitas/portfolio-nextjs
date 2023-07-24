import avStore from '@/assets/images/projects/av-store.png';
import githubDashboard from '@/assets/images/projects/github-dashboard.png';
import honeyStore from '@/assets/images/projects/honey-store.png';
import mortgageCalc from '@/assets/images/projects/mortgage-calc.png';
import rayalPark from '@/assets/images/projects/rayal-park.png';
import todoApp from '@/assets/images/projects/todo-app.png';
import universalStore from '@/assets/images/projects/universal-store.png';
import webovio from '@/assets/images/projects/webovio.png';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { FeaturedProject, Project } from '@/components/Projects';
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
            <main className="mb-16 flex w-full flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Great things start small"
                        className="mb-16"
                    />
                    <div className="grid grid-cols-12 gap-24">
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Featured Project"
                                title="GitHub Dashboard"
                                summary="Search for repositories on GitHub"
                                img={githubDashboard}
                                demoLink="https://artsiom-voitas.github.io/github-dashboard/#/"
                                githubLink="https://github.com/artsiom-voitas/github-dashboard"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                type="ReactJS with Redux"
                                title="Todo App"
                                img={todoApp}
                                demoLink="https://artsiom-voitas.github.io/todo-app/"
                                githubLink="https://github.com/artsiom-voitas/todo-app/"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                type="ReactJS with MUI"
                                title="Mortgage calculator"
                                img={mortgageCalc}
                                demoLink="https://artsiom-voitas.github.io/mortgage-calculator/"
                                githubLink="https://github.com/artsiom-voitas/mortgage-calculator/"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                type="Vanila JS"
                                title="AV Store"
                                img={avStore}
                                demoLink="https://artsiom-voitas.github.io/av-store/dist/index.html"
                                githubLink="https://github.com/artsiom-voitas/av-store/"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                type="Responsive landing"
                                title="Webovio"
                                img={webovio}
                                demoLink="https://artsiom-voitas.github.io/webovio/build/"
                                githubLink="https://github.com/artsiom-voitas/webovio/"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                type="Responsive landing"
                                title="Rayal Park"
                                img={rayalPark}
                                demoLink="https://artsiom-voitas.github.io/rayal-park/"
                                githubLink="https://github.com/artsiom-voitas/rayal-park/"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                type="Landing"
                                title="Universal Store"
                                img={universalStore}
                                demoLink="https://artsiom-voitas.github.io/universal-store/build/"
                                githubLink="https://github.com/artsiom-voitas/universal-store"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                type="Landing"
                                title="Honey Store"
                                img={honeyStore}
                                demoLink="https://artsiom-voitas.github.io/honey-store/"
                                githubLink="https://github.com/artsiom-voitas/honey-store"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}

export default Projects;
