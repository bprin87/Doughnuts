import './Contact.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {Link} from "react-router-dom"
import { useState } from 'react';

function Contact() {

    const [inputValue, setInputValue] = useState('');

    // clear input value after email address submitted
    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue('');
    }

    // update input value 
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (

       <>
            <Navigation/>
            <main id='contact'>
                <section className='hero-contact'>
                    <div className='hero-contact-content'>
                        <h1>Doughnut Addiction Hotline</h1>
                    </div>
                </section>
                <section className='contact-us'>
                    <h2>Contact Us</h2>
                    <p>We’re pretty busy baking doughnuts – up to our eyeballs in cookie crumbs and caramel sauce – 
                    but you can always give us a call to find out more. Simply check which store you want and pick 
                    up the phone to have a chat, or better yet, get in touch by filling in our <strong><a><Link to="/wholesale">form</Link></a></strong> and we’ll get 
                    back to you.</p>

                    <article className='locations-card'>
                        <ul>
                            <li><h3>Manchester</h3><i className="bi bi-telephone"><a className='tel'>0161 2834257</a></i></li>
                            <li><h3>Stockport</h3><i className="bi bi-telephone"><a className='tel'>0161 2834258</a></i></li>
                            <li><h3>Bolton</h3><i className="bi bi-telephone"><a className='tel'>0161 2834259</a></i></li>
                            <li><h3>Bury</h3><i className="bi bi-telephone"><a className='tel'>0161 2834260</a></i></li>
                        </ul>
                    </article>
                    
                    <h3>Don’t forget to sign up to our mailing list for special offers, too!</h3>
                    
                    <form className='mailing-list' onSubmit={handleSubmit}>
                        <input type='email' placeholder='Email Address' value={inputValue} onChange={handleChange}></input>
                        <button type='submit'>Join</button>
                    </form>
                   
                </section> 
            </main>
            <Footer/>

       </>
    )

}

export default Contact