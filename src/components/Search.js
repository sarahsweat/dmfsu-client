import React from 'react'
import { Input, Button, Form, Header } from 'semantic-ui-react'

class Search extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Input icon='search' placeholder='Search...' onChange={this.props.handleSearch} type="text" />
        </Form.Group>
      </Form>
    )
  }
}

export default Search
