
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
      <strong style={{ display:"block", border:"solid 1px black", height:"200px", width:"800px", verticalAlign: "middle", textAlign: "justify"}}>
        Hey! I am Waqas. I am a fullstack Developer with additional expertise in BlockChain. I have workeed upon number of BlockChain Smart Contracts and wallets. Token is my specisalization and have worked upon different type of fungible as well as non fungible tokens
      </strong>
      {/* <div>
      {List.map((item,i)=>(
          <PortfolioReviewCard
          key={i}
          title = {item.title}
          url={item.url}
          cardContent = {item.description}
          img = {item.picture}
          ></PortfolioReviewCard>
        ))}
      </div> */}

      <div style={{margin:"auto"}}>
      {List.map((item,i)=>(
          <div
          style={{display:'block', maxWidth: 345,
          margin : '10px',
          float: 'left',
          height: "500px",
          border: "ridge green 3px"}}
          key={i}
          
          >
          <h1>{item.title}</h1>
          <a href={item.url} target="_blank"><h3>{item.url}</h3></a>
          <a href={item.url} target="_blank" ><img style={{height:"200px", width:"300px"}} src={item.picture}></img></a>
          <p>{item.description}</p>


          </div>
        ))}
      </div>

      {/* <SimplePaper>
        <Typography>abc</Typography>
      </SimplePaper> */}
    </div>
  );
}

export default App;
