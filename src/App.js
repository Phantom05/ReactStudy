import React, { Component, Fragment } from 'react';

// import EventPractice from './EventPractice';
/**
 * var React = requier('react');
 * var Component = React.Component;
 * 와 같은 거임.
 * 
 * 번들링 = 묶는다.
 */
import './App.css';
// import VaildationSample from './VaildationSample';
// import MyComponent from './MyComponent';
// import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';

class App extends Component {
  render(){
    return(
      <Fragment>
      {/* <MyComponent name="React" age={39}/> */}
      {/* <EventPractice /> */}
      {/* <VaildationSample /> */}
      {/* <ScrollBox ref={(ref)=>this.scrollBox = ref} />
      <button onClick={()=> this.scrollBox.scrollToBottom()}>맨 밑으로</button> */}
      <IterationSample />
      </Fragment>
    )
  }
}
/*
class App extends Component {
  render() {
    const text = '당신은 어썸 한가?';
    const condition = true;
    const style ={
      backgroundColor: 'gray',
      border:'1px solid black',
      height: Math.round(Math.random() * 300)+ 50,
      width:Math.round(Math.random()*300)+50,
      WebkitTransition:'all',
      MozTransaction: 'all',
      msTransition: 'all'
    }
    // 자바스크립트 객체에서는 -를 사용할 수 없어서 - 대신에 대문자를 씀. -webkit도 Webkit 이런식 ms만 예외임.
    return (
      <div className="my-div">
        <h1>리액트 안녕!</h1>
        <h2>{text}</h2>
        {condition && '보여주세요'}
        왼쪽이 트루일떄만 오른쪽이 나옴 
        <div style={style}></div>
        <form>
          <div>
            <input type="text"  name="firstname" />
          </div>
            <div>
            <input type="text"  name="lastname" />
            </div>
          <input type="submit" value="전송" />
        </form>
      </div>
    );
  }
}
*/

export default App;
