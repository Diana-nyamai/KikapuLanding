import { Link } from 'react-router-dom'
import womanFruits from '../../assets/womanFruits.png'
import playStore from '../../assets/icons/playStore.png'
import appStore from '../../assets/icons/appStore.png'

export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeLeft">
        <div className="homeLeftContent">
          <p>Revolutionizing Food Supply Chain for Africa's University <span style={{color: '#18D26E'}}>Students</span> </p>
        <p className="leftText">Kikapu provides food supply chain data-driven payment services that connects food producers (farmers), restaurants and university students (consumers)in Africa through a demand and supply simulation model.</p>

        <h3><span style={{color: '#18D26E'}}>DOWNLOAD</span> APP NOW</h3>
        <div className="appLinks">
          <Link to={'#'}><img src={playStore} alt='playStore'/></Link>
          <Link to={'#'}><img src={appStore} alt='appStore'/></Link>
        </div>
        </div>
        
      </div>
      <div className="homeRight">
        <img src={womanFruits} alt="LadyWithBasket" />
      </div>
    </div>
  )
}

