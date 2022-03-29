import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div id="sidebar-content">
      <div id="ads">ads</div>
      <div id="shadowlands-gathering">
        <h2>Shadowlands Farming Guides</h2>
        <h3>Herbs</h3>
        <ul>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Herbs/deathblossom-s.jpg"}
                alt="death-blossom"
              />
            </a>
            <a href="/">Death Blossom</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Herbs/risingglory-s.jpg"}
                alt="rising-glory"
              />
            </a>
            <a href="/">Rising Glory</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Herbs/marrowroot-s.jpg"}
                alt="marrowroot"
              />
            </a>
            <a href="/">Marrowroot</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Herbs/vigilstorch-s.jpg"}
                alt="vigil-torch"
              />
            </a>
            <a href="/">Vigil's Torch</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Herbs/widowbloom-s.jpg"}
                alt="widowbloom"
              />
            </a>
            <a href="/">Widowbloom</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Herbs/nightshade-s.jpg"}
                alt="night-shade"
              />
            </a>
            <a href="/">Nightshade</a>
          </li>
        </ul>
        <h3>Ores</h3>
        <ul>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Ores/laestrite-ore-s.jpg"}
                alt="laestrite"
              />
            </a>
            <a href="/">Laestrite Ore</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Ores/solenium-ore-s.jpg"}
                alt="solenium"
              />
            </a>
            <a href="/">Solenium Ore</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Ores/oxxein-ore-s.jpg"}
                alt="oxxein"
              />
            </a>
            <a href="/">Oxxein Ore</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Ores/phaedrum-ore-s.jpg"}
                alt="phaedrum"
              />
            </a>
            <a href="/">Phaedrum Ore</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Ores/sinvyr-ore-s.jpg"}
                alt="sinvyr"
              />
            </a>
            <a href="/">Sinvyr Ore</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Ores/elethium-ore-s.jpg"}
                alt="elethium"
              />
            </a>
            <a href="/">Elethium Ore</a>
          </li>
        </ul>
        <h3>Cloths</h3>
        <ul>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Cloth/shrouded-cloth-s.jpg"}
                alt="shrouded-cloth"
              />
            </a>
            <a href="/">Shrouded Cloth</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Cloth/lightless-silk-s.jpg"}
                alt="lightless-silk"
              />
            </a>
            <a href="/">Lightless Silk</a>
          </li>
        </ul>
        <h3>Leathers</h3>
        <ul>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Leather/desolate-leather-s.jpg"}
                alt="desolate-leather"
              />
            </a>
            <a href="/">Desolate Leather</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Leather/pallid-bone-s.jpg"}
                alt="pallid-bone"
              />
            </a>
            <a href="/">Pallid Bone</a>
          </li>
          <li>
            <a href="/">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/Leather/heavy-desolate-leather-s.jpg"
                }
                alt="heavy-desolate-leather"
              />
            </a>
            <a href="/">Heavy Desolate Leather</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Leather/callous-hide-s.jpg"}
                alt="callous-hide"
              />
            </a>
            <a href="/">Callous Hide</a>
          </li>
          <li>
            <a href="/">
              <img
                src={
                  process.env.PUBLIC_URL + "/Leather/heavy-callous-hide-s.jpg"
                }
                alt="heavy-callous-hide"
              />
            </a>
            <a href="/">Heavy Callous Hide</a>
          </li>
        </ul>
        <h3>Meat</h3>
        <ul>
          <li>
            <a href="/">
              <img
                src={
                  process.env.PUBLIC_URL + "/Meat/creeping-crawler-meat-s.jpg"
                }
                alt="shrouded-cloth"
              />
            </a>
            <a href="/">Creeping Crawler Meat</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Meat/tenebrous-ribs-s.jpg"}
                alt="tenebrous-ribs"
              />
            </a>
            <a href="/">Tenebrous Ribs</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Meat/raw-seraphic-wing-s.jpg"}
                alt="raw-seraphic-wing"
              />
            </a>
            <a href="/">Raw Seraphic Wing</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Meat/phantasmal-haunch-s.jpg"}
                alt="sphantasmal-haunch"
              />
            </a>
            <a href="/">Phantasmal Haunch</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Meat/shadowy-shank-s.jpg"}
                alt="shadowy-shank"
              />
            </a>
            <a href="/">Shadowy Shank</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/Meat/aethereal-meat-s.jpg"}
                alt="aethereal-meat"
              />
            </a>
            <a href="/">Aethereal Meat</a>
          </li>
        </ul>
      </div>
      <div id="feedback">
        <h2>Feedback</h2>
        <p>
          You can <a href="/">send feedback</a> about any <br />
          guide on the site! Help me improve the <br />
          website! It really helps a lot! (typos, <br />
          errors, wrong material numbers)
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
