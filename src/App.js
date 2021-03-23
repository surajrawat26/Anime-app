import React from 'react';
import {useState,useEffect} from 'react';
import HomeSection from "./components/homeSection";
import './assets/css/styles.css';
import TopBar from './components/topBar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import TopManga from './components/topManga';





function App() {

  const [topAnime, setTopAnime] = useState([]);
  

 const getTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());

		 setTopAnime(temp.top.slice(0, 50));
	}
  useEffect(()=>{
    getTopAnime();
   
  },[]);


  
 
  return (

    

    <Router>
      <div className="App">
    <TopBar/>
      <Switch>
        <Route exact path="/">
          <HomeSection topAnime= {topAnime}/>
        </Route>
        <Route path = "/topManga">
          <TopManga/>
        </Route>
        
      </Switch>
     
     
     
    </div>
    </Router>
    
  );
}

export default App;
