import React, { useState } from 'react';

function HomeScreen(props) {
  const [tag, setTag] = useState('');

  function changeTag(e) {
    let { value } = e.target;
    setTag(value);
  }

  function lookForCall(e) {
    e.preventDefault();
    props.history.push(`/${tag ? tag : 'all'}`);
  }

  return (
    <div>
      <div>
        <p>Join a chat</p>
      </div>
      <div>
        <p>The rules</p>
      </div>
      <div>
        <label>Type what interest you want to talk about?</label>
        <input value={tag} onChange={changeTag} />
      </div>
      <div>
        <button onClick={lookForCall}>Look for Call</button>
      </div>
    </div>
  );
}

export default HomeScreen;
