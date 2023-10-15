import {BsLinkedin, BsTwitter, BsInstagram} from 'react-icons/bs'

export const Footer = () => {
  return (
    <div className="footerContainer">
         <h2>
        Kikapu<span style={{color: '#18D26E'}}>.</span>
      </h2>
      
      <p>copyright 2023</p>

      <div className="FooterSocials">
            <BsLinkedin/>
            <BsTwitter/>
            <BsInstagram/>
      </div>
    </div>
  )
}
