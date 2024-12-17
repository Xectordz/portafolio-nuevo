import React from 'react'
import styles from '../inicio/inicio.module.css'
import me from '../../../public/me.jpg'
import { RiMapPinFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { RiCodeView } from "react-icons/ri";
import { MdOutlineUpdate } from "react-icons/md";

export default function Inicio() {
  return (
    <div className='container'>
      <div className={styles.saludo}>
        <h3>Hola, soy Hector, desarrollador FronEnd</h3>
      </div>
    </div>

  )
}
