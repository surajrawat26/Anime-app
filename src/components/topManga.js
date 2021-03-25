import React from 'react';
import { CardColumns } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
const TopManga = ({topManga}) => {
    return ( 
         <div className="top-stats">
         <h3>Top Manga</h3>
            {topManga.map(manga => (

                <CardColumns className="container-card" key={manga.mal_id} target="_blank">
					<Card>
						<Card.Img variant="top" src={manga.image_url} />
    				<Card.Body>
      				<Card.Title><strong>{manga.title}</strong></Card.Title>
					  <div className="anime-stats">
					<Card.Text>Episodes:{manga.episodes}</Card.Text>
      				<Card.Text>Rank:{manga.rank}</Card.Text>
      				<Card.Text>Score:{manga.score}</Card.Text>
      				<Card.Text>Start Date:{manga.start_date}</Card.Text>
      				<Card.Text>End Date:{manga.end_date}</Card.Text>
      				<Card.Link href={manga.url}>Know more</Card.Link>
					  </div>
      				

					
                    </Card.Body>		
					</Card>
					
					
					
					</CardColumns>

            )

            )}
        </div>
     );
}
 
export default TopManga;