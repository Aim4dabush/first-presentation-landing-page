import React from "react";
import "./Zygor.css";

function Zygor() {
  return (
    <div id="zygor-box">
      <img src={process.env.PUBLIC_URL + "/zygor-mascot.png"} alt="mascot" />
      <h2>Zygor's Leveling Guide 1-60</h2>
      <p id="advertisement">
        I recommend trying <a href="/">Zygor's Leveling Guide</a> if you are
        still leveling your character or you just <br />
        started a new alt. The guide is in a small window on your main screen
        in-game. All the detail <br />
        that you need to complete the quest is included. You'll never have to
        switch back to a website <br />
        or even the in-game main map to see where you have to go or what's next.
      </p>
      <p>I use Zygor's guide for leveling, and I highly recommend it.</p>
      <a href="/" id="link">
        &#8811; Click here to visit Zygor's 1-60 Leveling Guide &#8810;
      </a>
    </div>
  );
}

export default Zygor;
