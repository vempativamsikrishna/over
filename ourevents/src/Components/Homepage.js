import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img  src='/New folder/MainAfter.png' width={'100%'} />
        <Carousel.Caption>
          <h3>Bookings For Friends&Memories<br></br> and Anniversary's</h3>
          <p>All Time Of Ceremony's</p>
          <p className='btn-home'>Book Now</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img  src='/New folder/free-images.jpg' width={'100%'} />
        <Carousel.Caption>
          <h3>Bookings For Friends&Memories<br></br> and Anniversary's</h3>
          <p>All Time Of Ceremony's</p>
          <p className='btn-home'>Book Now</p>
        </Carousel.Caption>
      </Carousel.Item>
    
     
    </Carousel>
  );
}

export default UncontrolledExample;