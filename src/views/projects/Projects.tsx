import React from 'react';
import { useTranslation } from 'react-i18next';
import { SiTailwindcss, SiTypescript, SiWebpack } from 'react-icons/si';
import { IoLink, IoLogoElectron, IoLogoReact, IoPrism } from 'react-icons/io5';
import { Collapsible } from '../../components/collapsible/Collapsible';
import { Collaborator } from '../../components/collaborator/Collaborator';
import { Carousel } from '../../components/carousel/Carousel';

export function Projects() {
    const { t } = useTranslation();

    return (
        <div id="projects" className="min-h-screen">
            <h1 className="ps-heading">{ t("projects.heading") }</h1>
            <div>
                <h2 className="ps-subheading hover:underline underline-offset-2 inline-block cursor-pointer">
                    <a href="https://github.com/PrivaNoteTeam/PrivaNote">{ t("projects.privanote.heading") }</a>
                    <IoLink className="text-green-300 inline-block ml-1" />
                </h2>
                <div>
                    <div className="flex flex-col sm:flex-row space-x-0 space-y-16 sm:space-x-16 sm:space-y-0">
                        <div className="flex flex-col space-y-6">
                            <div className="flex flex-col space-y-3 text-gray-300">
                                <p>{ t("projects.privanote.description.part1") }</p>
                                <p>{ t("projects.privanote.description.part2") }</p>
                            </div>
                            <div>
                                <h3 className="ps-subheading-sm">Technologies Used</h3>
                                <div className="flex flex-col space-y-2">
                                    <Collapsible heading="React" icon={IoLogoReact} iconColor="#61dafb">
                                        { t("projects.privanote.technologies.react") }
                                    </Collapsible>
                                    <Collapsible heading="Electron" icon={IoLogoElectron} iconColor="#9feaf9">
                                        { t("projects.privanote.technologies.electron") }
                                    </Collapsible>
                                    <Collapsible heading="Prisma" icon={ IoPrism } iconColor="#38a169">
                                        { t("projects.privanote.technologies.prisma") }
                                    </Collapsible>
                                    <Collapsible heading="TailwindCSS" icon={ SiTailwindcss } iconColor="#38bdf8">
                                        { t("projects.privanote.technologies.tailwindcss") }
                                    </Collapsible>
                                    <Collapsible heading="TypeScript" icon={ SiTypescript } iconColor="#007acc">
                                        { t("projects.privanote.technologies.typescript") }
                                    </Collapsible>
                                    <Collapsible heading="Webpack" icon={ SiWebpack } iconColor="#8ed6fb">
                                        { t("projects.privanote.technologies.webpack") }
                                    </Collapsible>
                                </div>
                            </div>
                            <div>
                                <h3 className="ps-subheading-sm">The Team</h3>
                                <div className="flex space-x-1">
                                    <Collaborator profileUrl="https://github.com/oliviergoulet5" avatarUrl="https://avatars.githubusercontent.com/u/17685861?v=4" />
                                    <Collaborator profileUrl="https://github.com/thejasonxie" avatarUrl="https://avatars.githubusercontent.com/u/34463193?v=4" />
                                    <Collaborator profileUrl="https://github.com/parsa111" avatarUrl="https://avatars.githubusercontent.com/u/48108158?v=4" />
                                    <Collaborator profileUrl="https://github.com/EHSANHAZARI" avatarUrl="https://avatars.githubusercontent.com/u/57685610?v=4" />

                                </div>
                            </div>
                        </div>
                        <Carousel images={[
                            {
                                src: "https://camo.githubusercontent.com/100ab20dc9470f417c33ad2586a27021ce9cb09487a31a3037f08eb50664ed04/68747470733a2f2f692e696d6775722e636f6d2f4a4144784c47312e706e67",
                                caption: "Editing a note in PrivaNote."
                            },
                            {
                                src: "https://i.imgur.com/XR85nsa.png",
                                caption: "The settings page for PrivaNote."
                            },
                            {
                                src: "https://i.imgur.com/ZZ36w2p.png",
                                caption: "The cloud integration page displaying Google Drive as a connected cloud provider."
                            }
                        ]} />
                    </div>
                </div>
            </div>
        </div>
    )
}