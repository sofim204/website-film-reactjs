import { Card, Col, Container, Row, Image } from "react-bootstrap";
import superheroImage1 from "../assets/images/superhero/superhero_1.jpg"
import superheroImage2 from "../assets/images/superhero/superhero_2.jpg"
import superheroImage3 from "../assets/images/superhero/superhero_3.jpg"
import superheroImage4 from "../assets/images/superhero/superhero_4.jpg"
import superheroImage5 from "../assets/images/superhero/superhero_5.jpg"
import superheroImage6 from "../assets/images/superhero/superhero_6.jpg"

const Superhero = () => {
    return(
        <div>
            <Container id="superhero">
                <Row>
                    <h1 className="text-white my-4">Superhero Movies</h1>
                    <Col md={4} className="trending-wrapper mb-3">
                        <Card className="bg-white card-wrapper">
                            <Image src={superheroImage1} alt="Spiderman" className="card-images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Spiderman</Card.Title>
                                    <div className="text-left">
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="trending-wrapper mb-3">
                        <Card className="bg-white card-wrapper">
                            <Image src={superheroImage2} alt="The Avemgers" className="card-images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">The Avengers</Card.Title>
                                    <div className="text-left">
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="trending-wrapper mb-3">
                        <Card className="bg-white card-wrapper">
                            <Image src={superheroImage3} alt="Daredevil" className="card-images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Daredevil</Card.Title>
                                    <div className="text-left">
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="trending-wrapper mb-3">
                        <Card className="bg-white card-wrapper">
                            <Image src={superheroImage4} alt="Ironman" className="card-images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Ironman</Card.Title>
                                    <div className="text-left">
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="trending-wrapper mb-3">
                        <Card className="bg-white card-wrapper">
                            <Image src={superheroImage5} alt="Black Panther" className="card-images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Black Panther</Card.Title>
                                    <div className="text-left">
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="trending-wrapper mb-3">
                        <Card className="bg-white card-wrapper">
                            <Image src={superheroImage6} alt="Ant-Man" className="card-images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Ant-Man</Card.Title>
                                    <div className="text-left">
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet.
                                        </Card.Text>
                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Superhero