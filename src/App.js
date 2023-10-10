import { Route, Switch } from "react-router-dom";
import { useState } from "react";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Main from "./components/main/Main";
import Member from "./components/main/Member";
import Discography from "./components/main/Discography";
import Site from "./components/main/Site";

import Story from "./components/sub/Story";
import StudioAlbum from "./components/sub/StudioAlbum";
import Map from "./components/sub/Map";

import './scss/style.scss';

function App() {

	return (
		<>
			<Switch>
				<Route exact path="/">
					<Header type={'main'}/>
					<Main/>
					<Member/>
					<Discography/>
					<Site/>
				</Route>

				<Route path="/">
					<Header type={'sub'}/>
				</Route>
			</Switch>
			
			<Route path="/story" component={Story}/>
			<Route path="/studioAlbum" component={StudioAlbum}/>
			<Route path="/map" component={Map}/>

			<Footer/>
		</>
	);
}

export default App;
