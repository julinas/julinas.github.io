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
	        <a href="https://github.com/AugmentedDesignLab/town-sim-py/blob/master/README.md" target="_blank"><img src="Townsim.png"/></a>
	    </div>
	    <div class="portfolio-item">
	        <a href="https://github.com/julinas/generative-tarot/blob/master/README.md" target="_blank"><img src="Tarot.png"/></a>
	    </div>
	    <div class="portfolio-item">
	        <a href="https://github.com/julinas/recipe/blob/master/README.md" target="_blank"><img src="Recipe.png"/></a>
	    </div>
	</div>
	</div>
    );
}

export default App;
