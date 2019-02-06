import React, { Component } from 'react';

class IterationSample extends Component {
  state = {
    names: ['눈사람', '얼음', '눈', '바람'],
    name: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleInsert = () => {
    //names 배열에 값을 추가하고, name 값을 초기화합니다.
    this.setState({
      names: this.state.names.concat(this.state.name),
      // 기존 자바스크립트를 사용했다면 PUSH로 배열을 수정해도 되지 않을까 라고 생각할 수 있는데, STATE는 언제나 setstate로 업데이트해야하고 직접 접근해서 쓰면 안됨. 퓌쉬를하면 새로운 배열을 만드는거 기 때문에 nameList에서 이미 렌더링해논 배열이 오류가남. 해보셈. 떄문에 콘캣으로 붙혀줘야함. 
      name: ''
    })
  };

  handleRemove = (index) => {
    // 편의상 name의 레퍼런스를 마라 먼둡나더,
    const { names } = this.state;
    /**'
     * 배열을 자르는 내장 함수 slice와
     * 전개 연산사(...)를 사용하여 idnex번쨰 값을 제외한 값들을 
     * 배열에 넣어줍니다.
     */

    this.setState({
      names:names.filter((item,i)=> i !== index)
      // 필터는 기존의 배열을 수정해주는 메서드라 렌더링에 문제없이 수정 가능.
    });
  }
  render() {
    const nameList = this.state.names.map(
      (name, idx) => (
        <li
          key={idx}
          onDoubleClick={()=> this.handleRemove(idx)}> 
          {/* 바로  onDoucleClick={this.handleRemove}로 하게되면 this가 언디파인인점 인지 */}
          {name}
        </li>
      )
    );

    return (
      <div>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <button onClick={this.handleInsert}>추가</button>
        <ul>
          {nameList}
        </ul>
      </div>
    )
  }
}

export default IterationSample;