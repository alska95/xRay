import React from 'react'
import plusSign from "./그림1.png";
import xRayImg from "./그림2.png";

function Main({flagInfo}){
    const heatMapFlag = flagInfo[0];
    const boxFlag = flagInfo[1];
    const checkBox3Flag = flagInfo[2];
    const checkBox4Flag = flagInfo[3];
    const imgFlag = flagInfo[4];

    const fitStyle = {
        width : "610px",
        zIndex : 0,
        position : 'relative',
    }
    return(
        <React.Fragment>
                {heatMapFlag === 1 && imgFlag === 1? <div className={"heatMapBox"}></div> : "" }
                {boxFlag === 1 && imgFlag === 1? <div><div className={"tmpBox1"}></div></div> : "" }
                {checkBox3Flag === 1 && imgFlag === 1? <div><div className={"tmpBox2"}></div></div> : "" }
                {checkBox4Flag === 1 && imgFlag === 1? <div><div className={"tmpBox3"}></div></div> : "" }
                {imgFlag===1?
                    <img src={xRayImg} style={fitStyle} alt = ""/> :
                    <img src={plusSign} alt = ""/> }
        </React.Fragment>
    )
}

export default Main