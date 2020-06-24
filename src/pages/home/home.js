//Essentials
import React from "react";
//Components
import { Col, Row } from "antd";
import { Parallax } from "rc-scroll-anim";
//Images
import SeminarImg from "../../assets/images/seminar.svg";
import SchoolImg from "../../assets/images/colegio.svg";
import ForumImg from "../../assets/images/apoyo.svg";
import TallerImg from "../../assets/images/compartir.svg";
import VinculoImg from "../../assets/images/acuerdo.svg";
import AvionImg from "../../assets/images/avion.svg";
import DownArrowImg from "../../assets/images/flecha-hacia-abajo.svg";

import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <Row justify="center">
        <Row justify="center" align="top" gutter={[8, 0]}>
          <div className="quienesSomosContainer">
            <h1>Quienes Somos?</h1>
            <Parallax
              animation={[{ y: 50, opacity: 0, playScale: [0.2, 0.7] }]}
              style={{
                transform: "translateY(0px)",
                opacity: 1,
              }}
            >
              <div className="downArrowImgContainer">
                <img src={DownArrowImg} alt="flecha" />
              </div>
            </Parallax>
          </div>
        </Row>
        <Row align="center" justify="middle" gutter={[8, 0]}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Parallax
              animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
              style={{ transform: "translateX(-100px)", opacity: 0 }}
            >
              <div className="avionImgContainer">
                <img src={AvionImg} alt="avion" height={200} width={200} />
              </div>
            </Parallax>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Parallax
              animation={{ x: -0, opacity: 1, playScale: [0.3, 0.5] }}
              style={{ transform: "translateX(100px)", opacity: 0 }}
            >
              <h2>{text1}</h2>
            </Parallax>
          </Col>
        </Row>
        <Row justify="center" gutter={[8, 0]}>
          <Parallax
            always={false}
            animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
            style={{ transform: "translateX(-100px)", opacity: 0 }}
          >
            <h1>Ser miembro de LARSASI</h1>
          </Parallax>
          <div className="text1">
            <Parallax
              always={false}
              animation={{ x: -0, opacity: 1, playScale: [0.3, 0.5] }}
              style={{ transform: "translateX(100px)", opacity: 0 }}
            >
              <h2 style={{ textAlign: "center" }}>{text2}</h2>
            </Parallax>
          </div>
        </Row>
        <Row>
          <Parallax
            always={false}
            animation={{ y: 0, opacity: 1, playScale: [0.4, 0.8] }}
            style={{ transform: "translateY(-100px)", opacity: 0 }}
          >
            <h1>Beneficios</h1>
          </Parallax>
        </Row>
        <Row align="middle" gutter={[8, 0]}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Parallax
              always={false}
              animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
              style={{ transform: "translateX(-100px)", opacity: 0 }}
            >
              <div className="seminarImgContainer">
                <img src={SeminarImg} alt="Seminario" />
              </div>
            </Parallax>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="ben1">
              <Parallax
                always={false}
                animation={{ x: -0, opacity: 1, playScale: [0.3, 0.5] }}
                style={{ transform: "translateX(100px)", opacity: 0 }}
              >
                <h2 className="title">Seminario Anual de ISASI</h2>
                <h2>{ben1}</h2>
              </Parallax>
            </div>
          </Col>
        </Row>
        <Row justify="center" align="middle" gutter={[8, 0]}>
          <Col span={6}>
            <Parallax
              always={false}
              animation={{ opacity: 1, playScale: [0.1, 0.8] }}
              style={{ opacity: 0 }}
            >
              <div className="tallerImgContainer">
                <img src={TallerImg} alt="taller" />
              </div>
            </Parallax>
          </Col>
          <Col span={18}>
            <Parallax
              always={false}
              animation={{ x: -0, opacity: 1, playScale: [0.1, 0.8] }}
              style={{ transform: "translateX(100px)", opacity: 0 }}
            >
              <h2 className="title">Programa Taller “Reachout”</h2>
              <h2>{ben2}</h2>
            </Parallax>
          </Col>
        </Row>
        <Row align="middle" gutter={[8, 0]}>
          <Col span={18}>
            <Parallax
              always={false}
              animation={{ x: 0, opacity: 1, playScale: [0.1, 0.4] }}
              style={{ transform: "translateX(-100px)", opacity: 0 }}
            >
              <h2 className="title">Publicación oficial de ISASI “FORUM”</h2>
              <h2>{ben3}</h2>
            </Parallax>
          </Col>
          <Col span={6}>
            <Parallax
              always={false}
              animation={{ opacity: 1, playScale: [0.1, 0.4] }}
              style={{ opacity: 0 }}
            >
              <div className="forumImgContainer">
                <img src={ForumImg} alt={"Foro"} width={100} height={100} />
              </div>
            </Parallax>
          </Col>
        </Row>
        <Row justify="space-between" align="middle" gutter={[8, 0]}>
          <Col span={10}>
            <Parallax
              always={false}
              animation={{ x: 0, opacity: 1, playScale: [0.3, 0.5] }}
              style={{ transform: "translateX(-100px)", opacity: 0 }}
            >
              <h2 className="title">
                Becas del Memorial ISASI Rudolf Kapustin:
              </h2>
              <h2>{ben4}</h2>
            </Parallax>
          </Col>
          <Col span={4}>
            <Parallax
              always={false}
              animation={{ opacity: 1, playScale: [0.0, 0.5] }}
              style={{ opacity: 0 }}
            >
              <div className="schoolImgContainer">
                <img src={SchoolImg} alt="colegio" width={100} height={100} />
              </div>
            </Parallax>
          </Col>
          <Col span={10}>
            <Parallax
              always={false}
              animation={{ x: -0, opacity: 1, playScale: [0.3, 0.5] }}
              style={{ transform: "translateX(100px)", opacity: 0 }}
            >
              <h2 className="title">Programa de Tutorías</h2>
              <h2>{ben5}</h2>
            </Parallax>
          </Col>
        </Row>
        <Row gutter={[8, 0]}>
          <Parallax
            always={false}
            animation={{ y: 0, opacity: 1, playScale: [0.5, 0.8] }}
            style={{ transform: "translateY(-100px)", opacity: 0 }}
          >
            <h2 className="title">Generador de Vínculos</h2>
            <h2>{ben6}</h2>
          </Parallax>
        </Row>
        <Row gutter={[8, 0]}>
          <Parallax
            always={false}
            animation={{ opacity: 1, playScale: [0.2, 0.4] }}
            style={{ opacity: 0 }}
          >
            <div className="vinculoImgContainer">
              <img src={VinculoImg} alt="vinculo" />
            </div>
          </Parallax>
        </Row>
        <Row gutter={[8, 0]}>
          <Col span={18} offset="3">
            <Parallax
              always={false}
              animation={{ y: -0, opacity: 1, playScale: [0, 0.3] }}
              style={{ transform: "translateY(100px)", opacity: 1 }}
            >
              <h2 style={{ color: "rgb(34, 117, 68)" }}>{syntax}</h2>
            </Parallax>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

const text1 =
  "Somos la asociación regional que nuclea a profesionales y especialistas de la comunidad Latinoamericana dedicada a la investigación de accidentes y de seguridad operacional. LARSASI es una de las tantas asociaciones que conforman ISASI alrededor del mundo. ";
const text2 =
  "Es el reflejo del compromiso personal, el de su empresa u organización con la seguridad operacional en la aviación de nuestra región, con proyección global, a través del apoyo con los recursos necesarios, intelectuales,  materiales y de experiencia para el mejoramiento continuo de los procesos de investigación y en la gestión de riesgos con la finalidad de contribuir a la mejora continua de la seguridad operacional.";
const ben1 =
  "A través de los años, se ha convertido en uno de los eventos más importantes para los profesionales en investigación de accidentes y de la seguridad operacional de la aviación de alcance global. En dicho seminario se realizan presentaciones valiosas y vanguardistas. La dinámica del seminario es un día completo de debates sobre ejes de la seguridad operacional actuales y tres días de presentaciones de diversas temáticas, desarrolladas por expertos de renombre internacional y miembros de LARSASI-ISASI que hayan desarrollado trabajos relacionados a las temáticas propuestas para cada Seminario.";
const ben2 =
  "Instituido para proporcionar seminarios de bajo costo, orientados a temas específicos y patrocinados localmente. Estos talleres brindan a nuestros miembros una oportunidad única para trabajar cuestiones de investigación y seguridad operacional en las áreas donde se hayan presentado alertas, que deben ser abordadas en forma inmediata y orientar nuestros esfuerzos.";
const ben3 =
  "Es una revista de primera clase, publicada trimestralmente. La publicación contiene información y artículos sobre lo último concerniente a la investigación de accidentes; y que son el resultado del trabajo de los miembros de la asociación.";
const ben4 =
  "Fondo establecido en 2002 para proporcionar a los estudiantes universitarios seleccionados una subvención para asistir a nuestros seminarios anuales.";
const ben5 =
  "Para estudiantes es una oportunidad para promover vínculos con los estudiantes universitarios interesados en carreras asociadas a la investigación y seguridad operacional.";
const ben6 =
  "Los miembros socios individuales o corporativos representan a 70 países y son un grupo diverso que trabaja en todas las áreas de la industria de la aviación. Esto presenta una oportunidad única para generar vínculos de intercambio dentro del ámbito profesional. Ser miembro de LARSASI-ISASI es también una excelente plataforma para darse a conocer a la comunidad aeronáutica. ";
const syntax =
  "En síntesis, LARSASI -ISASI es el lugar en donde confluyen quienes se dedican, día a día, a contribuir en la mejora de la seguridad operacional de la aviación en la región y en el mundo; a través de la investigación de accidentes y de la seguridad operacional.";
