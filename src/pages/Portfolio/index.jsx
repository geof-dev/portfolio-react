import React from "react";
import BodySection from "../../components/section/BodySection";
import TitleSection from "../../components/section/SectionTitle";
import CardListSmall from "../../components/card/CardListSmall";
import ProjectData from "../../data/ProjectData";
import PortfolioCard from "./PortfolioCard"

export default function Portfolio() {
    return (
        <section id="portfolio">
            <BodySection>
                <TitleSection>
                    Portfolio
                </TitleSection>
                <CardListSmall>                      
                    {ProjectData.map(project => 
                        <PortfolioCard key={project.id} project={project} />
                    )}
                </CardListSmall>
            </BodySection>
        </section>
    )
}