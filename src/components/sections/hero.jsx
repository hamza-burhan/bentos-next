'use client'
import React from 'react'
import Link from 'next/link';
import { RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine, RiArrowRightUpLine } from '@remixicon/react'
import PartnersMarquee from './partnersMarquee';
import SlideUp from '@/utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/profile.png"} alt="About Me" />
                                <h2>Hamza Burhan</h2>
                                <p>I am a Full Stack Developer based in Pakistan.</p>

                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link href="https://www.facebook.com/hamza.burhan.90"><RiFacebookCircleFill size={20} /></Link></li>
                                        <li><Link href="https://x.com/HBurhan70941"><RiTwitterXLine size={20} /></Link></li>
                                        <li><Link href="https://www.linkedin.com/in/hamza-burhan-57223516b/"><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link href="https://github.com/hamza-burhan"><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Hello There!</p>
                                <h2>
                                    I’m Hamza Burhan, a softwere engineer building fast, secure web apps that help businesses grow.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Available</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <Link href="/works" className="theme-btn">View My Work <i><RiArrowRightUpLine size={16} /></i> </Link>
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <PartnersMarquee />
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero