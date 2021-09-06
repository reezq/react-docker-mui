import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Switch from '@mui/material/Switch';
import * as React from 'react';


function App() {

const [success, setSuccess] = React.useState(false)
const mainPrimaryColor = success ? '#d91a57' : '#008f4b'
const palletype = success ? 'dark' : 'light'
const theme = createTheme({
  palette: {
    mode: palletype,
      primary: {
        main: mainPrimaryColor
  }},
});

const handleChange = () => {
  setSuccess(!success);
};
console.log(palletype);
console.log(mainPrimaryColor);
  return (

    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h3>{theme.palette.mode} <code>src/App.js</code> and save to reload.</h3>
        </p>
        <Switch
            checked={success}
            onChange={handleChange}
          />
        <Button variant="contained">Ganti Warna</Button>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
