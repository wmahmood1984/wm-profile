
import './App.css';
import {AnimatedText} from './AnimatedText'
import SimplePaper from './components/Paper';
import { Typography } from '@material-ui/core';
import PortfolioReviewCard from './components/Card';
import List from './PortfolioList'

function App() {
  return (
    <div className="App">
      <AnimatedText
      textColor="#cd122d"
      overlayColor="fdc52c"
      >
      

      Waqas Mahmood
      </AnimatedText>
      
      <div>
      {List.map((item,i)=>(
          <PortfolioReviewCard
          key={i}
          title = {item.title}
          url={item.url}
          cardContent = {item.description}
          img = {item.picture}
          ></PortfolioReviewCard>
        ))}
      </div>

      {/* <SimplePaper>
        <Typography>abc</Typography>
      </SimplePaper> */}
    </div>
  );
}

export default App;
