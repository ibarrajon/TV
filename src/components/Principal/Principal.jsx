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
import logo_telefe from '../assets/Telefe.png'
import logo_qmusica from '../assets/QMusica.png'
// {
//   nombre: "",
//   logo: logo_,
//   URL1: '',
//   URL2: '',
//   URL3: '',
// }

const videos = [
  {
    nombre: "Q Musica",
    logo: logo_qmusica,
    URL1: 'https://canales.online/embed/cv.html?get=UXVpZXJvX0hE',
    URL2: 'https://futbolparatodostv.online/fl.html?get=LmN2YXR0di5jb20uYXIvbGl2ZS9jNmVkcy9RdWllcm9fSEQvU0FfTGl2ZV9kYXNoX2VuYy9RdWllcm9fSEQubXBk&amp;key=YTM1NGIwYzgyYTNhNzIwYzRhNmY1MmVkNWExMTkwZjQ=&amp;key2=NDVhNzZkY2M4NGYwNThjZmFiYzhiOTU4ZDczMDNiMjg=',
  },
  {
    nombre: "Telefe",
    logo: logo_telefe,
    URL1: 'https://embed13.alandesk.life/cvatt.html?get=VGVsZWZlSEQ=&amp;lang=1',
    URL2: 'https://blackface.world/dtvpl.html?id=1216',
    URL3: '',
  },
  {
    nombre: "ESPN Premium",
    logo: logo_espnp,
    URL1: 'https://embed.librefutboltv.com/cv.html?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE&amp;lang=1',
    URL2: '',
    URL3: '',
  },
  {
    nombre: "TNT Sports",
    logo: logo_tnt,
    URL1: 'https://embed.librefutboltv.com/cv.html?get=VE5UX1Nwb3J0c19IRA',
    URL2: 'https://tucanaldeportivo.com/tntsports.php',
    URL3: 'https://tutele1.net/online.php?a=149',
  },

  {
    nombre: "TyC Sports",
    logo: logo_tyc,
    URL1: 'https://embed.librefutboltv.com/cv.html?get=VHlDU3BvcnQ',
    URL2: 'https://embed.librefutboltv.com/tyc.html',
    URL3: 'https://tucanaldeportivo.com/tycsports.php',
  },
  {
    nombre: "ESPN",
    logo: logo_espn,
    URL1: 'https://embed.librefutboltv.com/cv.html?get=RVNQTjJIRA',
    URL2: '',
    URL3: '',
  },
  {
    nombre: "ESPN 2",
    logo: logo_espn2,
    URL1: 'https://embed.librefutboltv.com/cv.html?get=RVNQTjJfQXJn',
    URL2: '',
    URL3: '',
  },
  {
    nombre: "ESPN 3",
    logo: logo_espn3,
    URL1: 'https://embed.librefutboltv.com/cv.html?get=RVNQTjM',
    URL2: '',
    URL3: '',
  },
  {
    nombre: "ESPN Extra",
    logo: logo_espne,
    URL1: 'https://embed.librefutboltv.com/cv.html?get=RVNQTkhE',
    URL2: '',
    URL3: '',
  },
  {
    nombre: "DirectTV",
    logo: logo_directv,
    URL1: 'https://thaifree.asia/dtvpl2.html?id=1057&lang=1',
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
    URL1: 'https://clarovideo.librefutboltv.com/mpdk2.html?get=aHR0cHM6Ly9hcmxvY2FsbGl2ZWNoYW5uZWxzZGFzaC5sY2RuLmNsYXJvdHYuY29tLmFyL0NvbnRlbnQvREFTSF9EQVNIX0ZLL0xpdmUvY2hhbm5lbChUVl9QVUJMSUNBKS9tYXN0ZXIubXBk&amp;key=Zjg4NzM3NWQxYzdmMDA3ZmIxMDQ0N2U4NDU4MWJlNzA=&amp;key2=ODE4MzAwNzkzMjM1OWEzY2YxNDUxOThiNTEyOTExOWM=',
    URL2: 'https://embed.librefutboltv.com/cv.html?get=Q2FuYWw3',
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