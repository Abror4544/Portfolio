import React, { useEffect } from 'react';
import Header from '../Header/Header';
import sushi from '../../assets/images/sushi.png';
import mosvektor from '../../assets/images/mosvektor.jpg';
import segway from '../../assets/images/segway.png';
import header_img from '../../assets/images/header_img.png';
import photocageimg from '../../assets/images/photocageimg.png';
import tradercamp from '../../assets/images/tradercamp.png';
import secret from '../../assets/images/secret.png';
import acrostia from '../../assets/images/acrostia.png';
import vsk from '../../assets/images/vsk.jpg';
import med from '../../assets/images/med.jpg';
import koblandin from '../../assets/images/koblandin.png';
import monolite from '../../assets/images/monolite.png';
import UzbMap from '../../assets/images/UzbMap.jpg';
import startup from '../../assets/images/startup.png';
import burgerimg from '../../assets/images/burgerimg.jpg';
import macintoshimg from '../../assets/images/macintoshimg.png';
import belli from '../../assets/images/belli.png';
import tofate from '../../assets/images/tofate.png';
import "../Main/Main.css";
import "./Portfolio.css";
import '../../assets/css/all.min.css';
import '../../assets/css/fontawesome.min.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/bootstrap-grid.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from '../Menu/Menu';

const Portfolio = (props) => {

    useEffect(() => {
        AOS.init();
    }, []);

    const show = true;
    return (
        <>
            <Menu show={show} />
            <Header show={show} />
            <section id="projects" className="projects">
                <div className="container">
                    <h2>Мои проекты</h2>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 projectsLeft">
                            <div className="projectBlockBlack" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration="1000">
                                <div className="img">
                                    <a target="_blank" rel="noreferrer" href="https://toyamasushi.ru/">
                                        <img src={sushi} alt="" /></a>
                                </div>
                                <div className="prDescription">
                                    <a target="_blank" rel="noreferrer" className="zoomHover" href="https://toyamasushi.ru/">
                                        <h3>Тояма Суши</h3>
                                    </a>
                                    <p>Вкусный магазин</p>
                                </div>
                            </div>
                            <div className="projectBlockRed" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration="1000">
                                <div className="img">
                                    <a target="_blank" rel="noreferrer" href="https://abror4544.github.io/MosVektor/"><img src={mosvektor}
                                        alt="" /></a>
                                </div>
                                <div className="prDescription">
                                    <a target="_blank" rel="noreferrer" className="zoomHover" href="https://abror4544.github.io/MosVektor/">
                                        <h3>ООО "МосВекторСтрой"</h3>
                                    </a>
                                    <p>Компания ППР услуг</p>
                                </div>
                            </div>
                            <div className="projectBlockBlack" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration="1000">
                                <div className="img">
                                    <a target="_blank" rel="noreferrer" href="https://abror4544.github.io/Segway/"><img src={segway}
                                        alt="" /></a>
                                </div>
                                <div className="prDescription">
                                    <a target="_blank" rel="noreferrer" className="zoomHover" href="https://abror4544.github.io/Segway/">
                                        <h3>Segway Anyway</h3>
                                    </a>
                                    <p>Сигвей тур</p>
                                </div>
                            </div>
                            <div className="projectBlockRed" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration="1000">
                                <div className="img">
                                    <a target="_blank" rel="noreferrer" href="https://abror4544.github.io/Fitness/"><img src={header_img}
                                        alt="" /></a>
                                </div>
                                <div className="prDescription">
                                    <a target="_blank" rel="noreferrer" className="zoomHover" href="https://abror4544.github.io/Fitness/index.html">
                                        <h3>Fitness</h3>
                                    </a>
                                    <p>Сайт тренажерного зала</p>
                                </div>
                            </div>
                            <div className="projectBlockBlack" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration="1000">
                                <div className="img">
                                    <a target="_blank" rel="noreferrer" href="https://abror4544.github.io/tofate/"><img src={tofate}
                                        alt="" /></a>
                                </div>
                                <div className="prDescription">
                                    <a target="_blank" rel="noreferrer" className="zoomHover" href="https://abror4544.github.io/tofate/">
                                        <h3>ToFate</h3>
                                    </a>
                                    <p>Интерактивное реалити шоу</p>
                                </div>
                            </div>
                            <div className="projectBlockRed" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration="1000">
                                <div className="img">
                                    <a target="_blank" rel="noreferrer" href="https://abror4544.github.io/tradercamp/"><img src={tradercamp}
                                        alt="" /></a>
                                </div>
                                <div className="prDescription">
                                    <a target="_blank" rel="noreferrer" className="zoomHover" href="https://abror4544.github.io/tradercamp/">
                                        <h3>Tradercamp</h3>
                                    </a>
                                    <p>Обучение трейдинга</p>
                                </div>
                            </div>
                            <div className="projectBlockBlack" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration="1000">
                                <div className="img">
                                    <a target="_blank" rel="noreferrer" href="https://abror4544.github.io/form/"><img src={secret}
                                        alt="" /></a>
                                </div>
                                <div className="prDescription">
                                    <a target="_blank" rel="noreferrer" className="zoomHover" href="https://abror4544.github.io/form/">
                                        <h3>Анкета</h3>
                                    </a>
                                    <p>Образец анкеты</p>
                                </div>
                            </div>
                            <div className="projectBlockRed" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration="1000">
                                <div className="img">
                                    <a target="_blank" rel="noreferrer" href="https://abror4544.github.io/Acrostia/"><img src={acrostia}
                                        alt="" /></a>
                                </div>
                                <div className="prDescription">
                                    <a target="_blank" rel="noreferrer" className="zoomHover" href="https://abror4544.github.io/Acrostia/">
                                        <h3>Acrostia</h3>
                                    </a>
                                    <p>Командное портфолио</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="projectBlockRed" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration="1000">
                                <div className="img">
                                    <a target="_blank" rel="noreferrer" href="https://vsk-express.ru/"><img src={vsk}
                                        alt="" /></a>
                                </div>
                                <div className="prDescription">
                                    <a target="_blank" rel="noreferrer" className="zoomHover" href="https://vsk-express.ru/">
                                        <h3>ВСК Экспресс</h3>
                                    </a>
                                    <p>Лендинг - выдача гарантии</p>
                                </div>
                            </div>
                            <div className="projectBlockBlack" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration="1000">
                                <div className="img">
                                    <a target="_blank" rel="noreferrer" href="https://medkrovati-pro.ru/"><img src={med}
                                        alt="" /></a>
                                </div>
                                <div className="prDescription">
                                    <a target="_blank" rel="noreferrer" className="zoomHover" href="https://medkrovati-pro.ru/">
                                        <h3>Реабилитация ПРО</h3>
                                    </a>
                                    <p>Медицинская компания</p>
                                </div>
                            </div>
                            <div className="projectBlockRed" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration="1000">
                                <div className="img">
                                    <a target="_blank" rel="noreferrer" href="https://koblandinclinic.kz/"><img src={koblandin}
                                        alt="" /></a>
                                </div>
                                <div className="prDescription">
                                    <a target="_blank" rel="noreferrer" className="zoomHover" href="https://koblandinclinic.kz/">
                                        <h3>Dr.Koblandin Clinic</h3>
                                    </a>
                                    <p>Клиника блефаропластика</p>
                                </div>
                            </div>
                            <div className="projectBlockBlack" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration="1000">
                                <div className="img">
                                    <a target="_blank" rel="noreferrer" href="https://abror4544.github.io/Monolite/"><img src={monolite}
                                        alt="" /></a>
                                </div>
                                <div className="prDescription">
                                    <a target="_blank" rel="noreferrer" className="zoomHover" href="https://abror4544.github.io/Monolite/">
                                        <h3>Монолит</h3>
                                    </a>
                                    <p>Компания создает здании я для них сайты</p>
                                </div>
                            </div>
                            <div className="projectBlockRed" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration="1000">
                                <div className="img">
                                    <a target="_blank" rel="noreferrer" href="https://abror4544.github.io/belli/"><img src={belli}
                                        alt="" /></a>
                                </div>
                                <div className="prDescription">
                                    <a target="_blank" rel="noreferrer" className="zoomHover" href="https://abror4544.github.io/belli/">
                                        <h3>Belli</h3>
                                    </a>
                                    <p>Маркетинговые стратегии</p>
                                </div>
                            </div>
                            <div className="projectBlockBlack" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration="1000">
                                <div className="img">
                                    <a target="_blank" rel="noreferrer" href="https://abror4544.github.io/StartUp/"><img src={startup}
                                        alt="" /></a>
                                </div>
                                <div className="prDescription">
                                    <a target="_blank" rel="noreferrer" className="zoomHover" href="https://abror4544.github.io/StartUp/">
                                        <h3>StartUp</h3>
                                    </a>
                                    <p>Стартап лендинг</p>
                                </div>
                            </div>
                            <div className="projectBlockRed" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration="1000">
                                <div className="img">
                                    <a target="_blank" rel="noreferrer" href="https://abror4544.github.io/Food100/"><img src={burgerimg}
                                        alt="" /></a>
                                </div>
                                <div className="prDescription">
                                    <a target="_blank" rel="noreferrer" className="zoomHover" href="https://abror4544.github.io/Food100/">
                                        <h3>Food100</h3>
                                    </a>
                                    <p>Фастфуд магазин</p>
                                </div>
                            </div>
                            <div className="projectBlockBlack" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration="1000">
                                <div className="img">
                                    <a target="_blank" rel="noreferrer" href="https://abror4544.github.io/Macintosh/index.html"><img src={macintoshimg}
                                        alt="" /></a>
                                </div>
                                <div className="prDescription">
                                    <a target="_blank" rel="noreferrer" className="zoomHover" href="https://abror4544.github.io/Macintosh/index.html">
                                        <h3>Macintosh</h3>
                                    </a>
                                    <p>Сайт лендинга дизайнерской компании</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main id="contact" className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12 col-12 messageCol" data-aos="zoom-in" data-aos-offset="-200"
                            data-aos-easing="ease-in-sine">
                            <h2>Оставить сообщение</h2>
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-6 infoBlock">
                                        <input type="text" className="shortInfo" placeholder="Имя*" required />
                                        <input type="email" className="shortInfo" placeholder="Почта*" required />
                                        <input type="text" className="shortInfo" placeholder="Заголовок*" required />
                                    </div>
                                    <div className="col-lg-6 messageBlock">
                                        <textarea className="message" placeholder="Сообщение*" required></textarea>
                                    </div>
                                </div>
                                <button className="sendBtn">Отправить</button>
                            </form>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12 infoCol" data-aos="zoom-in" data-aos-offset="-200"
                            data-aos-easing="ease-in-sine">
                            <div className="locationBlock">
                                <i className="fas fa-home-lg-alt"></i>
                                <div className="descTitle">
                                    <h4>Местоположение</h4>
                                    <p>г.Ташкент, Юнусабадский р-н 16/19/76</p>
                                </div>
                            </div>
                            <div className="emailBlock">
                                <i className="fas fa-envelope"></i>
                                <div className="descTitle">
                                    <h4>Почта</h4>
                                    <p>corporationsystems7@gmail.com</p>
                                </div>
                            </div>
                            <div className="phoneBlock">
                                <i className="fad fa-phone-alt"></i>
                                <div className="descTitle">
                                    <h4>Телефон</h4>
                                    <p>+998 97 432-45-44</p>
                                </div>
                                <wrapper>
                                    <div className="dws">
                                        <div className="pulse">
                                            <a href="tel: +998974324544" className="text">Позвонить</a>
                                            <div className="phone"><i className="fa fa-phone" aria-hidden="true"></i></div>

                                        </div>
                                    </div>
                                </wrapper>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Portfolio;