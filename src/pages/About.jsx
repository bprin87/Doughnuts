import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import './About.css'

function About() {

    return (
        <>
            <Navigation/>

            {/* Main Content */}
            <main>

                {/* Hero */}
                <section className="hero-about">
                    <div className="hero-about-content">
                        <h1>Our Story</h1>
                    </div>
                </section>

                <section className="about">
                    <h2>About Us</h2>
                    <p>Down to your final quid? The obvious thing to do is to start making and selling delicious doughnuts. 
                       Well, that’s what we did back in 2015 anyway.</p>
                    <p>John Simpson and Harriet Jones kicked things off in mum’s kitchen with a tenner and a wok. Before they knew it, 
                       they had themselves a micro-bakery and their own coffee and doughnut shop in Manchester. We’re not talking your 
                       usual doughnuts either, oh no. These doughnuts are handmade, coming rough and ready with all manner of mouth-watering 
                       toppings. We’ve even got vegan doughnuts, because we’ve got your backs, you vegan champs. With stores in the city 
                       centres of Manchester, Stockport, Bolton and Bury, these are doughnuts made different. Get yourself along to one 
                       of our doughnut shops for the full dipped, dusted and deep-filled experience. You’re in for a treat!
                    </p>
                </section>
            </main>
            <Footer/>
        </>
    )

}

export default About