import React from 'react';
// import inlineSVG from '../node_modules/react-inlinesvg/lib/index.js';

// var inlineSVG = require('../node_modules/react-inlinesvg/lib/index.js');

// import ImageWidget from './image-widget.jsx';

var inlineSVG = require('./image-widget.jsx');


class Site extends React.Component {
  constructor(props){
		super(props);
		this.state = {
			board: [0,1,0,1,0,1,0,1]
		}
	}

  render(){  	
  	
  	return (
  		<main className="site">
  		  <h1> Site </h1>
        <ImageWidget />
        <inlineSVG src="./assets/manualtracetest.svg"/>
   		</main>
  	)
  }
}

React.render(<Site />, document.body);