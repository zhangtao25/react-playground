// import './styles.css';

import { useState } from 'react';

import VanillaJSONEditor from './VanillaJSONEditor';

function DiffView() {
  const [content, setContent] = useState({
    json: {
      greeting: 'Hello World',
      color: '#ff3e00',
      ok: true,
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    text: undefined,
  });

  return (
    <div className='1111'>
      <h1>svelte-jsoneditor in React</h1>
      <VanillaJSONEditor content={content} readOnly={true} onChange={setContent} />
      <VanillaJSONEditor content={content} readOnly={true} onChange={setContent} />
    </div>
  );
}

export default DiffView
