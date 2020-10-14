import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../images/map-marker.svg';

import { PageMap, MarkPopup } from './styles';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const OrphanagesMap: React.FC = () => {
  return (
    <PageMap>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Sumaré</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-22.8327222, -47.1459692]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker icon={mapIcon} position={[-22.8327222, -47.1459692]}>
          <MarkPopup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar das meninas
            <Link to="/orphanage/1">
              <FiArrowRight color="#fff" size={20} />
            </Link>
          </MarkPopup>
        </Marker>
      </Map>

      <Link to="/create/orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </PageMap>
  );
};

export default OrphanagesMap;
