import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import pizza from '../../../public/pizza.png'; // Asegúrate de que la ruta sea correcta
import styles from '../prueba/prueba.module.css';


// Asegúrate de importar los estilos de Leaflet
import 'leaflet/dist/leaflet.css';

// Datos de ejemplo para los marcadores
const locations = [
  { lat: 26.918476236387537, lng: -101.43756880491617, name: 'Ubicación 1' }, // Ejemplo de ubicación
  { lat: 26.920191833830927, lng: -101.43604219896996, name: 'Ubicación 2' }, // Otro ejemplo
];

export default function Prueba() {
  // Crear el icono personalizado con la imagen pizza.png
  useEffect(() => {
    const pizzaIcon = new L.Icon({
      iconUrl: pizza, // Usamos la imagen pizza.png
      iconSize: [32, 32], // Ajustamos el tamaño del icono
      iconAnchor: [16, 32], // El ancla del icono debe estar centrada
      popupAnchor: [0, -32], // Ajustamos la posición del popup
      shadowSize: [41, 41], // Tamaño de la sombra del icono
    });

    // Configuramos el icono de Leaflet con la imagen personalizada
    L.Marker.prototype.options.icon = pizzaIcon;
  }, []);

  const obtenerColoniasGoogle = async (cp) => {
    const API_KEY = 'AIzaSyCO94VKOSF6NNQGWuLIaDoN5ZiCC6tDluo'; // Aquí colocas tu clave API
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${cp}&key=${API_KEY}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const data = await response.json();
  
      if (data.status === 'OK') {
        console.log(data);
      } else {
        console.log('No se encontraron resultados');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  // Llamada de prueba con un código postal
  obtenerColoniasGoogle('25810');
  



  return (
    <div className='container'>
      <div className={styles.mapa}>
        <h3>Visitanos, tenemos dos sucursales</h3>
        <MapContainer
          center={[26.918476236387537, -101.43756880491617]} // Coordenadas de inicio
          zoom={16}
          style={{ width: '100%', height: '100%', borderRadius: ".5rem" }}
        >
          {/* Capa de tiles de OpenStreetMap */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Marcadores para las ubicaciones */}
          {locations.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lng]}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
