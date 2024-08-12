import { number } from "prop-types";
import React from "react";


//create your first component
const Home = ({arrayNumbers, interval}) => {

	return (
		<>
			<div className="text-center bg-black d-flex justify-content-center align-center">
				<p className="fs-1 text-white p-3 m-2 rounded" style={{background:"#161616", "font-size":"40px"}}><i className="fa-regular fa-clock text-white"></i></p>
				{arrayNumbers.map((num, index)=> 
				<p className="d-inline-block fs-1 text-white p-3 m-2 rounded" style={{background:"#161616", "font-size":"40px"}} key={index}> {num}
				</p>
				)}
			</div>
			<div className="text-center">
				<button className="btn btn-primary my-3" onClick={()=> clearInterval(interval)}>Stop</button>
			</div>
		</>
	);
};

export default Home;
