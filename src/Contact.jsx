
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
                    <br></br>
                    <p>
                    <b>Namn:</b> Sebastian Niewiadomski                <br></br>
                    <b>Födelseår:</b> 1997-10-01                       <br></br> <br></br>
                    <b>Address:</b> Styrfarten 17 Eriksberg, 417 64 Göteborg     <br></br> <br></br>
                    <b>Telefonnummer: </b>0769115199                   <br></br>
                    <b>Email:</b> sebbe132132@gmail.com	            
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
