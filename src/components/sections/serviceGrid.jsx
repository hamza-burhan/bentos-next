import React from 'react'
import { RiGlobalFill, RiPantoneFill, RiQuillPenLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Services</p>
                                    <h2>Quality Services</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card id={1} icon={<RiGlobalFill size={60} />} title={"Custom Web Applications"} description={"I build scalable, production-ready web applications using modern JavaScript stacks. From SaaS platforms to enterprise solutions, I architect performant systems with clean codebases designed to evolve with your business needs and user demands."} />
                        <Card id={2} icon={<RiQuillPenLine size={60} />} title={"API & Backend Development"} description={"I develop robust, secure backend services with Node.js, Express, and cloud platforms. Specializing in database optimization, API speed enhancements, and system architecture that handles real-world traffic loads while maintaining stability and scalability."} />
                        <Card id={3} icon={<RiPantoneFill size={60} />} title={"Frontend Optimization"} description={"I transform sluggish interfaces into lightning-fast user experiences using React/Angular best practices. Every project includes accessibility compliance, Core Web Vitals optimization, and mobile-first responsiveness to maximize engagement and conversion rates."} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}