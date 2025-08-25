import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="intro-txt">
        <h4>Hi, iam <span>Yaseen</span></h4>
        <h2>Full Stack Developer</h2>
        <p>Welcome to my portfolio website. Here you can find my projects and skills.</p>
        <div className="links">
          <a href="#contact"><button className="btn">Contact Me</button></a>
          <a href="#projects"><button className="btn">View Projects</button></a>
        </div>
      </div>
    </div>
  )
}

export default Hero