import create from '../../assets/icons/create.png'
import group from '../../assets/icons/group.png'
import arrow from '../../assets/icons/arrow.svg'

export const Cards = () => {
  return (
    <div className="cardsContainer">
        <div className="cardHolder">
            <div className="card">
            <p><img className='createImg' src={create} alt="createIcon" /></p>
            <p><b>Create your first page</b></p>
            <div className='cardText'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p><img src={arrow} alt="arrowIcon" /></p>
            </div>
        </div>
        <div className="card">
            <p><img className='createImg' src={create} alt="createIcon" /></p>
            <p><b>Create your first page</b></p>
            <div className='cardText'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p><img src={arrow} alt="arrowIcon" /></p>
            </div>
        </div>
        </div>
        
    
    </div>
  )
}

