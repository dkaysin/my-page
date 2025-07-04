import './App.css';

import React from 'react';

import Switch from "./components/Switch/Switch";
import Popup from "./components/Popup/Popup";
import Document from "./components/Document/Document";
import Source from "./components/Source/Source";
import Ref from "./components/Ref/Ref";

class Main extends React.Component {

  constructor(props) {
    super(props);

    let page = sessionStorage.getItem("page");
    if (page === 'true') {
      page = true;
    }
    else if (page === 'false') {
      page = false;
    }
    else {
      page = false;
    }

    this.state = {
      page : page,
      show : false,
      id : 0,
      x : 0,
      y : 0,
    };
    this.renderRef = this.renderRef.bind(this);
  }

  handleRefClick(key) {
    if (key === 0) { this.setState({show: false}); }
    else { this.setState({
      show : true,
      id : key,
    })}
  }

  renderRef (text, i) {
    return (
      <Ref 
        text={text} 
        onClick={(e) => {
          e.stopPropagation();
          this.setState({x : e.pageX, y : e.pageY});
          this.handleRefClick(i);
        }}
      />
    );
  }

  render() {
    const page = this.state.page;
    return (
      <div 
        className="container" 
        onClick={() => this.handleRefClick(0)}
      >
        <title>Dmitry Kaysin's personal homepage</title>
        <meta name="description" content="Dmitry Kaysin's personal homepage" />
        <link rel="icon" href="/favicon.ico"/>
        <div className="window">
          <div className="title">
            <span>Dmitry Kaysin</span>
            <span>
              <Switch
                isOn={page}
                onColor="#859900"
                handleToggle = {() => {
                  this.setState({page : !page});
                  sessionStorage.setItem("page", !page);
                }}
              />
            </span>
          </div>      
          {this.state.page ? <Source renderRef={this.renderRef}/> : <Document/>}
          <Popup 
            show = {this.state.show}
            id = {this.state.id}
            x = {this.state.x}
            y = {this.state.y}
            onClick = {(e) => {e.stopPropagation()}}
          />          
        </div>
      </div>
    )
  }
}

function App() {
  return (<Main/>)
}

export default App;
