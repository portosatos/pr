import "../index.css"
import Footer from "./footer/footer";
import Nav from "./nav/Nav"


function OurHistory(){
    return(
        <div className="OurHistory">
            <Nav/>
            <header className="OurHistory-header">
                <p>
                [ OUR STORY ]
                </p>
            </header>
            <section className="OurHistory-section">
                <img src="https://static.wixstatic.com/media/4509de_8ae58ba3e2d2447b9d6c72e69157504b~mv2.jpg/v1/fill/w_575,h_383,fp_0.51_0.77,q_80,usm_0.66_1.00_0.01,enc_auto/4509de_8ae58ba3e2d2447b9d6c72e69157504b~mv2.jpg" alt="" />
                <div className="OurHistory-section1-text">
                    <p className="main-page__section-3-title">
                        nueva. beginnings.
                    </p>
                    <p className="main-page__section-3-text">
                    nueva. was founded as an ode to the late summer sun and bespoke creation. We are three brothers with a vision to create a genuinely authentic and premium sunglasses label that celebrates the simple joys of surf, skate, film and art culture. Those with less focus on individual success and rather those with a passion for engagement.
                    </p>
                    <p className="main-page__section-3-text">
                    Carefully designed with your favourite locale in mind and a nod to everyday experience, our products are made for all the elements. We have tried and tested our vision in all conditions, and pride ourselves in making ordinary experiences extraordinary. With classic, yet timeless styles, we aspire to form the basis for a unique movement.
                    </p>
                </div>
            </section>
            <section className="OurHistory-section">
                <div className="OurHistory-section1-text">
                    <p className="main-page__section-3-title">
                    inspiring our generation.
                    </p>
                    <p className="main-page__section-3-text">
                    We intend on building this platform into more than just an eyewear brand. The vision remains to combine all forms of creativity, lifestyle, fashion and daily life into something more thoughtful. Something that allows the un-established to coexist with the established. Stretching the boundaries of creation.
                    </p>
                    <p className="main-page__section-3-text">
                    For us, nueva. is all about inspiring our generation and providing something of substance whilst remaining gentle to the earth. Brought by us to you as a group of like-minded individuals from a lick of subcultures.
                    </p>
                    <p className="main-page__section-3-text">
                    nueva. is meant to be enjoyed by all.
                    </p>
                    <p className="main-page__section-3-text">
                    Thanks for stopping by.
                    </p>
                </div>
                <img src="https://static.wixstatic.com/media/e8a706_ee333356e7af455a9b80ead9ec81b8f9~mv2.jpg/v1/fill/w_575,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_7785.jpg" alt="" />
            </section>
            <Footer/>
        </div>
    )
}

export default OurHistory;