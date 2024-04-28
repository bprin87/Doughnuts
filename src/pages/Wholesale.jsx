import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import './Wholesale.css'
import {useRef, useState} from 'react';

function Wholesale() {

    // reference to for the form element
    const enquiry = useRef(null);

    // function to scroll to form element
    const scrollToForm = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',
        });
    };

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
            <main id="wholesale">
                <section className="hero-wholesale">
                    <div className="hero-wholesale-content">
                        <h1>Stock Our Stuff</h1>
                    </div>
                </section>

                <div className='button-container'>
                    <a><button onClick={() => scrollToForm(enquiry)} className='order'>Join Us<i class="bi bi-chevron-double-down"></i></button></a>
                </div>

                <section className="join-us">
                    <h2>Wholesale Doughnuts</h2>
                    <p>We’ve already got a number of stockists outside of our stores – 
                    including coffee shops and eateries – so why not join the club? You 
                    can have our bright, bold and curvaceous buns to add to your store, 
                    offering your customers something extra when you bulk buy wholesale 
                    doughnuts. Whether you need bulk doughnuts or a regular wholesale 
                    doughnut supplier, chuck your details in our form and we’ll get back 
                    to you. We’re knee-deep in batter at the moment, but we’ll be in touch 
                    about the doughnuts wholesale process.</p>

                    <h3>Enquire Now</h3>

                    <form ref={enquiry} onSubmit={handleSubmit}>
                        <ul>
                            <li className="input">
                                <label>Name</label>
                                <input type="text" required></input>
                            </li>
                            <li className="input">
                                <label>Company</label>
                                <input type="text" required></input>
                            </li>
                            <li className="input">
                                <label>Phone Number</label>
                                <input type="number" min={10} required></input>
                            </li>
                            <li className="input">
                                <label>Email Address</label>
                                <input type="email" required></input>
                            </li>
                            <li className="enquiry">
                                <label>Enquiry</label>
                                <textarea required></textarea>
                            </li>
                        </ul>
                        <div className='button-container'>
                            <a><button type="submit" className='order' onChange={handleChange}>Submit</button></a>
                        </div>
                    </form>

                </section>
            </main>
            <Footer/>
        </>
    )

}

export default Wholesale