import React from 'react'
import { Form } from 'semantic-ui-react'

class Search extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Form>
          <Form.Input  icon='search' placeholder='Search...' onChange={this.props.handleSearch} type="text" />
        <br/>
      </Form>
    )
  }
}

export default Search
