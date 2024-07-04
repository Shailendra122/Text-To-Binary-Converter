import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [binary, setBinary] = useState('');
  const [showTextToBinary, setShowTextToBinary] = useState(true);

  const textToBinary = (text) => {
    return text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
  };

  const binaryToText = (binary) => {
    return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
  };

  const handleTextChange = (e) => {
    const textValue = e.target.value;
    setText(textValue);
    setBinary(textToBinary(textValue));
  };

  const handleBinaryChange = (e) => {
    const binaryValue = e.target.value;
    setBinary(binaryValue);
    try {
      setText(binaryToText(binaryValue));
    } catch (error) {
      setText('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="w-full  bg-blue-600 px-2 text-white flex justify-evenly items-center" style={{height: '80px', padding: '0.5rem 0'}}>
        <h1 className="text-xl">Text and Binary Converter</h1>
        <div className="flex justify-center items-center">
          <button
            className={`mx-2 py-1 px-3 rounded ${showTextToBinary ? 'bg-blue-800' : 'bg-blue-400'}`}
            onClick={() => setShowTextToBinary(true)}
          >
            Text to Binary
          </button>
          <button
            className={`mx-2 py-1 px-3 rounded ${!showTextToBinary ? 'bg-blue-800' : 'bg-blue-400'}`}
            onClick={() => setShowTextToBinary(false)}
          >
            Binary to Text
          </button>
        </div>
      </header>
      <div className="flex items-center justify-center">
        <div className="mt-10 p-6 bg-white shadow-lg rounded-lg w-11/12 max-w-xl">
          {showTextToBinary ? (
            <div>
              <label className="block text-lg mb-2">Text:</label>
              <textarea
                value={text}
                onChange={handleTextChange}
                rows="4"
                className="w-full p-2 border rounded"
              />
              <label className="block text-lg mt-4 mb-2">Binary:</label>
              <textarea
                value={binary}
                readOnly
                rows="4"
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
          ) : (
            <div>
              <label className="block text-lg mb-2">Binary:</label>
              <textarea
                value={binary}
                onChange={handleBinaryChange}
                rows="4"
                className="w-full p-2 border rounded"
              />
              <label className="block text-lg mt-4 mb-2">Text:</label>
              <textarea
                value={text}
                readOnly
                rows="4"
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
