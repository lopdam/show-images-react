import React, { Component } from "react";
import Image from './Components/Image/Image'

import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			images: [],
		};
	}

	async loadImages() {
		const res = await fetch("https://picsum.photos/v2/list");

		const data = await res.json();

    this.setState({ images: data });
  }
  
	async componentDidMount() {
		await this.loadImages();
	}

	componentWillUnmount() {}

	render() {
		return (
			<div className="App">
				<h1>Show Images</h1>

        <div className='imagesContainer'>
          {this.state.images.map(e=>{
           return (<Image key={e.id} image={e}/>); 
          })}
        </div>

			</div>
		);
	}
}

export default App;
