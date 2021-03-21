import React from 'react'

function Aside({flagInfo}){
    const heatMapFlag = flagInfo[0];
    const boxFlag = flagInfo[1];
    const checkBox3Flag = flagInfo[2];
    const checkBox4Flag = flagInfo[3];
    const imgFlag = flagInfo[4];

    const disease = [["Pnumonia",82] , ["nodule",63] , ["disease" ,54] , ["disease" , 46]];

    return(
        <React.Fragment>
            <aside className={"aside"}>
                {heatMapFlag === 1 && imgFlag === 1? <div><div className={"redBlock"}></div> <div>{disease[0][0] + " " + disease[0][1]}%</div></div> : "" }
                {boxFlag === 1 && imgFlag === 1? <div><div className={"blueBlock"}></div> <div>{disease[1][0] + " " + disease[1][1]}%</div></div> : "" }
                {checkBox3Flag === 1 && imgFlag === 1? <div><div className={"greenBlock"}></div> <div>{disease[2][0] + " " + disease[2][1]}%</div></div> : "" }
                {checkBox4Flag === 1 && imgFlag === 1? <div><div className={"blackBlock"}></div> <div>{disease[3][0] + " " + disease[3][1]}%</div></div> : "" }
            </aside>
        </React.Fragment>
    )


}

export default Aside;