import fruitBasket from '../../assets/fruitBasket.png'

export const About = () => {
    return ( 
        <div className="aboutContainer">
            <div className="leftAbout">
                <img src={fruitBasket} alt="FruitBasket" />
            </div>
            <div className="rightAbout">
                <p className='line'></p>
                <p style={{color: '#18D26E', margin: '10px 0', fontSize: '20px'}}>Welcome</p>
                <h2>What is <span style={{color: '#18D26E'}}>kikapu</span></h2>
                <p className='aboutText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ratione quis asperiores quam quibusdam quia amet, quaerat nulla, beatae laborum doloremque aliquid dolor alias sit incidunt modi! Corrupti, ab dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, distinctio unde? Sed provident sunt odio, quibusdam hic blanditiis! Nihil laborum enim commodi itaque laboriosam! Incidunt sint ex omnis beatae distinctio.</p>
            </div>
        </div>
     );
}
 