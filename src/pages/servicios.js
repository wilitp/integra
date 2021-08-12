import React from 'react';
import Layout from '../components/Layout/Layout';
import * as classes from '../static/styles/servicios.module.scss';
import Aviso from '../components/Aviso/Aviso';
const estudio = () => {
  return (
    <Layout notIndex url="http://integraestudio.com.ar" title="Servicios - Integra Estudio">
      
      <div className="container">
        <div className={classes.Servicios}>
          <h1>Servicios</h1>


          <section className={classes.Section}>
            <div>
              <Aviso>Durante esta cuarentena, ¡Proyecto a mínimo costo!</Aviso>
              <h2>Diseño</h2>
              <p>
                DISEÑAMOS considerando la dimensión estética, funcional y tecnológica en
                cada proyecto, conjugando cada aspecto con <strong>originalidad y racionalidad</strong>.

              </p>
              <p>
                Nuestra meta es lograr una <strong>mejor calidad de vida</strong> de nuestros clientes a
                través de la arquitectura, brindando una solución exclusiva a cada uno de ellos.
              </p>
            </div>

            <div>
              <h2>Obra</h2>
              <p>
                Ejecutamos OBRAS concentrándonos en su <strong>planificación</strong> y los detales de
          terminación, buscando <strong>optimizar recursos</strong>  naturales y sistemas de la
          edificación de tal modo que disminuyan el impacto ambiental.

              </p>
              <p>
                Realizamos construcción tradicional,
                así como también trabajamos con materiales alternativos y sistemas en seco como <strong>Steel Framing</strong>.
              </p>
            </div>

            <div>
              <h2>Gestión</h2>
              <p>
                GESTIONAMOS y administramos los recursos de nuestros clientes con
              responsabilidad garantizando racionalización en su uso y así <strong>
                  reducción de
                  costos.
              </strong>

              </p>
              <p>
                Contamos con una <strong>red de proveedores de materiales y mano de obra</strong> calificados
                para cada requerimiento, buscando una mejora constante.
              </p>
            </div>
          </section>

          <section className={classes.Section}>
            <h3>Tareas</h3>
            <ul>
              <li><p>Cómputo y presupuesto</p></li>
              <li><p>Relevamiento</p></li>
              <li><p>Transcripción de planos</p></li>
              <li><p>Auditorías edilicias y de instalaciones</p></li>
              <li><p>Anteproyectos y proyectos de arquitectura, interiorismo y equipamiento</p></li>
              <li><p>Ampliación, reciclado y remodelación</p></li>
              <li><p>Supervisión, dirección y/o inspección de obra</p></li>
              <li><p>Ejecución de obra</p></li>
              <li><p>Administración de obra</p></li>
              <li><p>Asistencia técnica en licitaciones y contrataciones</p></li>
              <li><p>Proyecto de inversión inmobiliario</p></li>
              <li><p>Confección de Informes Técnicos</p></li>
            </ul>
          </section>
        </div>


      </div>
    </Layout>
  )
}

export default estudio
