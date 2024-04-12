import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import './Doughnuts.css'
import selection1 from '../assets/images/selection1.jpg'
import selection2 from '../assets/images/selection2.jpg'
import selection3 from '../assets/images/selection3.jpg'
import selection4 from '../assets/images/selection4.jpg'
import selection5 from '../assets/images/selection5.jpg'
import selection6 from '../assets/images/selection6.jpg'
import selection7 from '../assets/images/selection7.jpg'
import selection8 from '../assets/images/selection8.jpg'


function Donuts() {

    return (
        <>
            <Navigation/>
            <main id="doughnuts">
                <h1>Our Menu</h1>
                <p>Find our extensive range below</p>
                <ul>
                    <li>
                        <figure>
                            <h3>Original</h3>
                            <p>The one that started it all. Our famous caramel and white chocolate dougnut.</p>
                        </figure>
                        <img src={selection1} alt="caramel filled doughnut"></img>
                    </li>
                    <li>
                        <figure>
                            <h3>Fresh Strawberry</h3>
                            <p>The original topped with strawberry jam and shaved almonds.</p>
                        </figure>
                        <img src={selection2} alt="strawberry filled doughnut"></img>
                    </li>
                    <li>
                        <figure>
                            <h3>Biscoff Cookie</h3>
                            <p>Not in the mood for a doughnut? Why not try the ultimate Biscoff cookie instead!</p>
                        </figure>
                        <img src={selection3} alt="biscoff cookie"></img>
                    </li>
                    <li>
                        <figure>
                            <h3>Biscoff Doughnut</h3>
                            <p>More doughnut, less cookie. Tastes just as good!</p>
                        </figure>
                        <img src={selection4} alt="biscoff doughnut"></img>
                    </li>
                    <li>
                        <figure>
                            <h3>Coffee</h3>
                            <p>If you’re a coffee person then this is the doughnut for you.</p>
                        </figure>
                        <img src={selection5} alt="coffee flavoured doughnut"></img>
                    </li>
                    <li>
                        <figure>
                            <h3>Lemon Drizzle</h3>
                            <p>Another original but with a lemon twist.</p>
                        </figure>
                        <img src={selection6} alt="lemon drizzle doughnut"></img>
                    </li>
                    <li>
                        <figure>
                            <h3>Chocolate Hazelnut</h3>
                            <p>Nutty chocolate with a caramel centre.</p>
                        </figure>
                        <img src={selection7} alt="chocolate hazelnut doughnut"></img>
                    </li>
                    <li>
                        <figure>
                            <h3>Apple Crumble</h3>
                            <p>Iced topping with caramel sauce and apples mixed with cinnamon.</p>
                        </figure>
                        <img src={selection8} alt="apple crumble doughnut"></img>
                    </li>
                </ul>
            </main>
            <Footer/>
        </>
    )

}

export default Donuts