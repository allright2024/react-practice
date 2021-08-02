/* esLint-disable*/

import './App.css';
import React, {useState} from 'react';


function App() {
  
  let [따봉, 따봉변경] = useState(0);

  let [ 글제목,글제목변경] = useState(['남자 코트 추천', '하루만에 끝내자','블로그 마지막 리스트']);
  let [날짜, 날짜변경] = useState(['2021-08-03', '2021-08-01', '2021-08-02']);

  function 제목바꾸기(){

    var newArray = [...글제목];
    console.log(newArray);

    글제목변경(newArray);
  }

  function 최신순(){
    let newArray1 =[...글제목];
    let newArray2 = [...날짜];

    newArray1.map(newArray2.sort());

    글제목변경(newArray1);
    날짜변경(newArray2);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>       
      </div>
      <div style = {{padding : "20px"}}>
        <button style = {{ color : 'black' , backgroundColor : 'white', display : "flex", padding : "10px" }} onClick={최신순}><strong>최신 순</strong></button>
        
      </div>
      <div style = {{padding : "20px"}}>
        <button style = {{color : 'black', backgroundColor:'white', display:'flex', padding:'10px'}} onClick={최신순}><strong>오래된 순</strong></button>
      </div>
      <div className = "list">
        <h3>{글제목[0]} <button onClick={()=>{따봉변경(따봉+1)}}>👍</button>{따봉}</h3>
        <p>{날짜[0]}</p>
        <hr/>
        <h3>{글제목[1]}</h3>
        <p> {날짜[1]}</p>
        <hr/>
        <h3>{글제목[2]}</h3>
        <p>{날짜[2]}</p>
        <hr></hr>
      </div>
    </div>
  );
}

export default App;
