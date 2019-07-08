import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from'./components/Table';
import styled from 'styled-components'
const AppStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
class App extends Component {
  render() {
    return (
      <AppStyled>
          <Table />
      </AppStyled>
    );
  }
}

export default App;

