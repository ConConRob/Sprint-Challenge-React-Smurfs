import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: null,
    };
  }
  componentDidMount() {
    if(this.props.smurf){
      this.setState({
        name: this.props.smurf.name,
        age: this.props.smurf.age,
        height: this.props.smurf.height,
        id: this.props.smurf.id
      })
    }
  }
  componentDidUpdate() {
    const smurf = this.props.smurf;
    if(smurf){
      if(this.state.id!== smurf.id){
        this.setState({
          name: this.props.smurf.name,
          age: this.props.smurf.age,
          height: this.props.smurf.height,
          id: this.props.smurf.id
        })
      }
    }
  }


  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    let id =null;
    if(this.props.smurf){
      id=this.props.smurf.id
    }
    this.props.methodSmurf(this.state.name, this.state.age, this.state.height, id)
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">{!!this.props.smurf?'Edit this Smirf':'Add to the village'}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
