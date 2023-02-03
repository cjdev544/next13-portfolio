'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import UI from '@/public/images/ui.png'
import Develop from '@/public/images/prog.png'
import Responsive from '@/public/images/responsive.png'
import './Services.scss'

export default function Services({ isDarkMode }) {
  const transition = {
    duration: 1,
    type: 'spring',
  }

  return (
    <section className='services container' id='servicios'>
      <div className='services-left'>
        <span style={isDarkMode ? { color: '#fff' } : {}}>Conoce mis</span>
        <h2>Servicios</h2>
        <span>
          En esta sección podras ver los servicios que ofrezco como
          desarrollador. <br /> Si buscas algo especifico, no dudes en
          contactarme.
        </span>
        <a href='#' className='button services-left__button'>
          Contactame
        </a>
        <div
          className='blur services-blur1'
          style={{ background: '#abf1ff94' }}
        />
      </div>
      <div className='services-right'>
        <motion.div
          initial={{ left: '-11rem' }}
          whileInView={{ left: '15rem' }}
          transition={transition}
        >
          <div className='services-card'>
            <Image
              src={UI}
              width={80}
              height={80}
              className='services-card__img'
              alt='emoji diseño UI UX'
            />
            <h3 style={isDarkMode ? { color: '#fff' } : {}}>UI / UX</h3>
            <p>
              Diseños atracivos enfocados en la usabilidad y experencia de
              usuario
            </p>
          </div>
        </motion.div>
        <motion.div
          style={{ top: '12rem', left: '-15rem' }}
          initial={{ left: '25rem' }}
          whileInView={{ left: '-5rem' }}
          transition={transition}
        >
          <div className='services-card'>
            <Image
              src={Develop}
              className='services-card__img'
              width={80}
              height={80}
              alt='emoji Programación'
            />
            <h3 style={isDarkMode ? { color: '#fff' } : {}}>Programación</h3>
            <p>
              Desarrollo de sitios web, Apps web y Apps de escritorio con
              tecnologías web
            </p>
          </div>
        </motion.div>
        <motion.div
          style={{ top: '19rem', left: '15rem' }}
          initial={{ left: '-11rem', top: '19rem' }}
          whileInView={{ left: '10rem', top: '19rem' }}
          transition={transition}
        >
          <div className='services-card'>
            <Image
              src={Responsive}
              className='services-card__img'
              width={80}
              height={80}
              alt='diseño renponsivo'
            />
            <h3 style={isDarkMode ? { color: '#fff' } : {}}>
              Diseño responsivo
            </h3>
            <p>
              Diseño adaptable a dispositivos, mobil, tablet y de escritorio.
            </p>
          </div>
        </motion.div>
        <div
          className='blur services-blur2'
          style={{ background: 'rgb(238 210 255)' }}
        />
      </div>
      {/* Services card for tablet and mobile */}
      <div className='right-media'>
        <div className='right-card'>
          <Image
            src={UI}
            className='right-card__img'
            width={80}
            height={80}
            alt='emoji diseño UI UX'
          />
          <h3 style={isDarkMode ? { color: '#fff' } : {}}>UI / UX</h3>
          <p>
            Diseños atracivos enfocados en la usabilidad y experencia de usuario
          </p>
        </div>
        <div className='right-card'>
          <Image
            src={Develop}
            className='right-card__img'
            width={80}
            height={80}
            alt='Programación'
          />
          <h3 style={isDarkMode ? { color: '#fff' } : {}}>Programación</h3>
          <p>
            Desarrollo de sitios web, Apps web y Apps de escritorio con
            tecnologías web
          </p>
        </div>
        <div className='right-card'>
          <Image
            src={Responsive}
            className='right-card__img'
            width={80}
            height={80}
            alt='diseño renponsivo'
          />
          <h3 style={isDarkMode ? { color: '#fff' } : {}}>Diseño responsivo</h3>
          <p>Diseño adaptable a dispositivos, mobil, tablet y de escritorio.</p>
        </div>
        <div
          className='blur services-blur2'
          style={{ background: 'rgb(238 210 255)' }}
        />
      </div>
    </section>
  )
}
