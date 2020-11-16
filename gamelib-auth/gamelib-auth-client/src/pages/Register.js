import React, { Component } from 'react'
import UserModel from '../models/user'
class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: ''
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    // TODO: complete this function
    event.preventDefault()

    UserModel.create(this.state)
      .then(data => {
        console.log(data)
        this.setState({
          name: '',
          email: '',
          password: '',
          password2: ''
        })
        // this.props.'history' is one of the router props passed
        // by <Route />. The others are 'match' and 'location'
        this.props.history.push('/login')
      })
  }

  render() {
    return (
      <div>
        <h4>Register</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
                onChange={this.handleChange} 
                type="text" 
                id="name" 
                name="name" 
                value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input 
              onChange={this.handleChange} 
              type="email" 
              id="email" 
              name="email" 
              value={this.state.email} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Password</label>
            <input 
              onChange={this.handleChange} 
              type="password" 
              id="password" 
              name="password" 
              value={this.state.password} />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input 
              onChange={this.handleChange} 
              type="password" 
              id="password2" 
              name="password2" 
              value={this.state.password2} />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
