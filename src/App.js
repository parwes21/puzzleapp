import logo from './logo.svg';
import React, { useState, useRef, useEffect } from "react";
// import Highlighter from "react-highlight-words";
import HashLoader from "react-spinners/HashLoader";

import './App.css';

function App() {
  const[loading, setLoading] = useState(false);
  let [color, setColor] = useState("BD10E0");
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 5000)
  },[])

  const [text, setText] = useState("");
  const [isFound, setFound] = useState(false);
  const [isNotFound, setNotFound] = useState(false);
  const paragraphEl = useRef(null);

  const handleInput = (e) => {
    setText(e.target.value);
    const paragraphText = paragraphEl.current.textContent;
    if (e.target.value !== "" && paragraphText.includes(e.target.value)) {
      setFound(true);
    } else {
      setFound(false);
    }
    if (e.target.value !== "" && paragraphText.includes(e.target.value)) {
      setNotFound(false);
    } else {
      setNotFound(true);
    }
   
  
    
  }
  
  
  // const search = ()=>{
  //   let textToSearch =  document.getElementById("text_to_search").value;
  //   let paragraph =  document.getElementById("paragraph");

  //   textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  //   let pattern =new RegExp(`${textToSearch},"gi"`);
  //   paragraph.innerHTML = paragraph.textContent.replace(pattern, match=>`<mark>${match}</mark>`)
  // }
  return (
  <>
  <div className='app '>
  {
    loading ?(
    <div className="sweet-loading"> 
    <HashLoader color={color} className=' ' loading={loading} size={350} />
  </div>)
    :
(<div className="container">
    <div className="wrapper">
      <input type="text"  placeholder='search keyword'onChange={handleInput}  value={text}/>
    {/* <button  onClick={event=>{setSearchWord(event.target.value)}} >Search</button>  */}
    </div>
    <p ref={paragraphEl}  highlight={text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    {isFound && <p style={{ color: "green" }}>We found it : {text}</p>}
    {isNotFound && <p style={{ color: "red" }}>{text} : This Word Not found in Paragraph</p>}
     
      </div>)
  }
    </div>
  </>
  );
}

export default App;
