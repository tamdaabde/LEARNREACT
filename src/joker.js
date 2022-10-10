import React from 'react'
 const Joker =({joks,delData})=>{
   let jokslist = joks.map(j=>{
    return(
        <div className="container " key={j.id}>
            <div>Name : {j.name}</div>
            <div>Age : {j.age}</div>
            <div>Color : {j.color} </div>
            <button onClick={()=>{delData(j.id)}} class="waves-effect waves-light btn">Delete</button>
            <hr />
        </div>
    )
   })
   return(
    <div className="rest">
        {jokslist}
    </div>
   )
 }
export default Joker ;
