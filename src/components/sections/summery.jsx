import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import Link from 'next/link';


const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/profile.png"} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I’m Hamza Burhan, a full stack developer.
                                </h2>
                                <p>
                                    I'm Hamza Burhan, a developer with over four years of experience building 
                                    web applications. I craft responsive frontends while 
                                    developing robust backend solutions.
                                </p>
                                <p>
                                    Having delivered solutions for startups and established companies alike, 
                                    I understand how to balance technical excellence with business needs. 
                                    My work focuses on creating efficient systems that solve real business challenges.
                                    What sets my approach apart is a focus on measurable results
                                </p>
                                <div className="hero-btns">
                                    <Link href="/contact" className="theme-btn">Get In touch <i><RiMailSendLine size={16} /></i> </Link>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery