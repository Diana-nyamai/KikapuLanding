import womanFruits from '../../assets/womanFruits.png'

export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeLeft">
        <div className="homeLeftContent">
          <p>Revolutionizing Food Supply Chain for Africa's University <span style={{color: '#18D26E'}}>Students</span> </p>
        <p className="leftText">Kikapu provides food supply chain data-driven payment services that connects food producers (farmers), restaurants and university students (consumers)in Africa through a demand and supply simulation model.</p>

        <button className="getStarted">Get Started</button>

        </div>
        
      </div>
      <div className="homeRight">
        <img src={womanFruits} alt="LadyWithBasket" />
      </div>
    </div>
  )
}

