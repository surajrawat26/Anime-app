/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-has-content */

import AnimeCard from './card';



const HomeSection = ({topAnime}) => {
    return ( 
       <div className="top-stats">
           <h3>Top Anime</h3>
				
					<AnimeCard Data= {topAnime}/>
			
       </div>
     );
}
 
export default HomeSection;