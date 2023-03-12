import React from "react"
import IconList from "../../components/list/IconList"
import H2 from "../../components/H2/H2";
import HomeButton from "./HomeButton";
import { useTranslation } from 'react-i18next';

function Home() {
    const { t, i18n } = useTranslation();
    return (
        <section id="home" >
            <HomeWrap>
                <HomeImgWrap>
                    <HomeImg />
                </HomeImgWrap>
                <H2>
                    {t('hi')} <span className ="font-medium text-transparent bg-clip-text 
                                                  bg-gradient-to-r from-teal-500 to-cyan-500">
                                    Geoffrey
                                </span>
                </H2>
                <p>
                    {t('bio')}
                </p>
                <IconList />
                <HomeButton value={t('seemywork')} />
            </HomeWrap>
        </section>
    )
}

const HomeWrap = ({children}) => {
    return (
        <div
            className ="flex flex-col items-center sm:gap-10 gap-5 text-center
                        lg:h-4/6 lg:mt-36 sm:mt-28 mt-6 mb-16 lg:px-16 px-2 "
        >
            {children}
        </div>
)}

const HomeImgWrap = ({children}) => {
        return (
        <div 
            className ="sm:w-40 sm:h-40 w-32 h-32 mb-3 rounded-full flex place-content-center
                        dark:bg-zinc-800 bg-zinc-50 shadow-sm"
        >
            {children}
        </div>
)}

const HomeImg = () => {
    return (
        <img 
            src="./assets/avatar-cv.png" 
            className="sm:w-32 sm:h-32 h-28 w-28 rounded-full self-center"
        />
)}

export default Home