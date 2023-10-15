import success from '../../assets/success.png'

export const Sucess = () => {
  return (
    <div className="successContainer">
        <div className="successLeft">
            <h3>Be part of the success</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, possimus distinctio dignissimos quos esse reiciendis odit illo atque! Sapiente, corrupti? Inventore libero numquam velit enim necessitatibus maxime adipisci illum laudantium.</p>
            <button className='getStarted'>Get Started</button>
        </div>
        <div className="successRight">
            <img src={success} alt="success" />
        </div>
    </div>
  )
}
