import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';

class App extends Component {
  state = {
    books: []
  }
  componentWillMount() {
    axios.get('http://localhost:3000/books').then((res) => {
      this.setState({
        books: res.data
      })
    });
  }
  render() {
    let books = this.state.books.map((book) =>
    return (
      <div className="App container">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Ratings</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Book Title</td>
              <td>2.5</td>
              <td>
                <Button color="success" size="sm" className="mr-2">Edit</Button>
                <Button color="danger" size="sm">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
