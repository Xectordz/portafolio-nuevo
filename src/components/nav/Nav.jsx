import React, { useState, useEffect } from 'react';
import styles from '../nav/nav.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import me from '../../../public/me.jpg'

export default function Nav() {
    const [mostrarNav, setMostrarNav] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    // Actualizar el tema en el body cuando cambie el estado darkMode
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]); // Cuando darkMode cambia, actualizar el body

    return (
        <div className={styles.nav}>
            <div className={styles.imagen_div}>
                <img src={me} alt="" />
                <p>Hector Rodriguez Reyes</p>
            </div>
            <p onClick={() => setMostrarNav(true)} className={styles.menu_icon}><GiHamburgerMenu /></p>
            <div className={`${styles.nav_container} ${mostrarNav ? styles.mostrarNav : styles.ocultarNav}`}>
                <p onClick={() => setMostrarNav(false)} className={styles.close_icon}><IoClose /></p>
                
                <div className={styles.container_secciones}>
                    <p className={styles.secciones}>Sobre mi</p>
                    <p className={styles.secciones}>Proyectos</p>
                    <p className={styles.secciones}>Contacto</p>
                    <div className={styles.darkMode_container}>
                        {
                            !darkMode ? (
                                <p onClick={() => setDarkMode(true)}><MdDarkMode /></p>
                            ) : (
                                <p onClick={() => setDarkMode(false)}><MdSunny /></p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
