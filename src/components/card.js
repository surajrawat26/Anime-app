import { CardColumns } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
const AnimeCard = ({Data}) => {
    return (
        <div className= "Card">
        {Data.map(data => (
            <CardColumns className="container-card" key={data.mal_id} target="_blank">
					<Card>
						<Card.Img variant="top" src={data.image_url} />
    				<Card.Body>
      				<Card.Title><strong>{data.title}</strong></Card.Title>
					  <div className="anime-stats">
					<Card.Text>Episodes:{data.episodes}</Card.Text>
      				<Card.Text>Rank:{data.rank}</Card.Text>
      				<Card.Text>Score:{data.score}</Card.Text>
      				<Card.Text>Start Date:{data.start_date}</Card.Text>
      				<Card.Text>End Date:{data.end_date}</Card.Text>
      				<Card.Link href={data.url}>Know more</Card.Link>
					  </div>
      				

					
                    </Card.Body>		
					</Card>
					
					
					
					</CardColumns>
        ))}
            
        </div>
      );
}
 
export default AnimeCard;