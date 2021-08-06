/* esLint-disable*/

import './SomeForm.js';
import './App.css';
import React, {useState} from 'react';
import {Helmet} from 'react-helmet';

function App1() {
  
  let [따봉, 따봉변경] = useState(0);

  let [ 글제목,글제목변경] = useState(['남자 코트 추천', '하루만에 끝내자','블로그 마지막 리스트']);
  let [날짜, 날짜변경] = useState(['2021-08-03', '2021-08-01', '2021-08-02']);

  function ListItem(props){
    const value = props.value;
    return(
      <li key = {value.toString()}>
        {value}
      </li>
    );
  }

  function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
    <ListItem value ={number}/>
    );
    return(
      <ul>
        {listItems}
      </ul>
    );
  }
  
  

  function 제목바꾸기(){

    var newArray = [...글제목];
    console.log(newArray);

    글제목변경(newArray);
  }

  function 최신순(){
    let mapped = 날짜.map(function(el, i){
      return {index: 글제목[i], value : el};
    })
    mapped.sort(function(a,b){
      return +(a.value>b.value)||+(a.value===b.value)-1;
    });

    let time =[]
    let title = []

    for(let i =0;i<mapped.length;i++){
      title.push(mapped[i]['index']);
      time.push(mapped[i]['value']);
    }

    글제목변경(title);
    날짜변경(time);
  }

  function 오래된순(){
    let mapped = 날짜.map(function(el, i){
      return {index: 글제목[i], value : el};
    })
    mapped.sort(function(a,b){
      return -(a.value>b.value)||-(a.value===b.value)-1;
    });

    let time =[]
    let title = []

    for(let i =0;i<mapped.length;i++){
      title.push(mapped[i]['index']);
      time.push(mapped[i]['value']);
    }

    글제목변경(title);
    날짜변경(time);
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
        <button style = {{color : 'black', backgroundColor:'white', display:'flex', padding:'10px'}} onClick={오래된순}><strong>오래된 순</strong></button>
      </div>

      
      <div className = "list">
        <PostList 
          value = {0}
          title = {글제목}
          date = {날짜}
          따봉 = {따봉}
          따봉변경= {따봉변경}
          />
        <hr/>
        <PostList
          value = {1}
          title = {글제목}
          date = {날짜}
          따봉={따봉}
          따봉변경={따봉변경}
          />
        <hr/>
        <PostList
          value = {2}
          title = {글제목}
          date = {날짜}
          따봉={따봉}
          따봉변경={따봉변경}
          />
        <hr></hr>
      </div>
      

      <Modal></Modal>
    </div>
  );
}

function PostList({value, title,date, 따봉, 따봉변경}){
  if(value ===0){
    return (
      <div>
        <h3>{title[value]}<button onClick = {()=>{따봉변경(따봉+1)}}>👍</button>{따봉}</h3>
        <p>{date[value]}</p>
      </div>
    )
  }
  else{
    return(
      <div>
        <h3>{title[value]}</h3>
        <p> {date[value]}</p>
      </div>
    )
  }
}

function Modal(){// component 명 대문자 시작
  return (
    <>
    <div className = "modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    <div></div>
    </>
  )
}

export default App1;
