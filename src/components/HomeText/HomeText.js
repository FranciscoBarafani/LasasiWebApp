//Essentials
import React from "react";
import "./HomeText.scss";

//This components renders the text for the Home Page

export default function HomeText() {
  //Texts
  const text = {
    intro:
      "ISASI tiene sociedades nacionales y regionales ubicadas en todo el mundo. LASASI es la sociedad regional que nuclea a miembros de la comunidad Latinoamericana dedicada a la investigación de accidentes, y de todos otros eventos relacionados con la seguridad aérea.",
    secondLine:
      "Ser miembro de LASASI - ISASI es el reflejo del compromiso personal o el de su empresa u organización con la seguridad en la aviación de nuestra región, con proyección global, a través del apoyo con los recursos necesarios, intelectuales - materiales, y experiencia para el mejoramiento continuo de los procesos de investigación, en todos los campos con la finalidad de contribuir a la mejora de la seguridad operacional",
    a:
      "El Seminario anual: se ha convertido en uno de los puntos focales para los profesionales en investigación de accidentes y de la seguridad de la aviación en todo el mundo. En dicho seminario se realizan presentaciones valiosas y vanguardistas. La dinámica del seminario es un día completo de debates sobre ejes de la seguridad y tres días de presentaciones de diversas temáticas, desarrolladas por expertos de renombre internacional. En este marco, se realiza la reunión anual de membresía para actualizar a los asistentes sobre el estado y novedades de la sociedad.",
    b:
      " El Programa de Taller “Reachout” instituido para proporcionar seminarios de bajo costo, orientados a temas específicos y patrocinados localmente. El primer Taller celebrado en mayo de 2001 en Praga, República Checa, fue un éxito rotundo en asistencia y contenido, y los talleres subsiguientes realizados desde entonces han sido igualmente exitosos. Estos talleres brindan a nuestros miembros una oportunidad única para trabajar cuestiones de seguridad en las áreas donde se hayan presentado alertas, que deben ser abordadas en forma inmediata y orientar nuestros esfuerzos.",
    c:
      "La publicación oficial de ISASI, “FORUM” es una revista de primera clase, publicada trimestralmente. La publicación contiene información y artículos sobre lo último concerniente a la investigación de accidentes; y que son el resultado del trabajo de los miembros de la asociación.",
    d:
      "El Fondo de Becas del Memorial ISASI Rudolf Kapustin: se estableció en 2002 para proporcionar a los estudiantes universitarios seleccionados una subvención para asistir a nuestros seminarios anuales. Nuestros beneficiarios han sido unánimes en sus elogios para el programa.",
    e:
      "El Programa de Tutorías para estudiantes es una oportunidad para promover vínculos con los estudiantes universitarios interesados ​​en carreras asociadas a la seguridad aérea.",
    f:
      "Nuestros miembros individuales o corporativos representan a 70 países y son un grupo diverso que trabaja en todas las áreas de la industria de la aviación. Esto presenta una oportunidad única para generar vínculos de intercambio dentro del ámbito profesional.",
    g:
      "La membresía es también una excelente plataforma para darse a conocer a la comunidad aeronáutica.",
    outro:
      "En síntesis, LASASI/ ISASI es el lugar en donde confluyen quienes se dedican, día a día, a contribuir en la mejora de la seguridad operacional de la aviación en la región y del mundo; a través de la investigación de accidentes de aviación."
  };
  return (
    <div className="home-text">
      <h1>LASASI</h1>
      <p>{text.intro}</p>
      <p>{text.secondLine}</p>
      <h3>EXISTE UNA AMPLIA GAMA DE BENEFICIOS DE MEMBRESÍA, ENTRE ELLOS:</h3>
      <ul>
        <li>{text.a}</li>
        <li>{text.b}</li>
        <li>{text.c}</li>
        <li>{text.d}</li>
        <li>{text.e}</li>
        <li>{text.f}</li>
        <li>{text.g}</li>
      </ul>
      <p>{text.outro}</p>
    </div>
  );
}
