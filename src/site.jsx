import React from 'react';

import ImageWidget from './image-widget.jsx';

import css from './styles/main.css';

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
        <div className="test" src="./assets/Facebook.png" />
   		</main>
  	)
  }
}

React.render(<Site />, document.body);