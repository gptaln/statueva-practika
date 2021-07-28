import React from 'react'
import landingImage from '../../../assets/img/len.jpg'
import storeImage from '../../../assets/img/store.jpg'
import landing1Image from '../../../assets/img/len1.jpg'

export const AboutContent: React.FC = () => {

    return (
        <div className="header">
            <div className="header__title">Портфолио работ</div>
            <div className="projects">
                <div className="project">
                    <div className="projects__name">Лендинг</div>
                    <img className="projects__photo" src={landingImage} alt=""/>
                    <p className="projects__info">
                        Лендинг по ремонту квартир Описание - У лукоморья дуб зелёный; Златая
                        цепь на дубе том: И днём и ночью кот учёный Всё ходит по цепи кругом;
                        Идёт направо — песнь заводит, Налево — сказку говорит. Там чудеса: там
                        леший бродит, Русалка на ветвях сидит; Там на неведомых дорожках Следы
                        невиданных зверей;
                    </p>
                </div>
                <div className="project">
                    <div className="projects__name">Интернет-магазин</div>
                    <img className="projects__photo" src={storeImage} alt=""/>
                    <p className="projects__info">
                        Магазин продажи продуктов Описание - У лукоморья дуб зелёный; Златая
                        цепь на дубе том: И днём и ночью кот учёный Всё ходит по цепи кругом;
                        Идёт направо — песнь заводит, Налево — сказку говорит. Там чудеса: там
                        леший бродит, Русалка на ветвях сидит; Там на неведомых дорожках Следы
                        невиданных зверей;
                    </p>
                </div>
                <div className="project">
                    <div className="projects__name">Лендинг</div>
                    <img className="projects__photo" src={landing1Image} alt=""/>
                    <p className="projects__info">
                        Лендинг автосервиса Описание - У лукоморья дуб зелёный; Златая цепь на
                        дубе том: И днём и ночью кот учёный Всё ходит по цепи кругом; Идёт
                        направо — песнь заводит, Налево — сказку говорит. Там чудеса: там леший
                        бродит, Русалка на ветвях сидит; Там на неведомых дорожках Следы
                        невиданных зверей;
                    </p>
                </div>
            </div>
        </div>
    )

}