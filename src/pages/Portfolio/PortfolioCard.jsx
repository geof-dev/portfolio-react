import React from "react"
import TagList from "../../components/tag/TagList"
import H3 from "../../components/H3/H3"
import GithubGradient from "../../components/icons/GithubGradient"
import ExternalLinkGradient from "../../components/icons/ExternalLinkGradient"
import CardBodyText from "../../components/card/CardBodyText"
import { useTranslation } from 'react-i18next';

function Portfolio(props) {  
    const { t, i18n } = useTranslation();
    const {id, title, demoLink, githubLink, desc, tags} = props.project
    return (        
        <div key={id} >
            <PortfolioCardWrap>
            <img className="w-full rounded-t-lg" src={"./assets/project"+id+".png"} alt="Sunset in the mountains" />
                <div className="p-6">
                    <H3>
                        {t('titleproject'+id)}
                        <span className="flex gap-1 mt-.5">
                            {githubLink &&
                                <a target="_blank" href={githubLink}>
                                    <GithubGradient />
                                </a>
                            }
                            {demoLink &&
                                <a target="_blank" href={demoLink}>
                                    <ExternalLinkGradient />
                                </a>
                            }
                        </span>
                    </H3>
                
                <CardBodyText>
                    {t('descproject'+id)}
                </CardBodyText>
                <TagList>
                    <li>{tags[0]}</li>
                    <li>{tags[1]}</li>
                    <li>{tags[2]}</li>
                    <li>{tags[3]}</li>
                    <li>{tags[4]}</li>
                </TagList>
                </div>
            </ PortfolioCardWrap>
        </div>
    )
}

//PortfolioWrap

const PortfolioCardWrap = ({children}) => {
    return (
        <div className="bg-zinc-50 shadow-sm dark:bg-zinc-800 hover:shadow-lg rounded-lg" >
            {children}
        </div>
    )
}

const PortfolioNumber = ({children}) => {
    return (
        <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
            {children}
        </div>
    )
}

export default Portfolio