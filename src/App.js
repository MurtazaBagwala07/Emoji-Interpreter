import React, { useState } from "react";
import "./styles.css";

var color = "green";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "🤑": "Money-Mouth Face",
  "😚": "Kissing Face with Closed Eyes"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    //console.log(meaning);
    if (meaning === undefined) {
      meaning = "We dont have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    //console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        Emoji <span style={{ color: color }}>Identifier</span>
      </h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emojis We Know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "3rem", padding: "0.4rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <div className="footer">
        <ul className="list">
          <li className="ft">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/murtaza-bagwala-2850341bb"
            >
              Linked in
            </a>
          </li>
          <li className="ft">
            <a target="_blank" href="https://twitter.com">
              Twitter
            </a>
          </li>
          <li className="ft">
            <a target="_blank" href="https://github.com/MurtazaBagwala07/">
              Github
            </a>
          </li>
          <li className="ft">
            <a target="_blank" href="https://portofolio-murtaza.netlify.app/">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
