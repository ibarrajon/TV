import React, { useState } from 'react';
import './Principal.css';
import logo_espnp from '../assets/ESPN_Premium.png'
import logo_tnt from '../assets/TNT_Sports.png'
import logo_tyc from '../assets/TyC_Sports.png'
import logo_espn from '../assets/ESPN.png'
import logo_espn2 from '../assets/ESPN2.png'
import logo_espn3 from '../assets/ESPN3.png'
import logo_espne from '../assets/ESPN_Extra.png'
import logo_directv from '../assets/DirecTV_Sports.png'
import logo_star from '../assets/Starplus.png'
import logo_tvpub from '../assets/TV_Publica.png'
// {
//   nombre: "",
//   logo: logo_,
//   URL1: '',
//   URL2: '',
//   URL3: '',
// }

const videos = [
  {
    nombre: "ESPN Premium",
    logo: logo_espnp,
    URL1: 'https://thaifree.asia/dtvpl2.html?id=1125&lang=1',
    URL2: 'https://embed57.thaidomains.co.in/cvatt.html?get=VE5UX1Nwb3J0c19IRA',
    URL3: '',
  },
  {
    nombre: "TNT Sports",
    logo: logo_tnt,
    URL1: 'https://embed57.thaidomains.co.in/cvatt.html?get=VE5UX1Nwb3J0c19IRA',
    URL2: 'https://tucanaldeportivo.com/tntsports.php',
    URL3: 'https://tutele1.net/online.php?a=149',
  },
  {
    nombre: "TyC Sports",
    logo: logo_tyc,
    URL1: 'https://thaifree.asia/dtvpl2.html?id=1240',
    URL2: 'https://embed57.thaidomains.co.in/cvatt.html?get=VHlDU3BvcnQ',
    URL3: 'https://embed.librefutboltv.com/tyc.html',
  },
  {
    nombre: "ESPN",
    logo: logo_espn,
    URL1: 'https://thaifree.asia/dtvpl2.html?id=1104',
    URL2: 'https://embed57.thaidomains.co.in/cvatt.html?get=RVNQTjJIRA',
    URL3: '',
  },
  {
    nombre: "ESPN 2",
    logo: logo_espn2,
    URL1: 'https://thaifree.asia/dtvpl2.html?id=1099',
    URL2: 'https://embed57.thaidomains.co.in/cvatt.html?get=RVNQTjJfQXJn',
    URL3: 'https://thaifree.asia/dtvpl2.html?id=1098',
  },
  {
    nombre: "ESPN 3",
    logo: logo_espn3,
    URL1: 'https://thaifree.asia/dtvpl2.html?id=1103',
    URL2: 'https://embed57.thaidomains.co.in/cvatt.html?get=RVNQTjM',
    URL3: '',
  },
  {
    nombre: "ESPN Extra",
    logo: logo_espne,
    URL1: '11',
    URL2: '',
    URL3: '',
  },
  {
    nombre: "DirectTV",
    logo: logo_directv,
    URL1: '11',
    URL2: '',
    URL3: '',
  },
  {
    nombre: "Star Plus",
    logo: logo_star,
    URL1: '11',
    URL2: '',
    URL3: '',
  },
  {
    nombre: "TV Publica",
    logo: logo_tvpub,
    URL1: '11',
    URL2: '',
    URL3: '',
  }
];

const Principal = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  let displayedVideos = showMore ? videos : videos.slice(0, 4);

  return (
    <section className='principal'>
      <div className="video-list-container">
        {videos.length > 4 && (
          <button onClick={handleToggleShowMore} className="ver-mas-button">
            {showMore ? 'VER MENOS' : 'VER TODOS'}
          </button>
        )}
        {/* <div className={`video-grid ${showMore ? 'show-all' : 'show-few'}`}> */}
        <div className='video-grid video-direc'>
          {displayedVideos.map((video, index) => (
            <div key={index} className="video-item">
              <div className="logo">
                <img src={video.logo} alt="" />
              </div>
              <div className="opciones">
                {video.URL1 && (
                  <a href={video.URL1} target="_blank">
                    <button>OPCION 1</button>
                  </a>
                )}
                {video.URL2 && (
                  <a href={video.URL2} target="_blank">
                    <button>OPCION 2</button>
                  </a>
                )}
                {video.URL3 && (
                  <a href={video.URL2} target="_blank">
                    <button>OPCION 3</button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Principal }