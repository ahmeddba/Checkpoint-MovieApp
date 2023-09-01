import React, { useEffect }  from 'react'
import './movieCard.css'
import { Card , ListGroup , Modal , Button} from 'react-bootstrap'
import ReactStars from 'react-stars'

const movieCard = ({movie , show, setShow}) => {

  const handleClose = () => {
    setShow(false);
    movie.show= false;
    console.log(movie.show , movie.title)
  }
  const handleShow = () => {
    setShow(true);
    movie.show= true;
    console.log(movie.show , movie.title)
  }

  const textColor ={color : 'white'}




  return (

  <>
<Card  onClick={handleShow} className='contt' style={{ width: '21rem', margin : '20px'}}>
      <Card.Img variant="top" src={movie.posterUrl} height={450}/>
      <Card.Body>
        <Card.Title style={textColor}>{movie.title}</Card.Title>
        <Card.Text style={textColor} className='descc'>
         {movie.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={textColor}>Rate: {movie.rate}/5 </ListGroup.Item>
        <ListGroup.Item>
          <ReactStars
  count={5}
  edit={false}
  value={movie.rate}
  size={24}
  color2={'#ffd700'} />
   </ListGroup.Item>
      </ListGroup>

    </Card>
    <Modal show={show} key={movie.id} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

  </>

)
}

export default movieCard
