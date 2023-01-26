import React from 'react'
import { Container,Col,Row,Button } from 'react-bootstrap';

const Index = () => {
  return (
    <div className='kurs-all'>
        <Container>
          <div className="kurs-top">
            <h1>Курсы программирования всего <span>за месяц !</span></h1>
            <p>Развивайтесь, стремитесь к новым знаниям, меняйте свою жизнь! 
Выходите на новый профессиональный уровень с нашими курсами для программистов, тестировщиков и IT-специалистов.</p>
          </div>
          <div className="kurs-bottom">
            <Row>
              <Col lg={6} sm={12}>
                <Button id='btn-2'>Записаться</Button>
              </Col>
              <Col lg={6} sm={12}>
                <Button id='btn-1'>Программа курса</Button>
              </Col>
            </Row>
          </div>
        </Container>
    </div>

  )
}

export default Index