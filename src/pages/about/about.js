//Essentials
import React from "react";
//Image
import Imagen from "../../assets/images/about.png";
import { Row, Col } from "antd";

import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <Row align="top" justify="space-around">
        <Col xs={0} sm={0} md={6} lg={6} xl={6}>
          <img src={Imagen} alt="Mundo" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <h2>
            El mundo se encuentra en un proceso de transición, y la aviación no
            es la excepción. Indefectiblemente debe redefinirse de cara a esta
            nueva era en la que entramos. Somos la asociación regional que
            nuclea a profesionales y especialistas de la comunidad
            Latinoamericana dedicada a la investigación de accidentes y de
            seguridad operacional. LASASI es una de las tantas asociaciones que
            conforman ISASI alrededor del mundo. En LASASI empezamos a trabajar
            en el armado, construcción y fortalecimiento de la Asociación de
            ISASI para la región, para abordar lo relacionado a: investigación
            de accidentes de aviación, seguridad operacional, los nuevos
            desafíos de la industria y también poder ampliar y facilitar la
            capacitación de los miembros de LASASI. Poder presentar trabajos de
            nuestra área de expertise; así como tratar temas concurrentes a la
            investigación, compartir experiencias, bibliografía, etc. Zona de
            los archivos adjuntos
          </h2>
        </Col>
      </Row>
    </div>
  );
}
