import React, { useState } from 'react';
import './App.css';
// import Joke from './Joke.js';

function App() {
  const [joke, setJoke] = useState(null);

  function fetchJoke() {
    fetch('https://icanhazdadjoke.com', { headers: {'Accept': 'application/json'} })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Something went wrong...');
      }
    }).then(data => {
      setJoke(data);
    });
  }

  return(
    <div className="container">
      <button className="jokeButton" onClick={fetchJoke}>Get New Dad Joke</button>
      {joke && <div className="joke">{joke.joke}</div>}
    </div>
  )
}

export default App;







// import React from 'react';
// import './App.css';
// import Joke from './Joke.js';
//
// const displayEmojiName = event => alert(event.target.id);
// const emojis = [
//   {
//     emoji: "😀",
//     name: "grinning face"
//   },
//   {
//     emoji: "🎉",
//     name: "party popper"
//   },
//   {
//     emoji: "💃",
//     name: "woman dancing"
//   }
// ];
//
// function App() {
//   const greeting = "greeting";
//   const displayAction = false;
//
//   return(
//     <div className="container">
//       <h1 id={greeting}>Hello, World</h1>
//       {displayAction && <p>I am writing in JSX</p>}
//       <ul>
//         {
//           emojis.map(emoji => (
//             <li key={emoji.name}>
//               <button
//                 onClick={displayEmojiName}
//               >
//                 <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
//               </button>
//             </li>
//           ))
//         }
//       </ul>
//
//       <button
//         // onClick=
//       >
//         <span aria-label="jokeButton">Get New Dad Joke</span>
//       </button>
//       <Joke />
//
//     </div>
//   )
// }
//
// export default App;
