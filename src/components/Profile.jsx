import React from 'react'
import { AiFillLinkedin ,AiFillGithub ,AiFillInstagram } from 'react-icons/ai';
function Profile() {
    return (
        <section style={{backgroundColor: "#eee"}}>
            <div class="container py-5">
                

                <div class="row">
                    <div class="col-lg-4">
                        <div class="card mb-4">
                            <div class="card-body text-center">
                                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGgix5yOgqtCA/profile-displayphoto-shrink_800_800/0/1660795960799?e=1669248000&v=beta&t=J49KGyFfWXaq6mcGRCmzBZAKuG33_1eny2dHXpCqEyI" alt="avatar"
                                    class="rounded-circle img-fluid" style={{width: "150px"}} />
                                <h5 class="my-3">Subham</h5>
                                <p class="text-muted mb-1">Full Stack Developer</p>
                                <p class="text-muted mb-4">Jamshedpur , Jharkhand</p>
                                <div class="d-flex justify-content-center mb-2">
                                    <button type="button" class="oldsearches">Follow on Linkedin</button>
                                    {/* <button type="button" class="btn btn-outline-primary ms-1">Message</button> */}
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4 mb-lg-0">
                            <div class="card-body p-0">
                                <ul class="list-group list-group-flush rounded-3">
                                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <AiFillLinkedin style={{fontSize:"2rem" }}/>
                                        <p class="mb-0">subham-mahanty-091473239</p>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <AiFillGithub style={{fontSize:"2rem" }}/>
                                        <p class="mb-0">subhammahanty235</p>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <AiFillInstagram style={{fontSize:"2rem" }}/>
                                        <p class="mb-0">mahanty__subham</p>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                        {/* <i class="fab fa-instagram fa-lg" style={{color: "#ac2bac"}}></i> */}
                                        <p class="mb-0">To Be Added</p>
                                    </li>
                                     {/* <li class="list-group-item d-flex justify-content-between align-items-center p-3"> 
                                        <i class="fab fa-facebook-f fa-lg" style={{color: "#3b5998"}}></i> 
                                        <p class="mb-0">mdbootstrap</p>
                                    </li>  */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Full Name</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">Subham Mahanty</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Email</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">subhammahanty235@gmail.com</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Phone</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">+91 9932237171</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Connect in Whatsapp</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">+91 9932237171</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Address</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">Jamshedpur , Jharkhand</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card mb-4 mb-md-0">
                                    <div class="card-body">
                                        <p class="mb-4"><span class="text-primary font-italic me-1">Skills</span> 
                                        </p>
                                        <p class="mb-1" style={{fontSize:".77rem"}}>Frontend Development</p>
                                        <div class="progress rounded" style={{height: "5px"}}>
                                            <div class="progress-bar" role="progressbar" style={{width: "85%" , backgroundColor:"#7560ab"}}></div>
                                        </div>
                                        <p class="mt-4 mb-1" style={{fontSize: ".77rem"}}>Node.js</p>
                                        <div class="progress rounded" style={{height: "5px"}}>
                                            <div class="progress-bar" role="progressbar" style={{width: "60%" , backgroundColor:"#7560ab"}} ></div>
                                        </div>
                                        <p class="mt-4 mb-1" style={{fontSize: ".77rem"}}>Python</p>
                                        <div class="progress rounded" style={{height: "5px"}}>
                                            <div class="progress-bar" role="progressbar" style={{width: "65%" , backgroundColor:"#7560ab"}} ></div>
                                        </div>
                                        <p class="mt-4 mb-1" style={{fontSize: ".77rem"}}>C++</p>
                                        <div class="progress rounded" style={{height: "5px"}}>
                                            <div class="progress-bar" role="progressbar" style={{width: "72%" , backgroundColor:"#7560ab"}} ></div>
                                        </div>
                                        <p class="mt-4 mb-1" style={{fontSize: ".77rem"}}>Bakend API development</p>
                                        <div class="progress rounded mb-2" style={{height: "5px"}}>
                                            <div class="progress-bar" role="progressbar"style={{width: "80%" , backgroundColor:"#7560ab"}} ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card mb-4 mb-md-0">
                                    <div class="card-body">
                                        <p class="mb-4"><span class="text-primary font-italic me-1">Projects</span> With Development Status
                                        </p>
                                        <a href="https://tripperabc.netlify.app/" className='link-primary text-decoration-none'><p class="mb-1" style={{fontSize: ".77rem"}}>Tripper : Travel Bill Splitter (Mern Full Stack) </p></a>
                                        <div class="progress rounded" style={{height: "5px"}}>
                                            <div class="progress-bar" role="progressbar" style={{width: "95%" , backgroundColor:"#7560ab"}}></div>
                                        </div>
                                        <a href="https://cabfarepredictor.netlify.app/" className='link-primary text-decoration-none'><p class="mt-4 mb-1" style={{fontSize: ".77rem"}}>Cab Fare Detector (Frontend Application)</p></a> 
                                        <div class="progress rounded" style={{height: "5px"}}>
                                            <div class="progress-bar" role="progressbar" style={{width: "85%" , backgroundColor:"#7560ab"}} ></div>
                                        </div>
                                        <a href='https://swarl-url.herokuapp.com/' className='link-primary text-decoration-none'><p class="mt-4 mb-1" style={{fontSize: ".77rem"}}>URL Link shortener (Python Flask)</p></a>
                                        <div class="progress rounded" style={{height: "5px"}}>
                                            <div class="progress-bar" role="progressbar" style={{width: "91%" , backgroundColor:"#7560ab"}} ></div>
                                        </div>
                                        <a href='https://github.com/subhammahanty235/Super-Market-Billing-Project' className='link-primary text-decoration-none'><p class="mt-4 mb-1" style={{fontSize: ".77rem"}}>Super Market Billing System (C++)</p></a>
                                        <div class="progress rounded" style={{height: "5px"}}>
                                            <div class="progress-bar" role="progressbar" style={{width: "80%" , backgroundColor:"#7560ab"}} ></div>
                                        </div>
                                        <a className="link-primary text-decoration-none" href='https://github.com/subhammahanty235/PsyBlog-Backend'> <p class="mt-4 mb-1 font-weight-bolder" style={{fontSize: ".77rem"}}> PsyBlog (MERN Fullstack)</p></a>
                                        <div class="progress rounded mb-2" style={{height: "5px"}}>
                                            <div class="progress-bar" role="progressbar" style={{width: "72%" , backgroundColor:"#7560ab"}} ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile