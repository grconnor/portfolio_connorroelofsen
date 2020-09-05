
import React from "react";
import { UndrawProfilePic } from "react-undraw-illustrations";

const About = () => {
    return (
        <div className="ui main container">
            <div class="ui stackable two column grid">
                <div class="column">
                    <UndrawProfilePic primaryColor='black' height='300px'  />
                </div>
                
                <div class="column">
                    <h1 id="about-header" className="ui header">About Me</h1>
                    <br></br>
                    <p>
                    Hej mitt namn är Sebastian, är 22 år gammal och är en väldigt aktiv och social person. Jag bor i Västra Eriksberg. 
                    Är väldigt hjälpsam, bra på sammarbete och håller alltid mina tider. 
                    Jag är en väldigt öppen person och lätt att prata med, 
                    älskar att träffa nytt folk. 
                                <br></br> <br></br>
                    Ni kan alltid lita på mig som medarbetare och jag kommer alltid ställa upp. 
                    Är alltid positiv oavsett om arbetet kan vara stressigt. Jag är en väldigt hårt arbetande person, 
                    vet att det alltid lönar sig då man gör sitt bästa. Ser fram emot att få komma och presentera mig ännu mer och lära känna er bättre.
                                <br></br><br></br>
                    Med Vänliga Hälsningar, <br></br> 
                    Sebastian Niewiadomski
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
