import { Image } from 'react-bootstrap';
import Icon from '../../assets/img/icon.svg';

export const CounterSection = () => {
    return (
        <div className="CounterSection">
            <section className="counter-area pt-100 pb-70 jarallax" data-jarallax='{"speed": 0.3}'>
                <div className="container">
                    <div className="counter-max-wide">
                        <div className="section-title white-title">
                            <span>Why Choose Us</span>
                            <h2>We Have a Lot of Skills in Cyber Security</h2>
                        </div>
        
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <div className="single-counter overly-one">
                                    <div className="overly-two">
                                        <i className='d-flex'><Image src={Icon} width="80"/></i>
                                        <h2>
                                            <span className="odometer" data-count="100">00</span><span className="target">%</span> 
                                        </h2>
                                        <h3>Customer Satisfaction</h3>
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6 col-sm-6">
                                <div className="single-counter overly-one">
                                    <div className="overly-two">
                                        <i className='d-flex'><Image src={Icon} width="80"/></i>
                                        <h2>
                                            <span className="odometer" data-count="100">00</span><span className="target">%</span>  
                                        </h2>
                                        <h3>Quick Responsiveness</h3>
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6 col-sm-6">
                                <div className="single-counter overly-one">
                                    <div className="overly-two">
                                        <i className='d-flex'><Image src={Icon} width="80"/></i>
                                        <h2>
                                            <span className="odometer" data-count="100">00</span><span className="target">%</span> 
                                        </h2>
                                        <h3>Timely Delivery</h3>
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6 col-sm-6">
                                <div className="single-counter overly-one">
                                    <div className="overly-two">
                                        <i className='d-flex'><Image src={Icon} width="80"/></i>
                                        <h2>
                                            <span className="odometer" data-count="24">00</span><span className="target">/</span><span className="odometer" data-count="7">00</span>
                                        </h2>
                                        <h3>Working Time</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}