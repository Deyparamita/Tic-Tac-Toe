import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import circle_icon from './assets/circle.png'
import cross_icon from './assets/cross.png'

let data = ["","","","","","","","",""];

const TicTacToe = () => {

    let [count , setcount] =useState(0);
    let [lock, setlock] = useState(false);
    let winnertitle  = useRef(null);  
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
    
    const toggle =(e,num) => {
   
        if(lock)
        {
          return 0;
        }

         if(count%2==0 && data[num]=="")
         {
            e.target.innerHTML = `<img src = '${circle_icon}'>`;
            data[num]="O";
            console.log(data);
            setcount(++count);
            checkwin();
         }

         else if(count%2!=0 && data[num]=="")
         {
            e.target.innerHTML =`<img src= '${cross_icon}'>`;
            data[num]='X';
            console.log(data);
            setcount(++count);
            checkwin();
         }
    }

      const checkwin = (e)=>{
          if(data[0]===data[1] && data[1]===data[2] && data[2]!="")
          {
            //win
            win(data[0]);
          }
          else if(data[3]===data[4] && data[4]===data[5] && data[5]!="")
          {
            //win
            win(data[3]);
          }
          else if(data[6]===data[7] && data[7]===data[8] && data[8]!="")
          {
            //win
            win(data[6]);
          }
          else if(data[0]===data[4] && data[4]===data[8] && data[8]!="")
          {
            //win
            win(data[0]);
          }
          else if(data[2]===data[4] && data[4]===data[6] && data[6]!="")
          {
            //win
            win(data[2]);
          }
          else if(data[0]===data[3] && data[3]===data[6] && data[6]!="")
          {
            //win
            win(data[0]);
          }
          else if(data[1]===data[4] && data[4]===data[7] && data[7]!="")
          {
            //win
            win(data[1]);
          }
          else if(data[2]===data[5] && data[5]===data[8] && data[8]!="")
          {
            //win
            win(data[2]);
          }
        //  else{
        //     win("D")
        //  }
        else if(!data.includes(""))
        {
            win("D");
        }
      }   

      const win = (winner) =>
      {
         setlock(true);
         if(winner === "X")
         {
         winnertitle.current.innerHTML =`Congraturation: <img src =${cross_icon}> WON the game`;
         }
         else if(winner === "O")
         {
            winnertitle.current.innerHTML =`Congraturation: <img src = '${circle_icon}'>WON the game`;
         }
         else if(winner === "D")
         {
            winnertitle.current.innerHTML =`Match DRAW`;
         }
    }

    function reset()
    {
        setlock(false);
        data= ["","","","","","","","",""];
        winnertitle.current.innerHTML=`TIC TAC TOE game in <span>React</span>`;
        box.map((p)=>{
            p.current.innerHTML = "";
            count = 0;
            setcount(count);
        })
    }

  return (
    <div className='container'>
      <h1 className='title' ref={winnertitle}>TIC TAC TOE game in <span>React</span></h1>
      <div className="board">
   <div className="row1">
    <div className="boxes" ref={box1} onClick={(e)=> {toggle(e,0)}}></div>
    <div className="boxes" ref={box2} onClick={(e)=> {toggle(e,1)}}></div>
    <div className="boxes" ref={box3} onClick={(e)=> {toggle(e,2)}}></div>
   </div>

   <div className="row2">
    <div className="boxes" ref={box4} onClick={(e)=> {toggle(e,3)}}></div>
    <div className="boxes" ref={box5} onClick={(e)=> {toggle(e,4)}}></div>
    <div className="boxes" ref={box6} onClick={(e)=> {toggle(e,5)}}></div>
   </div>

   <div className="row3">
    <div className="boxes" ref={box7} onClick={(e)=> {toggle(e,6)}}></div>
    <div className="boxes" ref={box8} onClick={(e)=> {toggle(e,7)}}></div>
    <div className="boxes" ref={box9} onClick={(e)=> {toggle(e,8)}}></div>
   </div>
   </div>

      <button className='reset' onClick={reset}>Reset the Game</button>
    </div>
  )
}

export default TicTacToe
