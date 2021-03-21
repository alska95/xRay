import React from 'react'

function Aside({flagInfo}){
    const heatMapFlag = flagInfo[0];
    const boxFlag = flagInfo[1];
    const checkBox3Flag = flagInfo[2];
    const checkBox4Flag = flagInfo[3];
    const imgFlag = flagInfo[4];

    return(
        <React.Fragment>
            <aside className={"aside"}>
                {heatMapFlag === 1 && imgFlag === 1? <div><div className={"redBlock"}></div> <div>Penumonia 82%</div></div> : "" }
                {boxFlag === 1 && imgFlag === 1? <div><div className={"blueBlock"}></div> <div>nodule 63%</div></div> : "" }
                {checkBox3Flag === 1 && imgFlag === 1? <div><div className={"greenBlock"}></div> <div>decease 54%</div></div> : "" }
                {checkBox4Flag === 1 && imgFlag === 1? <div><div className={"blackBlock"}></div> <div>decease 46%</div></div> : "" }
            </aside>
        </React.Fragment>
    )


}

export default Aside;