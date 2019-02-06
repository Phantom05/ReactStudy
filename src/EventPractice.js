import React, {Component} from 'react';

class EventPractive extends Component {
  state ={
    username:'',
    message:'',
    password:'',
  }

  handleChange=(e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  //이런식으로 확장성 있게 만듬 target의 name과 target의 value를 가져옴
  handleClick=()=>{
    alert(`${this.state.username} : ${this.state.message} / ${this.state.password}`  );
    this.setState({
      username:'',
      message:''
    });
  }

  handleKeyPress=(e)=>{
    if(e.key ==='Enter'){
      this.handleClick();
    }
  }

  render(){
    return(
     <div>
       <h1>이벤트 연습</h1>
       <input 
       type="text"
       name="username"
       placeholder="유저명" 
       value={this.state.username}
       onChange={this.handleChange}
       />
      <input 
       type="password"
       name="password"
       placeholder="password"
       value={this.state.password}
       onChange={this.handleChange}
       />
       <input 
       type="text"
       name="message"
       placeholder="아무거나 입력해보세요"
       value={this.state.message}
       onChange={this.handleChange}
       onKeyPress={this.handleKeyPress}
       />

       <button onClick={this.handleClick}>확인</button>
     </div>
    )
  }
}

export default EventPractive;