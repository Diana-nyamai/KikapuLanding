import basket from '../../assets/basket.png';

export const Share = () => {
  return (
    <div className="shareContainer">
      <div className="shareLeft">
        <img src={basket} alt="BasketFruits" />
      </div>
      <div className="shareRight">
        <h3>Share Your journey</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ex consectetur corporis quo commodi quasi possimus veniam eum dignissimos sequi. Distinctio ducimus perspiciatis ullam doloribus maxime possimus incidunt corrupti id?</p>
        <button className="shareBtn">Share your journey</button>
      </div>
    </div>
  )
}

