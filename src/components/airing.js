import AnimeCard from "./card"


const Airing = ({airingAnime}) => {
    return ( 
             <div className="top-stats">
         <h3>Airing Anime</h3>
          <AnimeCard Data={airingAnime}/>
        </div>
     );
}
 
export default Airing;