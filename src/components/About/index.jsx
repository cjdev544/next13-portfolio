'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import GitHub from '@/public/images/github.png'
import Linkedin from '@/public/images/linkedin.png'
import FotoCj from '@/public/images/boy.png'
import JS from '@/public/images/js.png'
import Web from '@/public/images/web.png'
import Full from '@/public/images/full.png'
import './About.scss'

export default function About() {
  const transition = {
    duration: 2,
    type: 'spring',
  }

  return (
    <section className='about container'>
      <div className='about-left'>
        <div className='about-left__info'>
          <span>¡Hola!, yo soy</span>
          <h1>Jefferson Campos</h1>
          <span>
            Un gusto poder saludarte, vivo en Caracas Venezuela, soy electrónico
            de profesión y gran entusiasta de la tecnología. Programador,
            guitarrista afisionado y amante de los animales. Contactame y
            llevemos tus ideas a codigo.
          </span>
        </div>
        <a
          href='./resume.pdf'
          rel='noopener noreferrer nofollow'
          target='_blank'
          download
        >
          <button className='button about-left__button'>Descargar CV</button>
        </a>
        <div className='about-left__icons'>
          <a
            href='https://github.com/cjdev544'
            rel='noopener noreferrer nofollow'
            target='_blank'
          >
            <Image src={GitHub} width={100} height={100} alt='GitHub' />
          </a>
          <a
            href='https://www.linkedin.com/in/cjdev544'
            rel='noopener noreferrer nofollow'
            target='_blank'
          >
            <Image src={Linkedin} width={100} height={100} alt='Linkedin' />
          </a>
        </div>
      </div>
      <div className='about-right'>
        <Image src={FotoCj} alt='Foto CjDev544' />
        <motion.div
          initial={{ left: '-26%' }}
          whileInView={{ left: '-14%' }}
          transition={transition}
        >
          <Image src={JS} width={180} height={180} alt='JavaScript' />
        </motion.div>

        <motion.div
          className='about-right__floting'
          initial={{ top: '4rem', left: '74%' }}
          whileInView={{ top: '4rem', left: '50%' }}
          transition={transition}
        >
          <Image
            src={Web}
            className='floting-image'
            width={80}
            height={80}
            alt='web'
          />
          <span>
            Desarrollador
            <br />
            Web
          </span>
        </motion.div>

        <motion.div
          className='about-right__floting'
          initial={{ left: '9rem', top: '15rem' }}
          whileInView={{ left: '2rem', top: '15rem' }}
          transition={transition}
        >
          <Image
            src={Web}
            className='floting-image'
            width={80}
            height={80}
            alt='responsive design'
          />
          <span>
            Desarrollos
            <br />
            FullStack
          </span>
        </motion.div>

        <motion.div
          className='about-right__floting'
          initial={{ left: '9rem', top: '15rem' }}
          whileInView={{ left: '2rem', top: '15rem' }}
          transition={transition}
        >
          <Image
            src={Full}
            className='floting-image'
            width={80}
            height={80}
            alt='responsive design'
          />
          <span>
            Desarrollos
            <br />
            FullStack
          </span>
        </motion.div>

        <div className='blur' style={{ background: 'rgb(238 210 255)' }} />
        <div
          className='blur'
          style={{
            background: '#c1f5ff',
            top: '17rem',
            left: '-9rem',
            width: '21rem',
            height: '11rem',
          }}
        />
      </div>
    </section>
  )
}
