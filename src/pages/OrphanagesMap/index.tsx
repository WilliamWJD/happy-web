import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight, FiHeart } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { toast } from 'react-toastify';

import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../images/map-marker.svg';
import iconLinkedin from '../../images/icons/linkedin.svg';
import iconGithub from '../../images/icons/github.svg';

import { PageMap, MarkPopup } from './styles';

interface IOrphanage {
  id: string;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [currentLongitude, setCurrentLongitude] = useState(0);
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([]);

  useEffect(() => {
    CurrentLocation();
    async function loadOrphanages() {
      const response = await api.get('/orphanages');
      setOrphanages(response.data);
    }
    loadOrphanages();
  }, []);

  function CurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      position => {
        setCurrentLatitude(position.coords.latitude);
        setCurrentLongitude(position.coords.longitude);
      },
      error => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            toast.error('Por favor habilite sua localização');
            break;

          case error.POSITION_UNAVAILABLE:
            toast.error('Informações de localização não disponíveis');
            break;
          default:
        }
      },
    );
  }

  return (
    <PageMap>
      <aside>
        <div>
          <header>
            <img src={mapMarkerImg} alt="Happy" />
            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>
          </header>

          <footer>
            <strong>
              Feito com
              <FiHeart color="#fff" size={20} />
            </strong>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/william-jose-dias/"
                >
                  <img src={iconLinkedin} alt="" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/williamwjd">
                  <img src={iconGithub} alt="" />
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </aside>
      <Map
        center={[-22.839296, -47.1498752]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {orphanages.map(orphanage => (
          <Marker
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
            key={orphanage.id}
          >
            <MarkPopup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}

              <Link to={`/orphanage/${orphanage.id}`}>
                <FiArrowRight color="#fff" size={20} />
              </Link>
            </MarkPopup>
          </Marker>
        ))}
      </Map>

      <Link to={`/create/orphanage/${currentLatitude},${currentLongitude}`}>
        <FiPlus size={32} color="#fff" />
      </Link>
    </PageMap>
  );
};

export default OrphanagesMap;
