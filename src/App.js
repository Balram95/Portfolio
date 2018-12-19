import React, { Component } from 'react';
import style from './App.module.scss';
// import axios from 'axios';
import Main from './components/Main/main';
// import svg from '/my.svg'

class App extends Component {
  state={
    menu:false
  }
  setMainMenu=()=>{
    this.setState({
      menu:true
    })
  }
  closeMainMenu=()=>{
    this.setState({
      menu:false
    })
  }
  render() {
    var menu=null
    var style1=null;
    var style2=null;
    if(this.state.rotated){
      style1={
        animation:'mving 2s'
      }
      style2={
        transform: 'rotateX(90deg)'
      }
    }
    if(this.state.menu){
      menu=<div className={style.mainMenu}>
        <div onClick={this.closeMainMenu} className={style.CloseMenuBar}>
          <div className={style.firstBar}></div>
          <div className={style.menu}>Close</div>
          <div className={style.secondBar}></div>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
        </div>
    }else{
      menu=null
    }
    return (
      <div className={style.App}>
        <header className={style.Header} style={style2}>

          <div className={style.content_box}>
            <div className={style.layer}>
              <div className={style.tags}>
              <h1>Hello there.</h1>
              <p>I’m the Software Developer for CIOC in Bangalore.<br/>
              I have serious passion for UI effects, animations<br/>
              and creating intuitive, dynamic user experiences.</p>
              </div>
            </div>
            <div onClick={this.setMainMenu} className={style.menuBar}>
              <div className={style.firstBar}></div>
              <div className={style.menu}>Menu</div>
              <div className={style.secondBar}></div>
            </div>
            {menu}
          </div>
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
