import React from "react";
import BodySection from "../../components/section/BodySection";
import TitleSection from "../../components/section/SectionTitle";
import CardlistLarge from "../../components/card/CardListLarge"
import ArticleData from "../../data/ArticleData";
import ArticleCard from "./ArticleCard"

export default function Article() {
    return (
        <section id="article">
            <BodySection>
                <TitleSection>
                    Articles
                </TitleSection>
                <CardlistLarge>                      
                    {ArticleData.map(article => 
                        <ArticleCard key={article.id} article={article} />
                    )}
                </CardlistLarge>
            </BodySection>
        </section>
    )
}