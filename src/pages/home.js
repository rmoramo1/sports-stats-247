import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/
//acordion
import { Tabs } from "../acordion/tabs";
import { Items } from "../acordion/items"
/* img */

export const config = { amp: true }

function Home(){
	const { store, actions } = useContext(Context);
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<div className="container-fluid p-0 ">
			<div className="row g-0 bg_grey"  id="accordion_general">
				<div className="col-lg-2">
					<div className="col-12 bg_orange_dark text-white p-0 py-3 ps-5 fs-5 d-flex align-items-center">
						Sports
					</div>
					<div className="sticky-top">
						<Tabs/>
					</div>
				</div>
				<div className="col-lg-10 p-1 ">
					<div className="col-12 bg-white sticky-top">
						<Items/>
					</div> 
				</div>
			</div>

		</div>
	);
};
export default Home;