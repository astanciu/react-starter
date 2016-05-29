import React from 'react'
import NavLink from './NavLink'
import Navigation from './Navigation'
import {Grid, Row, Col} from 'react-bootstrap'

export default React.createClass({
  render() {
    return (
      <div>
        <Navigation />
        <Grid>
            <Row className="show-grid">
              <Col xs={12} md={12}>{this.props.children}</Col>
            </Row>
        </Grid>
        
      </div>
    )
  }
})
