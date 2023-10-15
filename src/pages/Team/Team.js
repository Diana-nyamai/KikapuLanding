import avatar from '../../assets/avatar.png'
import diana from '../../assets/profiles/diana.png'
import bruce from '../../assets/profiles/bruce.png'
import {BsLinkedin, BsTwitter} from 'react-icons/bs'

export const Team = () => {
    const teamInfo = [
        {
            image: bruce,
            name: 'Bruce',
            role: 'Founder',
            linkedin: 'link',
            twitter: 'link'
        },
        {
            image: avatar,
            name: 'Peter',
            role: 'Software Engineer',
            linkedin: 'link',
            twitter: 'link'
        },
        {
            image: diana,
            name: 'Diana',
            role: 'Software Engineer',
            linkedin: 'link',
            twitter: 'link'
        },
        {
            image: avatar,
            name: 'Elie',
            role: 'Software Engineer',
            linkedin: 'link',
            twitter: 'link'
        }
    ]
  return (
    <div className="teamContainer">
      <h2>Meet the <span style={{color: '#18D26E'}}>team</span> 
      </h2>
      <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto autem molestiae officiis numquam iste tenetur necessitatibus</p>

      <div className="teamList">
        {
            teamInfo.map((list, index)=>{
                return(
                    <div className='personCard'>
                        <div className="personImg">
                            <img src={list.image} alt="person" />
                        </div>
                        
                        <div className="personContent">
                            <p style={{fontSize: '24px'}}><b>{list.name}</b></p>
                        <p>{list.role}</p>
                        <div className="socials">
                            <BsLinkedin title="linkedin"/>
                            <BsTwitter title="twitter"/>
                        </div>
                        </div>
                        
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

