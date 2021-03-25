import AnimeCard from "./card";

const UpComing = ({upcomingAnime}) => {
    return ( 
      <div className="top-stats">
         <h3>Upcoming</h3>
            
      	<AnimeCard Data={upcomingAnime}/>

		
        </div>
     );
}
 
export default UpComing;