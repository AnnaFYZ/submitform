import { useState } from 'react';
import './App.css';

function Form (){
  let [nameValue, setNameValue] = useState("");
  let [textValue, setTextValue] = useState("");
  
  return (
    <div>
      <head>
        <title>Welcome to CYF Chat</title>
      </head>
      <body>
        <h1>CYF Chat</h1>
        <h2>Send a message</h2>
        <form action="/messages" method="post">
          <p>
            Name:{" "}
            <input
              type="text"
              name="from"
              placeholder="Your Name"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />{" "}
            <br />
            Message:{" "}
            <input
              type="text"
              name="text"
              placeholder="The message..."
              value={textValue} onChange={(e) => setTextValue(e.target.value)}
            />
            <br />
          </p>
          <button type="submit">Send</button>
        </form>

        <a href="/messages">See all messages</a>
      </body>
    </div>
  );
}


function App() {
  return (
    <div className="App">
     <Form />
    </div>
  );
}

export default App;
