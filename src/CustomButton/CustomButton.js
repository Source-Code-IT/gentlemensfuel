import React from 'react'
import "./CustomButton.css"


export default function CustomButton({title, i_alt, i_src, hl_href,hov_cls}) {
  return (
    <div className={`button-wrap ${hov_cls}`}>
        <h2 className='sm-title'>{title}</h2>
        <a href={hl_href} className='sm-link' target='_blank' rel='noreferrer'>
            <img alt={i_alt} src={i_src} className='sm-img'/>
        </a>
    </div>
  )
}
