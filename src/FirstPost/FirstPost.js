import React from 'react';

const FirstPost = (props) => {
	 return(
 
      <div className="" style={{width: 500}}>
      <img className="card-img-top" alt='youtube' src={props.image}/>
         <div className="card-body">
         <p className="card-text">{props.name}</p>
         </div> 
         </div>

	 	)


}
export default FirstPost;