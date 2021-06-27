import React from 'react';
import {FiMail} from 'react-icons/fi';
import '../../styles/contact.css';

export default function Contact () {
    return (
        <>
            <div>
                <div className="container-main"> 
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div className="container-contact">
                            <div className="container">
                                <FiMail size="15%" className="name"/>
                                <h1 className="name">Contact Us</h1>
                            </div>
                            <form 
                                method="post"
                                name="Contact Me"   
                                data-netlify="true"
                                onSubmit="submit"
                                className="form"
                            >
                                <input type="hidden" name="form-name" value="Contact Me"/>

                                <label className="name" for="name">
                                    Name
                                    <input type="text" id="name" name="name" placeholder="Your Name"/>
                                </label>
                                <label className="name" for="email">
                                    E-mail
                                    <input type="text" id="email" name="email" placeholder="Your E-mail"/>
                                </label>
                                <label className="name" for="Message">
                                    Message
                                    <textarea type="text" id="message" name="message" rows="5" placeholder="Enter a Message"/>
                                </label>

                                <div className="container">
                                    <button className='btn'>Send</button>
                                </div>
                            </form>
                        </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div> 
            </div>
        </>
    )
}
