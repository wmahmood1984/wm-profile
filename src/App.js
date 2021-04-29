
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
      <br/>
        <div style={{ display:"block", border:"solid 1px black", padding:"10px", height:"auto", width:"800px", verticalAlign: "middle", textAlign: "justify"}}> 
        <strong >
        Hey! I am Waqas. I am a Fullstack  / BlockChain Developer. I have worked upon number of BlockChain Smart Contracts and wallets. Token is my specialization and have worked upon different type of fungible as well as non fungible tokens. Have also worked on different web development technologies including but not limited to 
        
        <ul style={{}}>
        <li >ReactJs with Animation, Routers, webHooks</li>
        <li>ReactJs with Redux Store</li>
        <li>GatsbyJS</li>
        <li>Amazon Web services</li>
        <li>Netlify</li>
        <li>GraphQl</li>
        <li>ContentFul</li>
        <li>StoryBook</li>
        <li>MangoDb / FaunaDb</li>
        </ul>
        <p>Here are some of my sample projects</p>
        </strong>
        </div>
        <br/>

        <AnimatedText
      textColor="#fc1226"
      overlayColor="fdc62c"
      >
      

      Sample Projects
      </AnimatedText>
<br/>
      
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
