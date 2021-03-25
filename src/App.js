import React from 'react';
import {useState,useEffect} from 'react';
import HomeSection from "./components/homeSection";
import './assets/css/styles.css';
import TopBar from './components/topBar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import TopManga from './components/topManga';
import UpComing from './components/upComing';
import Airing from './components/airing';





function App() {

  const [topAnime, setTopAnime] = useState([]);
  const [topManga, setTopManga] = useState([]);
  const [upcomingAnime, setUpcomingAnime] = useState([]);
  const [airingAnime , setAiringAnime] = useState([]);

 const getTopStats = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());
    const tempManga = await fetch(`https://api.jikan.moe/v3/top/manga/1/bypopularity`)
			.then(res => res.json());
    const tempUpcoming = await fetch(`https://api.jikan.moe/v3/top/anime/1/upcoming`)
			.then(res => res.json());
    const airing = await fetch('https://api.jikan.moe/v3/top/anime/1/airing')
      .then(res=>res.json());
		 setTopAnime(temp.top.slice(0, 50));
     setTopManga(tempManga.top.slice(0, 50));
     setUpcomingAnime(tempUpcoming.top.slice(0, 50));
     setAiringAnime(airing.top.slice(0, 50));
    
     
     
	}
  useEffect(()=>{
    getTopStats();
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <TopManga topManga = {topManga}/>
        </Route>
        <Route path="/upComing">
            <UpComing upcomingAnime ={upcomingAnime}/>
        </Route>
        <Route path="/airing">
            <Airing airingAnime= {airingAnime}/>
        </Route>
        
      </Switch>
     
     
     
    </div>
    </Router>
    
  );
}

export default App;