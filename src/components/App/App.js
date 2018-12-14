import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './owl.carousel.css';
import './swipebox.css';

class App extends Component {
  render() {
    return (
      <div>
  {/*header*/}
  <div className="header" id="home">
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="index.html">Home <span className="sr-only">(current)</span></a></li>
              <li><a href="#about" className="scroll">About</a></li>
              <li><a href="#services" className="scroll">Services</a></li>
              <li><a href="#work" className="scroll">Work</a></li>
              <li><a href="#team" className="scroll">Team</a></li>
              <li><a href="#news" className="scroll">News</a></li>
              <li><a href="#testimonials" className="scroll">Testimonials</a></li>
              <li><a href="#contact" className="scroll">Contact</a></li>
            </ul>
            <div className="social-icons">
              <a href="#"><i className="icon" /></a>
              <a href="#"><i className="icon1" /></a>
              <a href="#"><i className="icon2" /></a>
              <a href="#"><i className="icon3" /></a>
            </div>
            <div className="clearfix" />
          </div>{/* /.navbar-collapse */}
          {/* /.container-fluid */}
        </div>
      </nav>
      <div className="header-bottom">
        <div className="navbar-brand">
          <h1><a href="index.html">Profession</a></h1>
        </div>
      </div>
    </div>
  </div>  
  {/*header*/}
  {/*banner*/}  
  <div className="banner-section">
    <div className="slider">
      <div className="callbacks_container">
        <ul className="rslides" id="slider">
          <li>
            <img src="images/banner1.jpg" alt />
            <div className="caption">
              <h3>Graphic Web Designer</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknowns.</p>
            </div>
          </li>
          <li>
            <img src="images/banner2.jpg" alt />
            <div className="caption">
              <h3>Made Graphic Design</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknowns.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/*banner*/}  
  <div className="content">
    {/*about*/}
    <div className="about-setion" id="about">
      <div className="container">
        <h2 className="tittle">About Us</h2>
        <div className="about-grids">
          <div className="col-md-3 about-grid-w3l-agileifo">
            <div className="icons">
              <i className="glyphicon glyphicon-cloud" aria-hidden="true" />
            </div>
            <h4>Easy to customize</h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor. reprehenderit</p>
          </div>
          <div className="col-md-3 about-grid-w3l-agileifo">
            <div className="icons">
              <i className="glyphicon glyphicon-leaf" aria-hidden="true" />
            </div>
            <h4>Fresh and Clean</h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor. reprehenderit</p>
          </div>
          <div className="col-md-3 about-grid-w3l-agileifo">
            <div className="icons">
              <i className="glyphicon glyphicon-heart" aria-hidden="true" />
            </div>
            <h4>Labore et dolore</h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor. reprehenderit</p>
          </div>
          <div className="col-md-3 about-grid-w3l-agileifo">
            <div className="icons">
              <i className="glyphicon glyphicon-cog" aria-hidden="true" />
            </div>
            <h4>Sed do eiusmod</h4>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor. reprehenderit</p>
          </div>
          <div className="clearfix" />
        </div>
        <div className="about-top">
          <img src="images/1.png" />
        </div>
      </div>
      {/*about*/}
    </div>
    <div className="work-section" id="work">
      <div className="container">
        <h3 className="tittle">Recent Works</h3>
        <ul className="simplefilter">
          <li className="active" data-filter="all">All</li>
          <li data-filter={1}>Branding</li>
          <li data-filter={2}>Web</li>
          <li data-filter={3}>Logo Design</li>
          <li data-filter={4}>Photography</li>
        </ul>
        <div className="filtr-container">
          <div className=" col-md-4 filtr-item" data-category="1, 5" data-sort="Busy streets">
            <a href="images/pc.jpg" className="b-link-stripe b-animate-go  swipebox">
              <div className="ed-gal-effect slow-zoom horizontal">
                <div className="img-box"><img src="images/pc.jpg" className="img-responsive" alt=" " /></div>
                <div className="ed-text-box">
                  <div className="ed-gal-text">
                    <h4>Profession</h4>
                    <p>Sit accusamus, vel blanditiis iure minima ipsa molestias minus laborum velit, nulla.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 filtr-item" data-category="2, 5" data-sort="Luminous night">
            <a href="images/pc1.jpg" className="b-link-stripe b-animate-go  swipebox">
              <div className="ed-gal-effect slow-zoom horizontal">
                <div className="img-box"><img src="images/pc1.jpg" className="img-responsive" alt=" " /></div>
                <div className="ed-text-box">
                  <div className="ed-gal-text">
                    <h4>Profession</h4>
                    <p>Sit accusamus, vel blanditiis iure minima ipsa molestias minus laborum velit, nulla.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 filtr-item" data-category="1, 4" data-sort="City wonders">
            <a href="images/pc2.jpg" className="b-link-stripe b-animate-go  swipebox">
              <div className="ed-gal-effect slow-zoom horizontal">
                <div className="img-box"><img src="images/pc2.jpg" className="img-responsive" alt=" " /></div>
                <div className="ed-text-box">
                  <div className="ed-gal-text">
                    <h4>Profession</h4>
                    <p>Sit accusamus, vel blanditiis iure minima ipsa molestias minus laborum velit, nulla.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className=" col-md-4 filtr-item" data-category={3} data-sort="In production">
            <a href="images/pc3.jpg" className="b-link-stripe b-animate-go  swipebox">
              <div className="ed-gal-effect slow-zoom horizontal">
                <div className="img-box"><img src="images/pc3.jpg" className="img-responsive" alt=" " /></div>
                <div className="ed-text-box">
                  <div className="ed-gal-text">
                    <h4>Profession</h4>
                    <p>Sit accusamus, vel blanditiis iure minima ipsa molestias minus laborum velit, nulla.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 filtr-item" data-category="3, 4" data-sort="Industrial site">
            <a href="images/pc4.jpg" className="b-link-stripe b-animate-go  swipebox">
              <div className="ed-gal-effect slow-zoom horizontal">
                <div className="img-box"><img src="images/pc4.jpg" className="img-responsive" alt=" " /></div>
                <div className="ed-text-box">
                  <div className="ed-gal-text">
                    <h4>Profession</h4>
                    <p>Sit accusamus, vel blanditiis iure minima ipsa molestias minus laborum velit, nulla.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 filtr-item" data-category="2, 4" data-sort="Peaceful lake">
            <a href="images/pc5.jpg" className="b-link-stripe b-animate-go  swipebox">
              <div className="ed-gal-effect slow-zoom horizontal">
                <div className="img-box"><img src="images/pc5.jpg" className="img-responsive" alt=" " /></div>
                <div className="ed-text-box">
                  <div className="ed-gal-text">
                    <h4>Profession</h4>
                    <p>Sit accusamus, vel blanditiis iure minima ipsa molestias minus laborum velit, nulla.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4  filtr-item" data-category="1, 5" data-sort="City lights">
            <a href="images/pc6.jpg" className="b-link-stripe b-animate-go  swipebox">
              <div className="ed-gal-effect slow-zoom horizontal">
                <div className="img-box"><img src="images/pc6.jpg" className="img-responsive" alt=" " /></div>
                <div className="ed-text-box">
                  <div className="ed-gal-text">
                    <h4>Profession</h4>
                    <p>Sit accusamus, vel blanditiis iure minima ipsa molestias minus laborum velit, nulla.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 filtr-item" data-category="2, 4" data-sort="Dreamhouse">
            <a href="images/pc7.jpg" className="b-link-stripe b-animate-go  swipebox">
              <div className="ed-gal-effect slow-zoom horizontal">
                <div className="img-box"><img src="images/pc7.jpg" className="img-responsive" alt=" " /></div>
                <div className="ed-text-box">
                  <div className="ed-gal-text">
                    <h4>Profession</h4>
                    <p>Sit accusamus, vel blanditiis iure minima ipsa molestias minus laborum velit, nulla.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4 filtr-item" data-category={3} data-sort="Dreamhouse">
            <a href="images/pc8.jpg" className="b-link-stripe b-animate-go  swipebox">
              <div className="ed-gal-effect slow-zoom horizontal">
                <div className="img-box"><img src="images/pc8.jpg" className="img-responsive" alt=" " /></div>
                <div className="ed-text-box">
                  <div className="ed-gal-text">
                    <h4>Profession</h4>
                    <p>Sit accusamus, vel blanditiis iure minima ipsa molestias minus laborum velit, nulla.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
    {/*services*/}
    <div className="services" id="services">
      <div className="container">
        <h3 className="tittle1"> Our Services</h3>
        <div className="services-grids">
          <div className="col-md-4 services-grid-w3layouts-agileits">
            <div className="icon-left">
              <i className="glyphicon glyphicon-globe" aria-hidden="true" />
            </div>
            <div className="ser-right">
              <h4>Branding</h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            </div>
            <div className="clearfix" />
          </div>
          <div className="col-md-4 services-grid-w3layouts-agileits">
            <div className="icon-left">
              <i className="glyphicon glyphicon-time" aria-hidden="true" />
            </div>
            <div className="ser-right">
              <h4>Web Design</h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            </div>
            <div className="clearfix" />
          </div>
          <div className="col-md-4 services-grid-w3layouts-agileits">
            <div className="icon-left">
              <i className="glyphicon glyphicon-signal" aria-hidden="true" />
            </div>
            <div className="ser-right">
              <h4>App Design</h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            </div>
            <div className="clearfix" />
          </div>
          <div className="clearfix" />
        </div>
        <div className="services-grids">
          <div className="col-md-4 services-grid-w3layouts-agileits">
            <div className="icon-left">
              <i className="glyphicon glyphicon-thumbs-up" aria-hidden="true" />
            </div>
            <div className="ser-right">
              <h4>Logo Design</h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            </div>
            <div className="clearfix" />
          </div>
          <div className="col-md-4 services-grid-w3layouts-agileits">
            <div className="icon-left">
              <i className="glyphicon glyphicon-cog" aria-hidden="true" />
            </div>
            <div className="ser-right">
              <h4>Branding</h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            </div>
            <div className="clearfix" />
          </div>
          <div className="col-md-4 services-grid-w3layouts-agileits">
            <div className="icon-left">
              <i className="glyphicon glyphicon-leaf" aria-hidden="true" />
            </div>
            <div className="ser-right">
              <h4>Development</h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            </div>
            <div className="clearfix" />
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
    {/*services*/}
    <div className="what-section">
      <div className="container">
        <div className="what-grids">
          <div className="col-md-6 test-list">
            <h3 className="tittle2">Why People like us?</h3>
            <div className="tab1 wow bounceIn" data-wow-delay="0.4s">
              <ul>
                <li><span> </span></li>
                <li className="text">Olypian quarrel  gorilla congolium</li>
              </ul>
              <p>Lorem ipsum dolor amet, libero turpis non cras ligula, id commodo, aenean est in volutpat amet sodales, 
                porttitor bibendum facilisi suspendisse, aliquam ipsum ante morbi sed ipsum mollis.</p>
            </div>
            <div className="tab2 wow bounceIn" data-wow-delay="0.4s">
              <ul>
                <li><span> </span></li>
                <li className="text">Defacto lingo est igpay atinlay quee</li>
              </ul>
              <p>Lorem ipsum dolor amet, libero turpis non cras ligula, id commodo, aenean est in volutpat amet sodales, 
                porttitor bibendum facilisi suspendisse, aliquam ipsum ante morbi sed ipsum mollis.</p>
            </div>
            <div className="tab3 wow bounceIn" data-wow-delay="0.4s">
              <ul>
                <li><span> </span></li>
                <li className="text">How to install Wordpress</li>
              </ul>
              <p>Lorem ipsum dolor amet, libero turpis non cras ligula, id commodo, aenean est in volutpat amet sodales, 
                porttitor bibendum facilisi suspendisse, aliquam ipsum ante morbi sed ipsum mollis.</p>
            </div>
            <div className="tab4 wow bounceIn" data-wow-delay="0.4s">
              <ul>
                <li><span> </span></li>
                <li className="text">Epsum factorial non deposit </li>
              </ul>
              <p>Lorem ipsum dolor amet, libero turpis non cras ligula, id commodo, aenean est in volutpat amet sodales, 
                porttitor bibendum facilisi suspendisse, aliquam ipsum ante morbi sed ipsum mollis.</p>
            </div>
            <div className="tab5 wow bounceIn" data-wow-delay="0.4s">
              <ul>
                <li><span> </span></li>
                <li className="text">Quid pro quo hic escorol</li>
              </ul>
              <p>Lorem ipsum dolor amet, libero turpis non cras ligula, id commodo, aenean est in volutpat amet sodales, 
                porttitor bibendum facilisi suspendisse, aliquam ipsum ante morbi sed ipsum mollis.</p>
            </div>
            <div className="tab6 wow bounceIn" data-wow-delay="0.4s">
              <ul>
                <li><span> </span></li>
                <li className="text">Can the Theme be translated?</li>
              </ul>
              <p>Lorem ipsum dolor amet, libero turpis non cras ligula, id commodo, aenean est in volutpat amet sodales, 
                porttitor bibendum facilisi suspendisse, aliquam ipsum ante morbi sed ipsum mollis.</p>
            </div>
          </div>
          <div className="col-md-6 bar-grid">
            <h3 className="tittle2">Our Skills </h3>
            <div className="bar_group">
              <div className="bar_group__bar thin" label="Wordpress" show_values="true" tooltip="true" value={343} />
              <div className="bar_group__bar thin" label="Joomla" show_values="true" tooltip="true" value={235} />
              <div className="bar_group__bar thin" label="Drupal" show_values="true" tooltip="true" value={975} />
              <div className="bar_group__bar thin" label="Magento" show_values="true" tooltip="true" value={456} />
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
    {/*team*/}
    <div className="team" id="team">
      <div className="container">
        <h3 className="tittle3"> Our Team</h3>
        <div className="team-grids">
          <div className="col-md-3 team-grid">
            <div className="team-img">
              <img src="images/t1.jpg" className="img-responsive" alt=" " />
              <figcaption className="overlay">
                <h5>voluptatem quia voluptas </h5>
                <p>sit aspernatur aut odit aut fugit,</p>
                <div className="social-icon">
                  <a href="#"><i className="icon" /></a>
                  <a href="#"><i className="icon1" /></a>
                  <a href="#"><i className="icon2" /></a>
                </div>
              </figcaption>
            </div>
            <h4>John Filmr Doe</h4>
            <span>Managing Director</span>
          </div>
          <div className="col-md-3 team-grid">
            <div className="team-img">
              <img src="images/t3.jpg" className="img-responsive" alt=" " />
              <figcaption className="overlay">
                <h5>voluptatem quia voluptas </h5>
                <p>sit aspernatur aut odit aut fugit,</p>
                <div className="social-icon">
                  <a href="#"><i className="icon" /></a>
                  <a href="#"><i className="icon1" /></a>
                  <a href="#"><i className="icon2" /></a>
                </div>
              </figcaption>
            </div>
            <h4>Jaye Smith</h4>
            <span>Lead Developer</span>
          </div>
          <div className="col-md-3 team-grid">
            <div className="team-img">
              <img src="images/t2.jpg" className="img-responsive" alt=" " />
              <figcaption className="overlay">
                <h5>voluptatem quia voluptas </h5>
                <p>sit aspernatur aut odit aut fugit,</p>
                <div className="social-icon">
                  <a href="#"><i className="icon" /></a>
                  <a href="#"><i className="icon1" /></a>
                  <a href="#"><i className="icon2" /></a>
                </div>
              </figcaption>
            </div>
            <h4>Mike Arney</h4>
            <span>Sr. UI Designer</span>
          </div>
          <div className="col-md-3 team-grid">
            <div className="team-img">
              <img src="images/t4.jpg" className="img-responsive" alt=" " />
              <figcaption className="overlay">
                <h5>voluptatem quia voluptas </h5>
                <p>sit aspernatur aut odit aut fugit,</p>
                <div className="social-icon">
                  <a href="#"><i className="icon" /></a>
                  <a href="#"><i className="icon1" /></a>
                  <a href="#"><i className="icon2" /></a>
                </div>
              </figcaption>
            </div>
            <h4>Michele Lampa</h4>
            <span>Managing Director</span>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
    {/*team*/}
    <div className="news-section" id="news">
      <div className="container">
        <h3 className="tittle">Latest News</h3>
        <div className="news-grids wow fadeInRight animated" data-wow-delay=".5s">
          <div className="col-md-4 new-grid">
            <img src="images/n1.jpg" className="img-responsive" />
          </div>
          <div className="col-md-8 new-grid1 hvr-bounce-to-right">
            <h5><i className="glyphicon glyphicon-calendar" aria-hidden="true" /> 25 November 2015 </h5>
            <h4><a href="#" className="new-gri" data-toggle="modal" data-target="#myModal1">Fusce euismod consequat ante Lorem ipsum dolor sit amet</a></h4>
            <p>Nam aliquam pretium feugiat. Duis sem est, viverra eu interdum ac, suscipit nec mauris. Suspendisse commodo tempor sagittis! In justo est, sollicitudin eu scelerisque pretium, placerat eget elit. Praesent faucibus rutrum odio at rhoncus. Pel ermentum pretium.</p>
          </div>
          <div className="clearfix" />
        </div>
        <div className="news-grids wow fadeInLeft animated" data-wow-delay=".5s">
          <div className="col-md-4 new-grid">
            <img src="images/n2.jpg" className="img-responsive" />
          </div>
          <div className="col-md-8 new-grid1 hvr-bounce-to-right">
            <h5><i className="glyphicon glyphicon-calendar" aria-hidden="true" /> 25 November 2015 </h5>
            <h4><a href="#" className="new-gri" data-toggle="modal" data-target="#myModal1">Fusce euismod consequat ante Lorem ipsum dolor sit amet</a></h4>
            <p>Nam aliquam pretium feugiat. Duis sem est, viverra eu interdum ac, suscipit nec mauris. Suspendisse commodo tempor sagittis! In justo est, sollicitudin eu scelerisque pretium, placerat eget elit. Praesent faucibus rutrum odio at rhoncus. Pel ermentum pretium.</p>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
    {/*-news-*/}
    <div className="testimonials wow bounceIn animated" data-wow-delay="0.4s" style={{visibility: 'visible', WebkitAnimationDelay: '0.4s'}} id="testimonials">
      <div className="container">
        <h3 className="tittle1">Testimonials</h3>
        <div className="test-monials">
          {/* start content_slider */}
          <div id="owl-demo" className="owl-carousel">
            <div className="item">
              <div className="testmonial-text">
                <p>Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur. Sed in lacus ut enim adipiscing aliquet. Nulla venena tis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor. </p>
                <img src="images/t-1.jpg" className="img-responsive" alt />
                <h4><a href="#">Robert Smith</a></h4>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="item">
              <div className="testmonial-text">
                <p>Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur. Sed in lacus ut enim adipiscing aliquet. Nulla venena tis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor. </p>
                <img src="images/t-2.jpg" className="img-responsive" alt />
                <h4><a href="#">Mark Trand</a></h4>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="item">
              <div className="testmonial-text">

                <p>Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur. Sed in lacus ut enim adipiscing aliquet. Nulla venena tis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor. </p>
                <img src="images/t-1.jpg" className="img-responsive" alt />
                <h4><a href="#">John Doe</a></h4>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*-- testmonials --*/}
  <div className="contact" id="contact">
    <div className="container">
      <h3 className="tittle1">Mail Us</h3>
      <div className="contact-grids">
        <div className="col-md-6 contact-grid-left">
          <form action="#" method="post">
            <input type="text" name="Name" defaultValue="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required />
            <input type="text" name="Phone" defaultValue="Phone" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Phone';}" required />
          </form>
        </div>
        <div className="col-md-6 contact-grid-left">
          <form action="#" method="post">
            <input type="email" name="Email" defaultValue="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required />
            <input type="text" name="Subject" defaultValue="Subject" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Subject';}" required />
          </form>
        </div>
        <div className="clearfix"> </div>
        <form action="#" method="post">
          <textarea type="text" name="Message" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required defaultValue={"Message..."} />
          <input type="submit" defaultValue="Submit Now" />
        </form>
      </div>
      <div className="google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2330.0049350365944!2d106.66282248426675!3d10.842991586721816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a506e4c1ab%3A0xf33230dc5e45222e!2zMTI5IMSQxrDhu51uZyBz4buRIDgsIFBoxrDhu51uZyAxMSwgR8OyIFbhuqVwLCBI4buTIENow60gTWluaCA3MDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2sin!4v1544768414149" />
      </div>
    </div>
  </div>
  {/*footer*/}
  <div className="copy-section">
    <div className="container">
      <div className="footer-top">
        <p>© 2016 Profession. All rights reserved | Design by <a href="http://w3layouts.com">W3layouts</a></p>
      </div>
    </div>
  </div>
  <a href="#home" className="scroll" id="toTop" style={{display: 'block'}}> <span id="toTopHover" style={{opacity: 1}}> </span></a>
  <div className="modal fade" id="myModal1" tabIndex={-1} role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content modal-info">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>            
        </div>
        <div className="modal-body">
          <div className="news-gr">
            <img src="images/pc1.jpg" className="img-responsive" />
            <h3 className="tittle1">Profession</h3>
            <p>Nam aliquam pretium feugiat. Duis sem est, viverra eu interdum ac, suscipit nec mauris. Suspendisse commodo tempor sagittis! In justo est, sollicitudin eu scelerisque pretium, placerat eget elit. Praesent faucibus rutrum odio at rhoncus. Pel ermentum pretium. Maecenas ac lacus ut neque rhoncus laoreet sed id tellus. Donec justo tellus.</p>
            <p>Nam aliquam pretium feugiat. Duis sem est, viverra eu interdum ac, suscipit nec mauris. Suspendisse commodo tempor sagittis! In justo est, sollicitudin eu scelerisque pretium, placerat eget elit. Praesent faucibus rutrum odio at rhoncus. Pel ermentum pretium. Maecenas ac lacus ut neque rhoncus laoreet sed id tellus. Donec justo tellus.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*startsmothscrolling*/}
  {/*endsmothscrolling*/}
  {/* Include jQuery & Filterizr */}
  {/* Kick off Filterizr */}
  {/*gallery*/}
  {/*--sreen-gallery-cursual--*/}
  <div className="sreen-gallery-cursual">
    {/* requried-jsfiles-for owl */}
   
    {/* //requried-jsfiles-for owl */}
    {/*startsmothscrolling*/}
    
    {/* //swipe box js */}
    {/* script for tabs */}
    {/* script for tabs */}
  </div></div>

    );
  }
}

export default App;
