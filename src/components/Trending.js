import { Card, Col, Container, Row, Image } from "react-bootstrap";
import trendingImage1 from "../assets/images/trending/trending_1.jpg"
import trendingImage2 from "../assets/images/trending/trending_2.jpg"
import trendingImage3 from "../assets/images/trending/trending_3.jpg"
import trendingImage4 from "../assets/images/trending/trending_4.jpg"
import trendingImage5 from "../assets/images/trending/trending_5.jpg"
import trendingImage6 from "../assets/images/trending/trending_6.jpg"

const Trending = () => {
    return(
        <div>
            <Container id="trending">
                <Row>
                    <h1 className="text-white my-4">Trending Movies</h1>
                    <Col md={4} className="trending-wrapper mb-3">
                        <Card className="bg-white card-wrapper">
                            <Image src={trendingImage1} alt="3 Idiots" className="card-images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">3 Idiots</Card.Title>
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
                            <Image src={trendingImage2} alt="Dead Man's Chest" className="card-images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Pirates of The Carribean</Card.Title>
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
                            <Image src={trendingImage3} alt="The Avengers" className="card-images" />
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
                            <Image src={trendingImage4} alt="Morbius" className="card-images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Morbius</Card.Title>
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
                            <Image src={trendingImage5} alt="The Medium" className="card-images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">The Medium</Card.Title>
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
                            <Image src={trendingImage6} alt="Train to Busan" className="card-images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Train to Busan</Card.Title>
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

export default Trending