import { useState } from 'react'

import './Home.css'
import Navigation from '../components/Navigation.jsx'
import Footer from '../components/Footer.jsx'

import donut1 from '../assets/images/donut1.png'
import bakery from '../assets/images/bakery.png'
import bakery2 from '../assets/images/bakery2.png'
import bakery3 from '../assets/images/bakery3.png'
import delivery from '../assets/images/delivery.png'
import wedding from '../assets/images/wedding.png'
import xmas from '../assets/images/xmas.png'
import birthday from '../assets/images/birthday.png'

const bakeryGallery = [{

    src: bakery,
    alt: 'picture of the inside of a donut shop'
}, 
{   src: bakery2,
    alt: 'picture of the inside of a donut shop'

}, {
    src: bakery3,
    alt: 'picture a baker baking donuts in a kitchen'
}];

function Home() {

    // set index to start from 0
    const[index, setIndex] = useState(0);

    // click next to go through length of the gallery
    const nextImage = index < bakeryGallery.length - 1;

    // click previous to go to previous image
    const previousImage = index > 0

    // go to next imgage
    const handleNextImage = () => {
        if (nextImage) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    // go to previous imagw
    const handlePreviousImage = () => {
        if (previousImage) {
            setIndex(index - 1);
        } else {
            setIndex(0);
        }
    }

    let gallery = bakeryGallery[index];

    return (
        <>
            <Navigation/>
            <main>
                <section className="hero-home">
                    <div className="hero-home-content">
                        <h1>Doughnuts Made <span className='different'>Different</span></h1>
                        <p>Dipped, dusted, and deep-filled doughnuts. Made by hand in Manchester, delivered across England, Wales, and Scotland!</p>
                    </div>
                    <img className='donut1' src={donut1} alt='picture of donuts flying towards the screen'></img>
                </section>

                <section className='bakery'>
                    <div className='bakery-content'>
                        <h2>Take a peek inside our Manchester bakery...</h2>
                        <p>We spend our time baking handmade doughnuts for you to fill your hole with. Take a peek inside our Manchester bakery to see how they’re made.</p>
                    </div>
                    <aside className='gallery-container'>
                        <i className="bi bi-chevron-left" onClick={handlePreviousImage}></i>
                        <img className='bakery-image' src={gallery.src} alt={gallery.alt}></img>
                        <i className="bi bi-chevron-right" onClick={handleNextImage}></i>
                    </aside>
                    <div className='button-container'>
                        <a href='#'><button>Learn more</button></a>
                    </div>
                </section>

                <section className='locations'>
                    <h2>You can find our delish Ds in more places than ever!</h2>
                    <p>Obey your rumble and tuck in at any of our Manchester, Stockport, Bolton or Bury stores - either box it up and go, or stick around with a coffee, it’s totally up to you. </p>
                    <article className='locations-card'>
                        <ul>
                            <li><h3>Manchester</h3><i className="bi bi-telephone"><a className='tel'>0161 2834257</a></i></li>
                            <li><h3>Stockport</h3><i className="bi bi-telephone"><a className='tel'>0161 2834258</a></i></li>
                            <li><h3>Bolton</h3><i className="bi bi-telephone"><a className='tel'>0161 2834259</a></i></li>
                            <li><h3>Bury</h3><i className="bi bi-telephone"><a className='tel'>0161 2834260</a></i></li>
                        </ul>
                    </article>
                    <article className='delivery'>
                        <p>Fear not! Doughnuts Delivered lets you get your favourite doughnut flavours right to your door!</p>
                        <img src={delivery}></img>
                        <div className='button-container order-button'>
                            <a href='#'><button className='order'>Order now</button></a>
                        </div>
                    </article>
                </section>

                <section className='celebrations'>
                    <h2>Celebrate with something different</h2>
                    <p>Whether you’re celebrating a birthday, a wedding or just making it through to Friday, say it with fresh doughnuts. 
                    Order doughnuts online for events and occasions or pick up something special from our stores just for you - we even hand-make vegan doughnuts.</p>
                    <ul>
                        <li><img src={wedding}></img></li>
                        <li><img src={xmas}></img></li>
                        <li><img src={birthday}></img></li>
                    </ul>
                    <div className='button-container celebrate'>
                        <a href='#'><button className='celebrate-button'>Celebrate with us</button></a>
                    </div>
                    
                </section>
            </main>
            <Footer/>
        </>
    );
   

}

export default Home;