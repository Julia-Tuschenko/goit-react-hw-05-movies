import React from 'react';
import ReactDOM from 'react-dom';
import { App }  from './components/App/App';
import { BrowserRouter} from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';


// const theme = {};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <ThemeProvider theme={theme}> */}
        <App />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



