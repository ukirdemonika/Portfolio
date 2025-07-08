
import './App.css';
import {ThemeProvider} from 'styled-components';
import Main from './containers/Main';
import { selectedTheme } from './theme';
import { GlobalStyles } from './global';
function App() {


  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
        <div>
          <Main theme={selectedTheme}/>
        </div>
    </ThemeProvider>
  )
}

export default App;
