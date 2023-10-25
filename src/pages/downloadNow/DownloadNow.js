import playStore from '../../assets/icons/playStore.png';
import appStore from '../../assets/icons/appStore.png';
import mockup from '../../assets/iphoneMockup.png';
import { Link } from 'react-router-dom';
import {BiDownload} from 'react-icons/bi';
import {AiFillStar} from 'react-icons/ai';

export const DownloadNow = () => {
  return (
    <div className="downloadContainer">
      <div className="downloadLeft">
        <h3>Download App Now</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ex
          consectetur corporis quo commodi quasi possimus veniam eum dignissimos
          sequi. Distinctio ducimus perspiciatis ullam doloribus maxime possimus
          incidunt corrupti id?
        </p>
        <div className="appLinks">
          <Link to={'#'}><img src={playStore} alt='playStore'/></Link>
          <Link to={'#'}><img src={appStore} alt='appStore'/></Link>
        </div>
        <div className="downloadInfo">
          <div className="downloadBox">
            <BiDownload style={{fontSize: '40px'}}/>
            <div className="boxText">
               <p style={{paddingTop: '10px'}}>2000</p>
               <p>DOWNLOAD</p>
            </div>
           
          </div>
          <div className="downloadBox">
          <AiFillStar style={{fontSize: '40px'}}/>
          <div className="boxText">
            <p style={{paddingTop: '10px'}}>1500</p>
            <p>5 STAR RATING</p>
          </div>
            
          </div>
        </div>
      </div>{" "}
      <div className="downloadRight">
        <img src={mockup} alt="BasketFruits" />
      </div>
    </div>
  );
};
