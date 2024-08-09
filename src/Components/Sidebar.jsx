import React from 'react'
import '../Styles/sidebar.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Sidebar = () => {
  return (
    <div className='main'>
      <img src="" alt="" className='profile-image'/>
      <span className='name'>
        Suryansh Chauhan
      </span>

      <div className='sections'>
        
        <span> // 01 Home</span>
        <span> // 02 About me </span>
        <span> // 03 Expertise</span>
        <span> // 04 Projects</span>
        <span> // 05 Contact</span>
      </div>


      <div className="follow">
        Follow me 
        <div className="follow-links">
          <a href="" className='follow-icons'><InstagramIcon/></a>
          <a href="" className='follow-icons'><LinkedInIcon/></a>
          <a href="" className='follow-icons'><GitHubIcon/></a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar