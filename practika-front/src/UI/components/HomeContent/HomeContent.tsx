import React from 'react'
import telegramImage from '../../../assets/img/telegram.svg'
import whatsappImage from '../../../assets/img/whatsapp.svg'
import instagramImage from '../../../assets/img/instagram.svg'
import {Modal} from '../common/Modal/Modal'
import avatar from '../../../assets/img/avatar.jpg'
import {ContactsForm} from './ContactsForm/ContactsForm'

export const HomeContent: React.FC = () => {

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">

                    <div className="header__title">Статуева Алина Сергеевна студентка БВТ1905</div>

                    <div className="header__subtitle">
                        Я полноценный веб-разработчик с 5-летним профессиональным опытом. Сфера
                        моей работы - большая часть внешнего интерфейса: HTML / CSS / JS,
                        создание одностраничных приложений, разработка веб-приложений с
                        использованием современных подходов.Также опыт написания сервера на
                        NodeJS. Я доступна для удаленного общения, сотрудничества и интересных
                        проектов. Если вы хотите что-то построить вместе, свяжитесь со мной.
                    </div>

                    <div className="header__text">Связь со мной!</div>
                    <div className="header__inner-1">

                        <div className="header__link">
                            <div className="social__link">
                                <a href="#" className="header__links">
                                    <img className="social__img" src={telegramImage} alt="telegram" />
                                </a>
                                <a href="#" className="header__links">
                                    <img className="social__img" src={whatsappImage} alt="whatsapp" />
                                </a>
                                <a href="#" className="header__links">
                                    <img className="social__img" src={instagramImage} alt="instagram" />
                                </a>
                            </div>
                            <div className="contacts__link">
                                <a className="phone" href="tel: +89778008768">8(977)800-87-68</a>
                                <a href="mailto:gptaln@yandex.ru" className="mail">gptaln@yandex.ru</a>
                            </div>
                        </div>

                        <Modal title="Отправка собщения" btnText="Отправить сообщение">
                            <ContactsForm/>
                        </Modal>

                    </div>
                </div>
                <div className="header__photo">
                    <img className="header__img" src={avatar} alt="avatar" />
                </div>
            </div>
        </div>
    )

}