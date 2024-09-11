import React, { useState } from "react";
import PageContainer from "../Common/PageContainer";
import CompanyPageNavbar from "../Common/CompanyPageNavbar";
import image from "../Images/image (3).png";
import "../Styles/AboutUsStyle/styles.css";
import frame1 from "../Images/Frame 20.png";
import frame2 from "../Images/Frame 21.png";
import frame3 from "../Images/Frame 22.png";
import frame4 from "../Images/Frame 23.png";
import Review from "../Common/Review";
import LocationPath from "../Common/LocationPath";

const AboutUs = () => {
  const textStyle = {
    fontSize: "32px",
    fontWeight: "600",
    lineHeight: "48px",
    color: "#111827",
    fontFamily: "Mulish",
  };
  const [hoverState, setHoverState] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverState(index - 1);
  };

  const handleMouseLeave = () => {
    setHoverState(null);
  };

  return (
    <PageContainer>
      <LocationPath />
      <CompanyPageNavbar />
      <div className="about-container">
        <div>
          <div className="about-header">
            <div className="about-title-line"></div>
            <span className="about-title" style={textStyle}>
              Haqqımızda
            </span>
          </div>
          <div>
            <span className="about-tag">
               “166 Yükdaşıma və Logistika – Yükünüzü daşıyırıq”
            </span>
            <img src={image} alt="" />
          </div>
        </div>
        <span className="about-text">
          2012-ci ildə fəaliyyətinə bir neçə yük maşını ilə başlayan
          “Yüktaksisi.az MMC” brendi hazırda yükdaşıma və logistika sahəsi üzrə
          ölkənin qabaqcıl şirkətlərindən biridir. Yüklərin daşınması yalnız
          ölkədaxili sərhədlərlə məhdudlaşmır, həmçinin beynəlxalq arenada da
          həyata keçirilir.Daim müştərilərimizin xidmətində olmaq və operativ
          xidmət göstərmək məqsədilə 166 qaynar xəttimiz 7/24 ölkənin istənilən
          nöqtəsindən zəngləri qəbul edir. Göstərdiyimiz xidmətin
          müştərilərimizə rahat və əlçatan olması məqsədilə xidmət sahələrimiz
          genişlənməyə davam edir. Şirkətimiz yükdaşıma sahəsi ilə fəaliyyətə
          başlasa da, hazırda müxtəlif kompleks xidmətləri – yükdaşıma ve
          logistika, evakuasiya, işçi qüvvəsi, usta xidməti, anbar
          xidməti, təmizlik xidməti və xalça yuma xidmətlərini müştərilərinə
          təqdim edib.Xidmətlərimizin daha əlçatan olması üçün sərfəli qiymət və
          hər bir bölgəyə xidmət anlayışları ilə çalışırıq.  166 brendi altında
          fəaliyyət göstərən hər bir xidmətin keyfiyyətinin ölçülməsi bizim üçün
          olduqca vacibdir. Bu məqsədlə, mütəmadi olaraq müştərilərimizin
          göstərilən xidmətlər üzrə fikirlərini öyrənir, təklif və iradlarına
          əsasən xidmət keyfiyyətini daim təkmilləşdiririk. (ISO 9001:2015 -
          Keyfiyyət İdarəetmə Sistemi, ISO 45001:2018 - Peşə Sağlamlığı və
          Əməyin Təhlükəsizliyi İdarəetmə Sistemi və ISO 14001:2015 - Ətraf
          Mühitin İdarəetmə sistemi üzrə beynəlxalq sertifikatları)
        </span>
      </div>
      <div className="missiya-container">
        <div className="missiya-numbers">
          <div className="missiya-number">
            <span className="number">526368+</span>
            <span>Daşınmış ofis və ev</span>
          </div>
          <div className="missiya-number">
            <span className="number">2365+</span>
            <span>Təmizlik edilmiş məkan</span>
          </div>
          <div className="missiya-number">
            <span className="number">327166+</span>
            <span>Müştəri rəyləri</span>
          </div>
          <div className="missiya-number">
            <span className="number">304264+</span>
            <span>Məmnun qalan müştərilər</span>
          </div>
        </div>
        <div className="mission-texts">
          <div className="about-header">
            <div className="about-title-line"></div>
            <span className="about-title" style={textStyle}>
              Missiyamız
            </span>
          </div>
          <span className="mission-text">
            Missiyamız, müştərilərimizi və partnyorlarımızı dərindən anlamaq,
            onlara effektiv logistik həlləri yüksək keyfiyyətdə təqdim etmək və
            eyni zamanda əməkdaşlarımızın şəxsi inkişafı və motivasiyasını üst
            səviyyədə tutmaqdır.
          </span>
          <div className="mission-qualities">
            <div className="mission-quality">
              <img src={frame1} alt="" />
              <span>Sürətli xidmət</span>
            </div>
            <div className="mission-quality">
              <img src={frame2} alt="" />
              <span>Sərfəli qiymət</span>
            </div>
            <div className="mission-quality">
              <img src={frame3} alt="" />
              <span>Kompleks həllər</span>
            </div>
            <div className="mission-quality">
              <img src={frame4} alt="" />
              <span>Nəqliyyat infrastrukturunun inkişafı</span>
            </div>
          </div>
        </div>
      </div>
      <div className="how-work">
        <div className="about-header">
          <div className="about-title-line"></div>
          <span className="about-title" style={textStyle}>
            Biz necə işləyirik?
          </span>
        </div>
        <div className="two-stages">
          <div className="stages">
            <div className="stage"></div>
            <div
              className="stage right"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}>
              <div className="stage-number">2</div>
              <span className="stage-text">
                Operatorlarımız sifarişlərinizi qəbul edir
              </span>
              <span>
                Operatorumuz sizə xidmətlə bağlı məlumatları verir, ödəniş üsulu
                və şərtlərlə bağlı məlumatlandırır.
              </span>
            </div>
            <div className="stage"></div>
            <div
              className="stage right"
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}>
              <div className="stage-number">4</div>
              <span className="stage-text">Sifariş tamamlanır</span>
              <span>
                Təyin olunan xidmət üzrə əməkdaşlarımız sifarişinizi tamamlayır
              </span>
            </div>
            <div className="stage"></div>
            <div
              className="stage right"
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}>
              <div className="stage-number">6</div>
              <span className="stage-text">
                Göstərdiyimiz xidmətin keyfiyyəti ölçülür
              </span>
              <span>
                Xidmətdən məmnunluğunu ölçmək məqsədilə müştəri məmmuniyyəti
                şöbəmiz sizinlə əlaqə saxlayır.
              </span>
            </div>
          </div>
          <div className="lines">
            <div
              className={`line ${hoverState === 0 ? "hovered" : ""}`}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}></div>
            <div
              className={`line ${hoverState === 1 ? "hovered" : ""}`}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}></div>
            <div
              className={`line ${hoverState === 2 ? "hovered" : ""}`}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}></div>
            <div
              className={`line ${hoverState === 3 ? "hovered" : ""}`}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}></div>
            <div
              className={`line ${hoverState === 4 ? "hovered" : ""}`}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}></div>
            <div
              className={`line ${hoverState === 5 ? "hovered" : ""}`}
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}></div>
          </div>
          <div className="stages">
            <div
              className="stage left"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}>
              <div className="stage-number">1</div>
              <span className="stage-text">
                166-ya zəng etməklə sifariş verirsiniz
              </span>
              <span>
                Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə zəng”-dən
                istifadə etməklə biz əlaqə saxlaya bilərik 166 və ya
              </span>
            </div>
            <div className="stage"></div>
            <div
              className="stage left"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}>
              <div className="stage-number">3</div>
              <span className="stage-text">
                Əməkdaşlarımız sifariçşi yerinə yetirir
              </span>
              <span>
                Əməkdaşlarımız təyin olunan ünvanda arzuladığınız xidmət üzrə
                sizin sifarişinizi yerinə yetirir
              </span>
            </div>
            <div className="stage"></div>
            <div
              className="stage left"
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}>
              <div className="stage-number">5</div>
              <span className="stage-text">
                Xidmət bitdikdən sonra siz ödəniş edirsiniz
              </span>
              <span>
                Ödənişin rahatlığı üçün sizə həm onlayn, həm də nağd ödəniş
                imkanları təqdim edilir.
              </span>
            </div>
            <div className="stage"></div>
          </div>
        </div>
      </div>
      <div className="customer-review">
        <div className="about-header">
          <div className="about-title-line"></div>
          <span className="about-title" style={textStyle}>
            Müştəri rəyləri
          </span>
        </div>
        <Review desc={false} />
      </div>
    </PageContainer>
  );
};

export default AboutUs;
