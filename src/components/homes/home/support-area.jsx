import React, { useState } from 'react';


const SupportArea = () => {
    const[itContent,setItContent]=useState("")
    return (
        <>
          
           <div  dangerouslySetInnerHTML={{__html:itContent}}>

</div>
        </>
    );
};

export default SupportArea;