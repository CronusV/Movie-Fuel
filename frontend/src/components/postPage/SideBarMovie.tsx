import React from 'react'
import { Card, Button} from 'react-bootstrap'
import imageUrl from './sothebys-md.brightspotcdn.jpg';

interface MovieIMBD {
    imbd: string
}

function SideBarMovie(props: MovieIMBD) {
    // TODO FETCH with useeffect
  return (
    <Card style={{ width: '18rem' }} className='text-dark px-3'>
    <Card.Header className='bg-body'>
        <Card.Title className='text-center mb-3'>Blade Runner</Card.Title>
        <Card.Title className='text-center fs-6'>R 1982, Sci-fi/Mystery & thriller, 2h 2m</Card.Title>
    </Card.Header>
      <Card.Img variant="top" src={imageUrl}/>
      <Card.Body className='d-flex flex-column align-items-center'>
        <Card.Title className='fs-5 mb-3'>Director: Ridley Scott</Card.Title>
        <Card.Text className='bg-light'>
        In the early twenty-first century, the Tyrell Corporation, during what was called the Nexus phase,
         developed robots, called "replicants", that were supposed to aid society, the replicants which looked
          and acted like humans. When the superhuman generation Nexus 6 replicants, used for dangerous off-Earth endeavors, 
          began a mutiny on an off-Earth colony, replicants became illegal on Earth. Police units, called "blade runners", have the job of destroying -
           or in their parlance "retiring" - any replicant that makes its way back to or created on Earth, with anyone convicted of aiding or assisting a
           replicant being sentenced to death. 
        </Card.Text>
        <Button variant="primary" className="mt-3">Go IMBD Page</Button>
      </Card.Body>
    </Card>
  )
}

export default SideBarMovie