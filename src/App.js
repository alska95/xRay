import React from 'react'
import './App.css';
import Main from './Main'
import Aside from "./Aside";


function App() {
  const [imgFlag , setImgFlag] = React.useState(0);
  const [heatMapFlag , setHeatMapFlag] = React.useState(0);
  const [boxFlag , setBoxFlag] = React.useState(0);
  const [checkBox3Flag , setCB3Flag] = React.useState(0);
  const [checkBox4Flag , setCB4Flag] = React.useState(0);

  const clickHMF = ()=>{
    heatMapFlag === 0 ? setHeatMapFlag(1) : setHeatMapFlag(0);
  }
  const clickBox = ()=>{
    boxFlag === 0 ? setBoxFlag(1) : setBoxFlag(0);
  }
  const clickCB3 = ()=>{
    checkBox3Flag === 0 ? setCB3Flag(1) : setCB3Flag(0);
  }
  const clickCB4 = ()=>{
    checkBox4Flag === 0 ? setCB4Flag(1) : setCB4Flag(0);
  }
  const clickImg = ()=>{
    imgFlag === 0 ? setImgFlag(1) : setImgFlag(0);
  }


  return (
      <React.Fragment>
        <div className="container">
          <header className={"header"}>
            X-ray Classifier
          </header>

          <div className={"content"}>
            <main className={"main"} onClick={clickImg} >
              <Main flagInfo = {[heatMapFlag , boxFlag , checkBox3Flag , checkBox4Flag , imgFlag]}/>
            </main>
            <nav className={"navs"}>

              <Aside flagInfo = {[heatMapFlag , boxFlag , checkBox3Flag , checkBox4Flag , imgFlag]}/>

              <div className={"nav_checkList"}>
                <label htmlFor="c1">
                  <input type="checkbox" id="c1" onClick={clickBox}/>
                  Box
                </label>
                <label htmlFor="c2">
                  <input type="checkbox" id="c2" onClick={clickHMF}/>
                  Heatmap
                </label>
                <label htmlFor="c3">
                  <input type="checkbox" id="c3" onClick={clickCB3}/>
                  Checkbox 3
                </label>
                <label htmlFor="c4">
                  <input type="checkbox" id="c4" onClick={clickCB4}/>
                  Checkbox 4
                </label>
              </div>
            </nav>
          </div>
        </div>
      </React.Fragment>
  );
}

export default App;
