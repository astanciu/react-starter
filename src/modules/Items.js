import React from 'react'
import NavLink from './NavLink'
import {PageHeader} from 'react-bootstrap'

export default React.createClass({

  render(){
     return (
      <section>
        <h1>Items</h1>
        <p>A list of Items!</p>
        <ul>
          <li><NavLink to="/items/first">first</NavLink></li>
          <li><NavLink to="/items/second">second</NavLink></li>
          <li><NavLink to="/items/second">second/edit</NavLink></li>
        </ul>
        <div>Selected Repo:</div>
        {this.props.children}
      </section>
    )
  }
   

})