import { Link } from "react-router-dom";
import Card from "../../components/MainPageCard";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/Header";
// import Journal from "../../components/journal";

function Main() {
    return (
        <div>
            <Header />
            <section className="main-page__section-1">
                <img className="main-page__section-1-img" src="https://static.wixstatic.com/media/4e3a7d_003bc92522e6409fb47ddbdfbae9da19~mv2.jpg/v1/fill/w_618,h_618,fp_0.34_0.63,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_9420_JPG.jpg" alt="" />
                <div>
                    <p className="main-page__section-1-title">
                        AUSTRALIAN DESIGN. GLOBAL INSPIRATION
                    </p>
                    <p className="main-page__section-1-text">
                        In the arrival of a new year, in the late summer sun, three brothers found <br /> themselves in the south-west of Western Australia.
                        <br />
                        <br />

                        With a vision to create authentic and premium sunglasses that celebrate the <br /> simple joys of surf, skate, film and art culture, enjoyed in the summer sun, nueva. <br /> was created.
                        <br />
                        <br />

                        With classic, yet timeless styles, as well as high-quality polarised lenses, we aspire <br /> to form the basis of a unique movement. We pride ourselves on making ordinary <br /> experiences extraordinary.
                        <br />
                        <br />
                        nueva. is about inspiring a new generation and providing something of substance, <br /> whilst remaining gentle to the earth. nueva. sunglasses are made to be enjoyed.
                    </p>
                    <button className="main-page__section-1-button">
                        [ shop ]
                    </button>
                </div>
            </section>
            <section className="main-page__section-2">
                <p className="main-page__section-2-title">
                    <Link to="/OurHistory">
                    [ OUR STORY ]
                    </Link>
                </p>
            </section>

            <section className="main-page__section-3">
                <p className="main-page__section-3-ttitle">
                [JOURNAL]
                </p>
                <div className="main-page__section-3-cards">
                <Card
                        imageUrl="https://static.wixstatic.com/media/e8a706_ed5ab337136b4ec89de4e3302635d766~mv2.jpg/v1/fill/w_426,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e8a706_ed5ab337136b4ec89de4e3302635d766~mv2.jpg"
                        title="nueva. look book: spring 2021 edition."
                        description="Brody wears tumult. in stained mosaic. One of our best sellers,  tumult. boasts an exciting cat-eye flare with an extra kick to the likes..."
                    />
                    <Card
                        imageUrl="https://static.wixstatic.com/media/4e3a7d_d2d2b9257fea48b98a407a513687f9c3~mv2.jpg/v1/fill/w_426,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4e3a7d_d2d2b9257fea48b98a407a513687f9c3~mv2.jpg"
                        title="people of nueva.
                        Catch up with acoustic roots musician, Callum Vincent."
                        description="We recently caught up with local West Australian acoustic roots musician, Callum Vincent to talk about his soothing vocals, the stories..."
                    />
                    <Card
                        imageUrl="https://static.wixstatic.com/media/4e3a7d_0c8014b4b3304a228e1de199a0493d04~mv2.jpg/v1/fill/w_426,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4e3a7d_0c8014b4b3304a228e1de199a0493d04~mv2.jpg"
                        title="the benefits of polarised sunglasses."
                        description="Wearing polarised sunglasses is a great way to improve vision quality and reduce the harmful effects of UV rays on your eyes. All nueva...."
                    />
                </div>
                    <button className="section-3__button">
                        <Link to={"/Journal"} className="main-page__section-1-button button butttttttton">
                            ALL JOURNALS
                        </Link>
                    </button>
            </section>
            <Footer />
        </div>
    );
}

export default Main;
