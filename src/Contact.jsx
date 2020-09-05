
import React from "react";
import { UndrawAddUser } from "react-undraw-illustrations";

const Contact = () => {
    return (
        <div className="ui main container">
            <div class="ui stackable two column grid">
                <div class="column">
                    <UndrawAddUser primaryColor='black' height='300px'  />
                </div>
                
                <div class="column">
                    <h1 id="contact-header" className="ui header">Contact</h1>
                    <p>
                    Namn: Sebastian Niewiadomski                <br></br>
                    Födelseår: 1997-10-01                       <br></br>
                    Address: Styrfarten 17, 417 64 Göteborg     <br></br>
                    Telefonnummer: 0769115199                   <br></br>
                    Email: sebbe132132@gmail.com	            
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
