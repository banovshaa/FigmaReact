import React from 'react'
import { Container,Col,Row } from 'react-bootstrap';
import JS from '../assets/javascript.svg'
import HTML from '../assets/html.svg'
import CSS from '../assets/css.svg'
import PYTHON from '../assets/python.svg'


const Program = () => {
  return (
    <div className='program-all'>
        <Container>
            <div className="pr-top">
                <h2>ПРОГРАММА КУРСА</h2>
                <p>Учебные программы от основ до практики. Для тех, кто хочет получить новую профессию, собрать портфолио и найти работу</p>
                <div className='line'></div>
            </div>
            <div className="pr-bottom">
                <Row className='g-4'>
                    <Col lg={6}>
                        <div className="pr-box d-flex align-items-center">
                            <div className="pr-box-left">
                                <img src={JS} alt="js" />
                            </div>
                            <div className="pr-box-right px-5">
                                <h4> JavaScript</h4>
                                <p>Единственный язык программирования, работающий в браузере. Главный инструмент фронтенд-программиста</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="pr-box d-flex align-items-center">
                            <div className="pr-box-left">
                                <img src={HTML} alt="js" />
                            </div>
                            <div className="pr-box-right px-5">
                                <h4> HTML </h4>
                                <p>Языки создания веб-страниц. Описывают их структуру (расположение блоков) и внешний вид. Отвечают за форматирование текста</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="pr-box d-flex align-items-center">
                            <div className="pr-box-left">
                                <img src={CSS} alt="js" />
                            </div>
                            <div className="pr-box-right px-5">
                                <h4> CSS</h4>
                                <p>Языки создания веб-страниц. Описывают их структуру (расположение блоков) и внешний вид. Отвечают за форматирование текста</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="pr-box d-flex align-items-center">
                            <div className="pr-box-left">
                                <img src={PYTHON} alt="js" />
                            </div>
                            <div className="pr-box-right px-5">
                                <h4>Python Basic</h4>
                                <p>На Python создают веб-приложения и нейросети, проводят научные вычисления и автоматизируют процессы. </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Program