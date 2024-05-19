import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Services() {
  return (
    <Carousel>
      <Carousel.Item>
        <img  src='/New folder/theater1.jpg' width={'100%'} />
        <img  src='/New folder/members.png' width={'100%'} />
        <Carousel.Caption>
          <h3>Bookings For Vamsi<br></br> and Anniversary's</h3>
          <p>All Time Of Ceremony's</p>
          <p className='btn-home'>Book Now</p>
        </Carousel.Caption>
      </Carousel.Item>

     
    </Carousel>
  );
}

export default Services;