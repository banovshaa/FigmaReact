import React from 'react'
import Training1 from '../assets/training1.svg'
import Training2 from '../assets/training2.svg'
import Training3 from '../assets/training3.svg'
import { Container,Col,Row } from 'react-bootstrap';

const Training = () => {
  return (
    <div className='training-all'>
        <div className="tr-top text-center">
                <h2>Кому подойдёт обучение</h2>
                <p>Кому подойдёт этот курс</p>
        </div>
        <Container>
           <div className="tr-bottom">
              <Row className='g-4'>
                <Col lg={4}>
                    <div className='tr-card'>
                        <div className="card-top">
                            <img src={Training1} alt="training-1" />
                        </div>
                        <div className="card-bottom">
                          <h4>Frontend-разработчикам</h4>
                          <p>Python — отличное решение для разработки серверной части. Расширяйте знания — они помогут повысить вашу стоимость и продвинуться по карьерной лестнице</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='tr-card'>
                        <div className="card-top">
                            <img src={Training2} alt="training-2" />
                        </div>
                        <div className="card-bottom">
                          <h4>Backend-разработчикам</h4>
                          <p>Python содержит много готовых библиотек и является прекрасной альтернативой PHP для быстрой разработки. Вы получите новые возможности развития в профессии и углубите свои навыки</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='tr-card'>
                        <div className="card-top">
                            <img src={Training3} alt="training-3" />
                        </div>
                        <div className="card-bottom">
                          <h4>Middle-разработчикам</h4>
                          <p>Вы сможете участвовать в сложных проектах, связанных с высоконагруженными системами и обработкой больших объёмов данных.</p>
                        </div>
                    </div>
                </Col>
              </Row> 
           </div>
        </Container>
    </div>
  )
}

export default Training