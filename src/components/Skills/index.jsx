'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import './Skills.scss'

export default function index({ isDarkMode }) {
  return (
    <section className='skills container' id='tecnologias'>
      <div className='services-left'>
        <span style={isDarkMode ? { color: '#fff' } : {}}>
          Trabajo con estas
        </span>
        <h2>Tecnologias</h2>
        <span>
          En esta sección podrás ver las tegnologías con las que he trabajado.{' '}
          <br /> Poco a poco conociendolas mejor y sumando nuevas, con la
          finalidad <br /> de expandir las posibilidades y divertirme en el
          proceso.
        </span>
        <div
          className='blur skills-blur1'
          style={{ background: '#abf1ff94' }}
        />
      </div>
      <div className='skills-right'>
        <motion.div
          className='skills-right__circle'
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
        >
          <div className='skills-right__circle-item'>
            <Image
              src='/images/javascript 1.png'
              className='skills-right__circle-img'
              width={110}
              height={110}
              alt='JavaScript'
            />
            <span>JavaScript</span>
          </div>
          <div className='skills-right__circle-item'>
            <Image
              src='/images/react 1.png'
              className='skills-right__circle-img'
              width={110}
              height={110}
              alt='React'
            />
            <span>React</span>
          </div>
          <div className='skills-right__circle-item'>
            <Image
              src='/images/nextJs.png'
              className='skills-right__circle-img'
              width={110}
              height={110}
              alt='NextJs'
            />
            <span>NextJs</span>
          </div>
          <div className='skills-right__circle-item'>
            <Image
              src='/images/ts.png'
              className='skills-right__circle-img'
              width={110}
              height={110}
              alt='Gatsby'
            />
            <span>TypeScript</span>
          </div>
          <div className='skills-right__circle-item'>
            <Image
              src='/images/nodedotjs 1.png'
              className='skills-right__circle-img'
              width={110}
              height={110}
              alt='NodeJs'
            />
            <span>NodeJs</span>
          </div>
          <div className='skills-right__circle-item'>
            <Image
              src='/images/express 1.png'
              className='skills-right__circle-img'
              width={110}
              height={110}
              alt='Express'
            />
            <span>Express</span>
          </div>
        </motion.div>
        <motion.div
          className='skills-right__circle2'
          initial={{ rotate: -45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
        >
          <div className='skills-right__circle2-item'>
            <Image
              src='/images/html5 1.png'
              className='skills-right__circle2-img'
              width={110}
              height={110}
              alt='HTML'
            />
            <span>HTML</span>
          </div>
          <div className='skills-right__circle2-item'>
            <Image
              src='/images/css3 1.png'
              className='skills-right__circle2-img'
              width={110}
              height={110}
              alt='CSS'
            />
            <span>CSS</span>
          </div>
          <div className='skills-right__circle2-item'>
            <Image
              src='/images/sass 1.png'
              className='skills-right__circle2-img'
              width={110}
              height={110}
              alt='Sass'
            />
            <span>Sass</span>
          </div>
          <div className='skills-right__circle2-item'>
            <Image
              src='/images/apollographql 1.png'
              className='skills-right__circle2-img'
              width={110}
              height={110}
              alt='Apollo'
            />
            <span>Apollo</span>
          </div>
          <div className='skills-right__circle2-item'>
            <Image
              src='/images/mongodb 1.png'
              className='skills-right__circle2-img'
              width={110}
              height={110}
              alt='MongoDB'
            />
            <span>MongoDB</span>
          </div>
          <div className='skills-right__circle2-item'>
            <Image
              src='/images/electron 1.png'
              className='skills-right__circle2-img'
              width={110}
              height={110}
              alt='Electron'
            />
            <span>Electron</span>
          </div>
        </motion.div>
        <div className='skills-backgrouncircle blue' />
        <div className='skills-backgrouncircle yellow' />
        <div className='skills-backgrouncircle blue2' />
        <div className='skills-backgrouncircle yellow2' />
      </div>
    </section>
  )
}
