import React, { Component} from 'react';
import "./ValidationSample.css";

class VaildationSample extends Component {
  state = {
    password:'',
    clicked:false,
    validated:false
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleButtonClick =()=>{
    this.setState({
      clicked:true,
      validated:this.state.password === '0000'
    });

    this.superman.focus();
  }

  render(){
    return (
      <div>
        <input 
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked? (this.state.validated? "success" : "failure"): ""}
          ref={(ref)=> {this.superman=ref}}
        />
        <button onClick={this.handleButtonClick} ref={(ref)=> {this.ayyo= ref}}>검증하기</button>



      </div>
    );
  }
}

export default VaildationSample;
