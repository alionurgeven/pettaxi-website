import dogGif from "./cuteDogGif.gif"
import taxiGif from "./taxi.gif"
import instagram from "./instagram.png"
import whatsapp from "./whatsapp.png"
import workingHours from "./7-24.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="banner">
          <img className="workingHoursLogo" src={workingHours} alt="yükleniyor..." />
          <img className="taxiGif" src={taxiGif} alt="yükleniyor..." />
        </div>
        <div className="title">
          <img className="titleGif" src={dogGif} alt="yükleniyor..." />
          <h1 className={"titleLabel"}>PetTaxi</h1> 
        </div>
        <div className="about">
          <p>
          PET TAXİ Evcil Hayvan sahiplerinin en büyük sorunlarından biri olan ulaşıma ANKARA’da çözüm olmaktadır. 
          Bu konuda sıkıntı yaşayan hayvan sahiplerinden gelen talepleri değerlendirmiş ve firmamızın hizmetleri arasındaki yerini 2008 yılında almıştır.
          Ankara’da bir ilk olan PET TAXİ faaliyete başladığı günden bugüne kadar aralıksız olarak can dostlarımızın ulaşım sorununu çözmektedir. 
          Şehiriçi ulaşımın yanı sıra şehirlerarası da hizmet veren PET TAXİ'nin amacı araç filosunu genişleterek hayvansever dostlara daha rahat ulaşabilmektir.
          </p>
        </div>
        <div className="contact">
          <a className="contactLogoContainer" target="_blank" href="https://www.instagram.com/pettaxi_ankara/" rel="noreferrer">
            <img className="contactLogo" src={instagram} alt="yükleniyor..."/>
              Instagram
          </a>
          <a className="contactLogoContainer" href="https://wa.me/+905358993242" target="_blank" rel="noreferrer">
            <img className="contactLogo" src={whatsapp} alt="yükleniyor..."/>
              WhatsApp
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
