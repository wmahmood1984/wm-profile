
import './App.css';
import {AnimatedText} from './AnimatedText'
import SimplePaper from './components/Paper';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <AnimatedText
      textColor="#cd122d"
      overlayColor="fdc52c"
      >
      

      Waqas Mahmood
      </AnimatedText>
      
      <SimplePaper>
        <Typography>abc</Typography>
      </SimplePaper>
    </div>
  );
}

export default App;
