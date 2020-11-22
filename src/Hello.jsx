import React from "react";

const Hello = () => {
  return (
    <div id="hello-container" className="ui main container">
      <div class="ui stackable two column grid">
        <div class="column">
          <img
            id="profile-img"
            src="https://scontent.fgse1-1.fna.fbcdn.net/v/t1.0-9/41841661_1784413611607957_6140001739312463872_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=nqUJ4-WLKZIAX9W2sVK&_nc_ht=scontent.fgse1-1.fna&oh=6af63e8bdbf21b3baa221d5abd05d156&oe=5FE1A2BE"
          />
        </div>

        <div class="column">
          <h1 id="about-header" className="ui header">
            About Me
          </h1>
          <br></br>
          <p>
            Hej mitt namn är Sebastian, är 23 år gammal och är en väldigt aktiv
            och social person. Jag bor i Västra Eriksberg. Är väldigt hjälpsam,
            bra på sammarbete och håller alltid mina tider. Jag är en väldigt
            öppen person och lätt att prata med, älskar att träffa nytt folk.
            <br></br> <br></br>
            Ni kan alltid lita på mig som medarbetare och jag kommer alltid
            ställa upp. Är alltid positiv oavsett om arbetet kan vara stressigt.
            Jag är en väldigt hårt arbetande person, vet att det alltid lönar
            sig då man gör sitt bästa. Ser fram emot att få komma och presentera
            mig ännu mer och lära känna er bättre.
            <br></br>
            <br></br>
            Med Vänliga Hälsningar, <br></br>
            Sebastian Niewiadomski
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hello;
