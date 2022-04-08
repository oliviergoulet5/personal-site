import React from 'react';
import { useTranslation } from 'react-i18next';
import { FilledRoundButton } from '../../components/filledRoundButton/FilledRoundButton';
import { RoundButton } from '../../components/roundButton/RoundButton';

export function Home() {
    const { t } = useTranslation();

    return (
        <>
            <div className="relative m-auto w-full">
                <span className="absolute h-96 w-full bg-repeat-x bg-contain" style={{ backgroundImage: "url(images/doodle.png)" }} />
            </div>
        <div className="relative flex flex-col h-screen justify-center">
            <div className="flex flex-col-reverse md:flex-row justify-center sm:text-left sm:justify-start items-center">
                <div className="text-center md:text-left">
                    <h1 className='text-2xl md:text-6xl mb-2'>{ t("home.heading") }</h1>
                    <p className="text-gray-400 text-lg md:text-2xl">{ t("home.subheading.part1") }</p>
                    <p className="text-gray-400 text-lg md:text-2xl">{ t("home.subheading.part2") }</p>
                </div>
                <div className="transition-color duration-200 border-4 hover:border-white border-transparent rounded-full w-52 md:w-96 m-auto mb-6 md:mb-0">
                    <img src="images/portrait.png" alt="" className="rounded-full p-1" />
                </div>
            </div>
            <div className="flex justify-center space-x-2 my-8">
                <FilledRoundButton text={ t("home.buttons.contact") } />
                <RoundButton text={ t("home.buttons.download") } />
            </div>
        </div>
        </>

    )
}