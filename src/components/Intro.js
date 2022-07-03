import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
    return(
        <div className='intro'>
            <Container>
                <Row>
                    <Col>
                        <div className='intro-title'>NONTON FILM TERBARU</div>
                        <div className='intro-title'>KAPANPUN DIMANAPUN GRATIS</div>
                        <div className='intro-button mt-4 text-center'>
                            <Button variant="dark" href="#trending">Lihat Sekarang</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Intro