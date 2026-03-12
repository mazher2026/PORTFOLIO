import './Herosection.css'

const HeroSection = () => {
  return (
    <div className='herosection'>

      <div className='profile-picture'>
        <img src="https://mazharismail786.netlify.app/mk.jpeg" alt="Profile Picture" />
      </div>


      <h1 className='main-title'>
        <span>I'm MAZHAR KHASKHELI,</span> Full Stack Developer based in Karachi, Pakistan.
      </h1>


      <p className='main-detail'>I'm a passionate full-stack developer with experience in creating dynamic web applications. I specialize in JavaScript, React, Node.js, and more.</p>



      <div className='buttons'>
        <button>Contact with me</button>
        <button>My resume</button>
      </div>


    </div>
  )
}

export default HeroSection