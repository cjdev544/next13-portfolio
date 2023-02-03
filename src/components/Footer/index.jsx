'use client'
/* eslint-disable react/jsx-curly-brace-presence */

import Image from 'next/image'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

import './Footer.scss'

export default function Footer() {
  return (
    <footer className='footer'>
      <Image
        src='/images/wave.png'
        className='footer-background'
        height={400}
        width={1200}
        alt='fotter'
      />
      <div className='footer-content'>
        <span>CjDev544</span>
        <div className='footer-icons'>
          <a
            href='https://github.com/cjdev544'
            rel='noopener noreferrer nofollow'
            target='_blank'
          >
            <GitHub color='white' size={'3rem'} />
          </a>
          <a
            href='https://www.linkedin.com/in/cjdev544'
            rel='noopener noreferrer nofollow'
            target='_blank'
          >
            <Linkedin color='white' size={'3rem'} />
          </a>
        </div>
      </div>
    </footer>
  )
}
