import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
	<div class="root">
	<div class="titlebox">
	    <div class="name">
	        Asiiah Song
	    </div>
	    <div class="titleline">
	    PhD student, Computational Media, UC Santa Cruz
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
	        <a href="https://github.com/AugmentedDesignLab/town-sim-py" target="_blank"><img src="Townsim.png"/></a>
	    </div>
	    <div class="portfolio-item">
	        <a href="https://github.com/julinas/generative-tarot" target="_blank"><img src="Tarot.png"/></a>
	    </div>
	    <div class="portfolio-item">
	        <a href="https://github.com/julinas/recipe" target="_blank"><img src="Recipe.png"/></a>
	    </div>
	</div>
	</div>
    );
}

export default App;
