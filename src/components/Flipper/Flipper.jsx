import React from 'react';

class Flipper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered : false,
    };
	}

	render() {
		return (
			<span
				onMouseOver={() => {this.setState({hovered:true})}}
				onMouseOut={() => {this.setState({hovered:false})}}
			>
				{this.state.hovered ? this.props.hovered : this.props.normal}
			</span>
		)
	}
}

export default Flipper;