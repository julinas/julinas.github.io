import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import KeyboardMain from './notes-on-a-keyboard/src/main';


class Portfolio extends React.Component {
	componentDidMount() {
		document.title = "Asiiah Song"
	}

	render() {
    return (
	<div class="root">
	<div class="titlebox">
	    <div class="name">
	        Asiiah Song
	    </div>
	    <div class="titleline">
	    PhD student, Computational Media, UC Santa Cruz
	    	<span itemscope itemtype="https://schema.org/Person">
	    		<a class="orchid" itemprop="sameAs" content="https://orcid.org/0000-0003-4803-4317" href="https://orcid.org/0000-0003-4803-4317" target="orcid.widget" rel="me noopener noreferrer">
	    			<img class="orchid" src="https://orcid.org/sites/default/files/images/orcid_16x16.png" alt="ORCID iD icon"/>
	    		</a>
	    	</span>
	    </div>
	</div>
	<div class="portfolio">
	    <div class="floatinglinks">    
  	        <div class="CV">
	            <a href="CV.pdf" target="_blank" download>CV ⇩</a>
	        </div>
	        <div class="github">
	            <a href="https://github.com/julinas" target="_blank">GitHub ⬀</a>
	        </div>
	    </div>
	    <div class="portfolio-item">
	    	<img src="Recipe.png"/>
	    	<a href="https://github.com/julinas/recipe/blob/master/README.md" target="_blank">
	    		Generative Recipes<br/>2018
	    	</a>
	    </div>
	    <div class="portfolio-item">
	    	<img src="Townsim.png"/>
	        <a href="https://github.com/AugmentedDesignLab/town-sim-py/blob/master/README.md" target="_blank">
	    		TownSim<br/>2019
	    	</a>
	    </div>
	    <div class="portfolio-item">
	    	<img src="Tarot.png"/>
	        <a href="https://github.com/julinas/generative-tarot/blob/master/README.md" target="_blank">
	    		Generative Tarot<br/>2019
	    	</a>
	    </div>
	    <div class="portfolio-item">
	    	<img src="iSAM.JPG"/>
	        <a href="https://github.com/julinas/iSAM/blob/master/README.md" target="_blank">
	    		iSAM<br/>2020
	    	</a>
	    </div>
	    <div class="portfolio-item">
	    	<img src="keyboard.png"/>
	        <a href="/notes-on-a-keyboard" target="_blank">
	    		notes on a keyboard<br/>2020
	    	</a>
	    </div>
	</div>
	</div>
    );
	}
}

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<Portfolio />
					</Route>
					<Route path="/notes-on-a-keyboard">
						<KeyboardMain />
					</Route>
				</Switch>
			</Router>
		)
	}
}

export default App;
