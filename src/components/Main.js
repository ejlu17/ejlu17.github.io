import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          Hi! 😄
          </p>
          <p>
          My name is Erica Lu, and I am a second year student at Northeastern University. 
          Currently, I am pursuing a bioengineering degree with a double minor in business 
          and law. 
          </p>
          <p>
          I aim to achieve my interests in product development, consulting, marketing communications, 
          research, and data analytics. I am motivated to further learn and take part in these rapidly growing 
          industries.
          </p>
          <p>
          As of now, I am involved in various activities such as Phi Sigma Rho Engineering Sorority, 
          Society of Asian Scientists and Engineers, Biomedical Engineering Society, and Consulting and Advisory 
          Student Experience. 
          </p>
          <p>
          In my free time, I enjoy reading at cafes, cooking fusion dishes, upcyling clothing pieces, 
          watching professional soccer, and playing the piano.
          </p>
          <p>
          Here is my possibly up-to-date{' '}
          <a href="https://drive.google.com/file/d/1AaIXiuT-rO1AzDXss3fEJ_4q33E0UD1e/view?usp=sharing">resume</a>.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            2021 Website Portfolio, Personal Project - (1) Leveraged programming knowledge in ReactJS and Gatsby to 
            build a personal website; (2) Used GitHub to source code and publish it
          </p>
          <p>
            2021 Logo Redesign,{' '}
          <a href="https://www.theranano.com/">Theranano Technologies</a> - (1) Researched color schemes and historical 
            medical symbols in a team of four, focused on incorporating the idea of nanoparticle delivery 
            and revitalization into the redesign; (2) Drafted new trademarks using Adobe Create with the 
            intention of rebranding and attracting consumers
          </p>
          <p>
            2021{' '}
          <a href="https://drive.google.com/file/d/10-gHGadO-fpdN7go5-ruR6RImBhoIwUm/view?usp=sharing">Autonomous Testing Agent Project</a>, 
          Cornerstone of Engineering II - (1) Brainstormed technical solutions for shortages brought on by COVID-19 in a team of four; 
          (2) Utilized knowledge in basic ciruitry, AutoCAD, and C++ to successfully create an autonomous rapid test bot for consumers to easily use
          </p>
          <p>
            2020{' '}
          <a href="https://drive.google.com/file/d/1bD3hzPvuTXHkEXPZYKbtaxki9n3Mgt4t/view?usp=sharing/">Lockbox Project</a>, Cornerstone of 
          Engineering I - (1) Applied circuity, AutoCAD, and C++ capabilities to produce a secure dual mechanism lockbox; (2) Acted as a project 
          leader in a group of four to facilitate a collaborative learning environment
          </p>
          <p>
            2019 Website Design,{' '}
          <a href="https://www.karmatrade.shop/">Karma Trade</a> - (1) Utilized WordPress in a team of two to design a UI optimized website 
            that encourages organic traffic; (2) Developed a visual-heavy immersive web format to increase consumer 
            interaction
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Activities</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            {' '}
          <a href="http://www.phisigmarho.org/">Phi Sigma Rho Engineering Sorority</a>, Service Chair - (1) Coordinate community 
          involvement and fundraising events with nearby organizations, raised approximately $1,200 so far and donated more than 150 handmade 
          items in three hours; (2) Promote activities by posting on social media and handing out fliers, 30% increase in usual turnout; (3) 
          Mentor new members with the goal of building a strong sense of support and community  
          </p>
          <p>
          {' '}
          <a href="https://web.northeastern.edu/sase/">Society for Asian Scientists and Engineers</a>, Member
          </p>
          <p>
          {' '}
          <a href="https://www.northeastern.edu/bmes/">Biomedical Engineering Society</a>, Member
          </p>
          <p>
            {' '}
          <a href="https://4h.extension.illinois.edu/">4-H Science and Health Organization</a>, Leadership and Strategy Committee - (1) Introduced 
          the younger community to STEM principles biweekly by preparing materials for physical builds and teaching basic programming skills on 
          Scratch; (2) Pesented as a role model and resource that assisted students in their education and personal maturation 
          </p>
          <p>
            {' '}
          <a href="https://english.ocac.gov.tw/OCAC/Eng/">Formosa Association of Student Cultural Ambassadors</a>, Events Committee - (1) Facilitated events 
          and organized projects that encouraged East Asian cultural awareness; (2) Served as a student spokesman to represent marginal issues and connect 
          communities together; (3) Fostered an inclusive environment conductive to learning, accepting, and succeeding
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/erica-lu-14b134197/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/erica.lu17/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/erica.lu17/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ejlu17"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
