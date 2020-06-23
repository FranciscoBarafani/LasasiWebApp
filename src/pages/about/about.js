//Essentials
import React from "react";
//Image
import Imagen from "../../assets/images/about.png";
import { Row, Col } from "antd";

import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <Row align="top" justify="center">
        <Col span={6}>
          <img src={Imagen} alt="Mundo" />
        </Col>
        <Col span={12}>
          <h2>
            El mundo se encuentra en un proceso de transición, y la aviación no
            es la excepción. Indefectiblemente debe redefinirse de cara a esta
            nueva era en la que entramos. Somos la asociación regional que
            nuclea a profesionales y especialistas de la comunidad
            Latinoamericana dedicada a la investigación de accidentes y de
            seguridad operacional. LARSASI es una de las tantas asociaciones que
            conforman ISASI alrededor del mundo. En LARSASI empezamos a trabajar
            en el armado, construcción y fortalecimiento de la Asociación de
            ISASI para la región, para abordar lo relacionado a: investigación
            de accidentes de aviación, seguridad operacional, los nuevos
            desafíos de la industria y también poder ampliar y facilitar la
            capacitación de los miembros de LARSASI. Poder presentar trabajos de
            nuestra área de expertise; así como tratar temas concurrentes a la
            investigación, compartir experiencias, bibliografía, etc. Zona de
            los archivos adjuntos
          </h2>
        </Col>
      </Row>
    </div>
  );
}
