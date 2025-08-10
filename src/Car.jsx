import React, { Component } from 'react'

export default class Car extends Component {

    constructor(){
        super()
        this.state = {
            myCar:"Polo GT"
        }
    }
    getNames = (event) => {
        console.log(event.target.value);
        this.setState({...this.state,myCar:event.target.value})
    }
    
  render() {
    return (
      <div>
        <h1>Car</h1>
        <div className="border rounded m-2 p-2">
            <input onChange={(event)=>this.getNames(event)} type="text" placeholder='Input your car name' className="form-control"/>
        </div>
        <h1>My car:{this.state.myCar}</h1>
      </div>
    )
  }
}
