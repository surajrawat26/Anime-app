import { CardColumns } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
const Airing = ({airingAnime}) => {
    return ( 
             <div className="top-stats">
         <h3>Airing Anime</h3>
            {airingAnime.map(anime => (

                <CardColumns className="container-card" key={anime.mal_id} target="_blank">
					<Card>
						<Card.Img variant="top" src={anime.image_url} />
    				<Card.Body>
      				<Card.Title><strong>{anime.title}</strong></Card.Title>
					  <div className="anime-stats">
					<Card.Text>Episodes:{anime.episodes}</Card.Text>
      				<Card.Text>Rank:{anime.rank}</Card.Text>
      				<Card.Text>Score:{anime.score}</Card.Text>
      				<Card.Text>Start Date:{anime.start_date}</Card.Text>
      				<Card.Text>End Date:{anime.end_date}</Card.Text>
      				<Card.Link href={anime.url}>Know more</Card.Link>
					  </div>
      				

					
                    </Card.Body>		
					</Card>
					
					
					
					</CardColumns>

            )

            )}
        </div>
     );
}
 
export default Airing;