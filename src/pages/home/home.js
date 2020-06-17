//Essentials
import React from "react";
//Components
import { Col, Row } from "antd";
import { Parallax } from "rc-scroll-anim";
//Images
import Imagen from "../../assets/images/seminar.svg";

import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <Row justify="center" style={{ padding: "5vh 10vh" }}>
        <Row>
          <Parallax
            animation={[
              { y: 0, opacity: 1, playScale: [0, 0.2] },
              { blur: "0px", playScale: [0, 0.5] },
            ]}
            style={{
              transform: "translateY(50px)",
              filter: "blur(0px)",
              opacity: 0,
            }}
          >
            <h1>Qué es LASASI?</h1>
          </Parallax>
        </Row>
        <Row>
          <Col span={12}>
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
              style={{ transform: "translateX(-100px)", opacity: 0 }}
            >
              Imagen
            </Parallax>
          </Col>
          <Col span={12}>
            <Parallax
              animation={{ x: -0, opacity: 1, playScale: [0.3, 0.5] }}
              style={{ transform: "translateX(100px)", opacity: 0 }}
            >
              <h2>{text1}</h2>
            </Parallax>
          </Col>
        </Row>
        <Row justify="center">
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
          >
            <h1>Ser miembro de LASASI</h1>
          </Parallax>
          <div className="text1">
            <Parallax
              animation={{ x: -0, opacity: 1, playScale: [0.3, 0.5] }}
              style={{ transform: "translateX(100px)", opacity: 0 }}
            >
              <h2 style={{ textAlign: "center" }}>{text2}</h2>
            </Parallax>
          </div>
        </Row>
        <Row>
          <Parallax
            animation={{ y: 0, opacity: 1, playScale: [0.4, 0.8] }}
            style={{ transform: "translateY(-100px)", opacity: 0 }}
          >
            <h1>Beneficios</h1>
          </Parallax>
        </Row>
        <Row>
          <Col span={12}>
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
              style={{ transform: "translateX(-100px)", opacity: 0 }}
            >
              <div className="seminarImgContainer">
                <img src={Imagen} alt="Seminario" width={300} height={300} />
              </div>
            </Parallax>
          </Col>
          <Col span={12}>
            <div className="ben1">
              <Parallax
                animation={{ x: -0, opacity: 1, playScale: [0.3, 0.5] }}
                style={{ transform: "translateX(100px)", opacity: 0 }}
              >
                <h2 className="title">Seminario Anual de ISASI</h2>
                <h2>{ben1}</h2>
              </Parallax>
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <Parallax
            animation={{ x: -0, opacity: 1, playScale: [0.5, 0.8] }}
            style={{ transform: "translateX(100px)", opacity: 0 }}
          >
            <h2 className="title">Programa Taller “Reachout”</h2>
            <h2>{ben2}</h2>
          </Parallax>
        </Row>
        <Row>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
          >
            <h2 className="title">Publicación oficial de ISASI “FORUM”</h2>
            <h2>{ben3}</h2>
          </Parallax>
        </Row>
        <Row justify="space-between">
          <Col span={10}>
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
              style={{ transform: "translateX(-100px)", opacity: 0 }}
            >
              <h2 className="title">
                Becas del Memorial ISASI Rudolf Kapustin:{" "}
              </h2>
              <h2>{ben4}</h2>
            </Parallax>
          </Col>
          <Col span={10}>
            <Parallax
              animation={{ x: -0, opacity: 1, playScale: [0.3, 0.5] }}
              style={{ transform: "translateX(100px)", opacity: 0 }}
            >
              <h2 className="title">Programa de Tutorías</h2>
              <h2>{ben5}</h2>
            </Parallax>
          </Col>
        </Row>
        <Row>
          <Parallax
            animation={{ y: 0, opacity: 1, playScale: [0.5, 0.8] }}
            style={{ transform: "translateY(-100px)", opacity: 0 }}
          >
            <h2 className="title">Generador de Vínculos</h2>
            <h2>{ben6}</h2>
          </Parallax>
        </Row>
        <Row>
          <Parallax
            animation={{ y: -0, opacity: 1, playScale: [0.1, 0.5] }}
            style={{ transform: "translateY(100px)", opacity: 0 }}
          >
            <h2>{syntax}</h2>
          </Parallax>
        </Row>
      </Row>
    </div>
  );
}

const text1 =
  "Es la asociación regional que nuclea a profesionales y especialistas de la comunidad Latinoamericana dedicada a la investigación de accidentes y de seguridad operacional. LASASI es una de las tantas asociaciones que conforman ISASI alrededor del mundo. ";
const text2 =
  "Es el reflejo del compromiso personal, el de su empresa u organización con la seguridad operacional en la aviación de nuestra región, con proyección global, a través del apoyo con los recursos necesarios, intelectuales,  materiales y de experiencia para el mejoramiento continuo de los procesos de investigación y en la gestión de riesgos con la finalidad de contribuir a la mejora continua de la seguridad operacional.";
const ben1 =
  "A través de los años, se ha convertido en uno de los eventos más importantes para los profesionales en investigación de accidentes y de la seguridad operacional de la aviación de alcance global. En dicho seminario se realizan presentaciones valiosas y vanguardistas. La dinámica del seminario es un día completo de debates sobre ejes de la seguridad operacional actuales y tres días de presentaciones de diversas temáticas, desarrolladas por expertos de renombre internacional y miembros de LASASI-ISASI que hayan desarrollado trabajos relacionados a las temáticas propuestas para cada Seminario.";
const ben2 =
  "Instituido para proporcionar seminarios de bajo costo, orientados a temas específicos y patrocinados localmente. Estos talleres brindan a nuestros miembros una oportunidad única para trabajar cuestiones de investigación y seguridad operacional en las áreas donde se hayan presentado alertas, que deben ser abordadas en forma inmediata y orientar nuestros esfuerzos.";
const ben3 =
  "Es una revista de primera clase, publicada trimestralmente. La publicación contiene información y artículos sobre lo último concerniente a la investigación de accidentes; y que son el resultado del trabajo de los miembros de la asociación.";
const ben4 =
  "Fondo establecido en 2002 para proporcionar a los estudiantes universitarios seleccionados una subvención para asistir a nuestros seminarios anuales.";
const ben5 =
  "Para estudiantes es una oportunidad para promover vínculos con los estudiantes universitarios interesados en carreras asociadas a la investigación y seguridad operacional.";
const ben6 =
  "Los miembros socios individuales o corporativos representan a 70 países y son un grupo diverso que trabaja en todas las áreas de la industria de la aviación. Esto presenta una oportunidad única para generar vínculos de intercambio dentro del ámbito profesional. Ser miembro de LASASI-ISASI es también una excelente plataforma para darse a conocer a la comunidad aeronáutica. ";
const syntax =
  "En síntesis, LASASI -ISASI es el lugar en donde confluyen quienes se dedican, día a día, a contribuir en la mejora de la seguridad operacional de la aviación en la región y en el mundo; a través de la investigación de accidentes y de la seguridad operacional.";
