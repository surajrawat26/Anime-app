/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from "react-router-dom";
const TopBar = () => {
    return ( 
        <div className="top-bar">
           
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/topManga'> Top Manga</Link></li>
                <li><Link to='/upComing'> Upcoming Anime</Link></li>
                
                
                <li><Link to='/airing'> Airing Now</Link></li>
                

                
                
                <li><input type="text"
                    placeholder="Search Animes"
                /></li>
            </ul>
           
            
        </div>
     );
}
 
export default TopBar;