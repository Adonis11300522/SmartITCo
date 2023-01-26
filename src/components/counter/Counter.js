import { Image } from 'react-bootstrap';
import Icon from '../../assets/img/icon.svg';
import CountUp from 'react-countup';

export const CounterSection = () => {
    return (
        <div className="CounterSection">
            <section className="counter-area pt-100 pb-70 jarallax" data-jarallax='{"speed": 0.3}'>
                <div className="container">
                    <div className="counter-max-wide">
                        <div className="section-title white-title">
                            <span>Why Choose Us</span>
                            <h2>We Have a Lot of Skills in Smart IT Service</h2>
                        </div>
        
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <div className="single-counter overly-one">
                                    <div className="overly-two">
                                        <i className='d-flex'><Image src={Icon} width="80"/></i>
                                        <h2>
                                        <CountUp end={91.2} delay={5}/><span className="target">%</span> 
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
                                        <CountUp end={70.3} delay={5}/><span className="target">%</span> 
                                        </h2>
                                        <h3>Net Promoter Score</h3>
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6 col-sm-6">
                                <div className="single-counter overly-one">
                                    <div className="overly-two">
                                        <i className='d-flex'><Image src={Icon} width="80"/></i>
                                        <h2>
                                        <CountUp end={174} delay={5}/>
                                        </h2>
                                        <h3>active world-class clients</h3>
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6 col-sm-6">
                                <div className="single-counter overly-one">
                                    <div className="overly-two">
                                        <i className='d-flex'><Image src={Icon} width="80"/></i>
                                        <h2>
                                        <CountUp delay={5} end={24}/><span className="target">/</span><CountUp delay={5} end={7} />
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