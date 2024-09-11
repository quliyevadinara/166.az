import React from "react";
import PageContainer from "../Common/PageContainer";
import CompanyPageNavbar from "../Common/CompanyPageNavbar";
import image from "../Images/image (3).png";
import "../Styles/AboutUsStyle/styles.css";
import frame1 from "../Images/Frame 20.png";
import frame2 from "../Images/Frame 21.png";
import frame3 from "../Images/Frame 22.png";
import frame4 from "../Images/Frame 23.png";
const AboutUs = () => {
  const textStyle = {
    fontSize: "32px",
    fontWeight: "600",
    lineHeight: "48px",
    color: "#111827",
    fontFamily: "Mulish",
    padding: "3rem",
  };
  return (
    <PageContainer>
      <CompanyPageNavbar />
      <span style={textStyle}>Haqqımızda</span>
      <div className="about-container">
        <div>
          <span> “166 Yükdaşıma və Logistika – Yükünüzü daşıyırıq”</span>
          <img src={image} alt="" />
        </div>
        <div>
          <span>
            2012-ci ildə fəaliyyətinə bir neçə yük maşını ilə başlayan
            “Yüktaksisi.az MMC” brendi hazırda yükdaşıma və logistika sahəsi
            üzrə ölkənin qabaqcıl şirkətlərindən biridir. Yüklərin daşınması
            yalnız ölkədaxili sərhədlərlə məhdudlaşmır, həmçinin beynəlxalq
            arenada da həyata keçirilir.Daim müştərilərimizin xidmətində olmaq
            və operativ xidmət göstərmək məqsədilə 166 qaynar xəttimiz 7/24
            ölkənin istənilən nöqtəsindən zəngləri qəbul edir. Göstərdiyimiz
            xidmətin müştərilərimizə rahat və əlçatan olması məqsədilə xidmət
            sahələrimiz genişlənməyə davam edir. Şirkətimiz yükdaşıma sahəsi ilə
            fəaliyyətə başlasa da, hazırda müxtəlif kompleks xidmətləri
            – yükdaşıma ve logistika, evakuasiya, işçi qüvvəsi, usta xidməti,
            anbar xidməti, təmizlik xidməti və xalça yuma xidmətlərini
            müştərilərinə təqdim edib.Xidmətlərimizin daha əlçatan olması üçün
            sərfəli qiymət və hər bir bölgəyə xidmət anlayışları ilə çalışırıq.
             166 brendi altında fəaliyyət göstərən hər bir xidmətin
            keyfiyyətinin ölçülməsi bizim üçün olduqca vacibdir. Bu məqsədlə,
            mütəmadi olaraq müştərilərimizin göstərilən xidmətlər üzrə
            fikirlərini öyrənir, təklif və iradlarına əsasən xidmət keyfiyyətini
            daim təkmilləşdiririk. (ISO 9001:2015 - Keyfiyyət İdarəetmə Sistemi,
            ISO 45001:2018 - Peşə Sağlamlığı və Əməyin Təhlükəsizliyi İdarəetmə
            Sistemi və ISO 14001:2015 - Ətraf Mühitin İdarəetmə sistemi üzrə
            beynəlxalq sertifikatları)
          </span>
        </div>
      </div>
      <div className="missiya-containr">
        <div>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          <span style={textStyle}>Missiyamız</span>
          <span>
            Missiyamız, müştərilərimizi və partnyorlarımızı dərindən anlamaq,
            onlara effektiv logistik həlləri yüksək keyfiyyətdə təqdim etmək və
            eyni zamanda əməkdaşlarımızın şəxsi inkişafı və motivasiyasını üst
            səviyyədə tutmaqdır.
          </span>
          <div>
            <div>
              <img src={frame1} alt="" />
              <span>Sürətli xidmət</span>
            </div>
            <div>
              <img src={frame2} alt="" />
              <span>Sərfəli qiymət</span>
            </div>
            <div>
              <img src={frame3} alt="" />
              <span>Kompleks həllər</span>
            </div>
            <div>
              <img src={frame4} alt="" />
              <span>Nəqliyyat infrastrukturunun inkişafı</span>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutUs;
