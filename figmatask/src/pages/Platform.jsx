import React from 'react'
import Platform1 from '../assets/platform1.png'
import Platform2 from '../assets/platform2.png'
import Platform3 from '../assets/platform3.png'
import { Container,Col,Row,Button } from 'react-bootstrap';

const Platform = () => {
  return (
    <div className='platform-all'>
        <Container>
            <Row>
              <Col lg={6} md={12}>
               <div className="plt-left">
                <h2>О ПЛАТФОРМЕ</h2>
                <p>Миссия Edutech — дать возможность каждому быть актуальным и востребованным специалистом прямо сейчас. Вне зависимости от возраста и географии.Мы предлагаем большой выбор курсов дл профессионального и личностного развития.  </p>
                <Button className='ms-0' id='btn-2'>Записаться</Button>
               </div>
              </Col>
              <Col lg={6} sm={12}>
                <div className="plt-right">
                    <div className="box">
                        <Row>
                        <Col lg={4} sm={12}>
                            <div className="box-left">
                                <img className='img-fluid' src={Platform1} alt="platform-1" />
                            </div>
                        </Col>
                        <Col lg={8} sm={12}>
                            <div className="box-right">
                                <p>Каждый наш преподаватель полностью ведет курируемую группу и заинтернсован в успешном выпуске  каждого студента.</p>
                            </div>
                        </Col>
                        </Row>
                    </div>
                    <div className="box">
                        <Row>
                        <Col lg={4} sm={12}>
                            <div className="box-left">
                                <img className='img-fluid' src={Platform2} alt="platform-2" />
                            </div>
                        </Col>
                        <Col lg={8} sm={12}>
                            <div className="box-right">
                                <p>У нас активный, оживленный образовательный процесс, теория чередуется с практикой.Чего у нас точно нет, так это скучных лекций.</p>
                            </div>
                        </Col>
                        </Row>
                    </div>
                    <div className="box">
                        <Row>
                        <Col lg={4} sm={12}>
                            <div className="box-left">
                                <img className='img-fluid' src={Platform3} alt="platform-3" />
                            </div>
                        </Col>
                        <Col lg={8} sm={12}>
                            <div className="box-right">
                                <p>Выпускники получают официальный документ установленного образца: удостоверение о повышении квалификации или диплом о профессиональной переподготовке.</p>
                            </div>
                        </Col>
                        </Row>
                    </div>
                </div>
              </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Platform