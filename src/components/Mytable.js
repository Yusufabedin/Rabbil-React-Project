import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import axios from 'axios';

class Mytable extends Component {
  state = {
    tableInformations: []
  };

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({ tableInformations: response.data });
      })
      .catch(error => {
        alert('Something went wrong!');
      });
  }
  render() {
    const tableData = this.state.tableInformations;
    const col = [
      { Header: 'Country Name', accessor: 'name' },
      { Header: 'Capital', accessor: 'capital' },
      { Header: 'Population', accessor: 'population' },
      { Header: 'Time zones', accessor: 'timezones' }
    ];

    return (
      <div>
        <ReactTable
          data={tableData}
          columns={col}
          defaultPageSize={10}
          pageSizeOptions={[10, 20, 30, 50]}
        />
      </div>
    );
  }
}

export default Mytable;
