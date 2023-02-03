'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import JavaScript from '@/public/images/javascript 1.png'
import React from '@/public/images/react 1.png'
import NextJs from '@/public/images/nextJs.png'
import Gatsby from '@/public/images/gatsby 1.png'
import Node from '@/public/images/nodedotjs 1.png'
import Express from '@/public/images/express 1.png'
import HTML from '@/public/images/html5 1.png'
import CSS from '@/public/images/css3 1.png'
import Sass from '@/public/images/sass 1.png'
import GraphQL from '@/public/images/apollographql 1.png'
import MongoDB from '@/public/images/mongodb 1.png'
import Electron from '@/public/images/electron 1.png'
import './Skills.scss'

export default function index({ isDarkMode }) {
  return (
    <section className='skills container' id='tecnologias'>
      <div className='services-left'>
        <span style={{ color: isDarkMode && '#fff' }}>Trabajo con estas</span>
        <h2>Tecnologías</h2>
        <span>
          En esta sección podras ver las tegnologías con las que he trabajado.{' '}
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
              src={JavaScript}
              className='skills-right__circle-img'
              alt='JavaScript'
            />
            <span>JavaScript</span>
          </div>
          <div className='skills-right__circle-item'>
            <Image
              src={React}
              className='skills-right__circle-img'
              alt='React'
            />
            <span>React</span>
          </div>
          <div className='skills-right__circle-item'>
            <Image
              src={NextJs}
              className='skills-right__circle-img'
              alt='NextJs'
            />
            <span>NextJs</span>
          </div>
          <div className='skills-right__circle-item'>
            <Image
              src={Gatsby}
              className='skills-right__circle-img'
              alt='Gatsby'
            />
            <span>Gatsby</span>
          </div>
          <div className='skills-right__circle-item'>
            <Image
              src={Node}
              className='skills-right__circle-img'
              alt='NodeJs'
            />
            <span>NodeJs</span>
          </div>
          <div className='skills-right__circle-item'>
            <Image
              src={Express}
              className='skills-right__circle-img'
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
              src={HTML}
              className='skills-right__circle2-img'
              alt='HTML'
            />
            <span>HTML</span>
          </div>
          <div className='skills-right__circle2-item'>
            <Image src={CSS} className='skills-right__circle2-img' alt='CSS' />
            <span>CSS</span>
          </div>
          <div className='skills-right__circle2-item'>
            <Image
              src={Sass}
              className='skills-right__circle2-img'
              alt='Sass'
            />
            <span>Sass</span>
          </div>
          <div className='skills-right__circle2-item'>
            <Image
              src={GraphQL}
              className='skills-right__circle2-img'
              alt='Apollo'
            />
            <span>Apollo</span>
          </div>
          <div className='skills-right__circle2-item'>
            <Image
              src={MongoDB}
              className='skills-right__circle2-img'
              alt='MongoDB'
            />
            <span>MongoDB</span>
          </div>
          <div className='skills-right__circle2-item'>
            <Image
              src={Electron}
              className='skills-right__circle2-img'
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
