import wallet from '../../assets/icons/wallet.png'
import foodCredit from '../../assets/icons/foodCredit.png'
import marketplace from '../../assets/icons/marketPlace.png'
import demand from '../../assets/icons/demand&supply.png'
import speedee from '../../assets/icons/speedee.png'
import featurePhone from '../../assets/icons/featurePhone.png'

export const Features = () => {
    const featuresList = [
        {icon: wallet, title: 'Mobile Wallet'},
        {icon: foodCredit, title: 'Food credit'},
        {icon: marketplace, title: 'Dynamic Marketplace'},
        {icon: demand, title: 'Demand & supply'},
        {icon: speedee, title: 'Speedee service system'}
    ]
  return (
    <div className="FeaturesContainer">
      <h2><span style={{color: '#18D26E'}}>OUR</span> FEATURES</h2>
      <p className="fText">
          In Africa, 150+ million university and college students face the
          pressing issue of food insecurity due to limited financial resources.
          Kikapu provides food supply chain data-driven payment services that
          connects food producers (farmers), restaurants and university students
          (consumers)in Africa through a demand and supply simulation model
        </p>
      <div className="featuresBox">
        
        <div className="featuresList">

          <img src={featurePhone} alt="featurePhone" />
          {/* {
            featuresList.map((list, index )=> 
              <div className="list" key={index}>
                <img src={list.icon} alt='icons'/>
                 <p>{list.title}</p> 
              </div>
              )
          } */}
        </div>
      </div>
    </div>
  );
};
