import React, { Component } from "react";

import styles from "./Image.scss";

export default class Image extends Component {
	constructor(props) {
		super(props);

		this.image=this.props.image;

	}

	componentDidMount() {}

	componentWillUnmount() {}

	render() {
		return (
			<div className="col-sm-12 col-lg-3">
				<div className="imgContainer">
					<img src={this.image.download_url} alt={this.image.author}/>
					<p>{this.image.author}</p>
				</div>
			</div>
		);
	}
}
