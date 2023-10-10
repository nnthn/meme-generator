import React from "react";
import memesData from "./memesData";
import Example from "./Example";


export default function Meme(){


    
    const [meme, setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImg:"https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    });
    const [allMemeImages,setAllMemeImages]= React.useState(memesData);
   
    function getMemeImg(){
        const memesArray = memesData.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length);//check on how this works--
        const url = memesArray[randomNum].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        }));
    }
 
    return (
        <main className="meme">
          <div className="form">
            <input type="text" id="input1" name="input1" placeholder="Top text" className="form-input"/>

            <input type="text" id="input1" name="input1" placeholder="Bottom text" className="form-input"/>
            <button onClick={getMemeImg}type="submit" className="form-button">Get a new meme image</button>

          </div>
          <img src ={meme.randomImg} className ="meme-img" />
          <Example />
       </main>


    );



};

//last class 21 6:17
