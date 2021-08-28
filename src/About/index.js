import './index.css'
import my_picture from '../images/my_picture.jpg'

function About(){
  return(
    <div className="about wrapper">
      <div className="about__mobile wrapper">
        <img src={my_picture} alt="my pic"/>

        <p>
          I am an enthusiastic software developer, soaking up as much knowledge and practice as I can in an attempt to perfect my craft.
          I am conversant with JavaScript Python/Django, HTML5, CSS, ReactJs, and many other web technologies.
          I am also well-knowledged in UI/UX principles and practices.
          In addition to web development, I am also a technical writer for various publications, simplifying concepts on the web.
        </p>

      </div>
       
    </div>
  )

}

export default About