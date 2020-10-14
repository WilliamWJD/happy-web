import React from 'react';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';

import mapIcon from '../../utils/mapIcon';

import Sidebar from '../../components/Sidebar';

import {
  Container,
  Main,
  OrphanageDetails,
  Images,
  ButtonImage,
  OrphanageDetailsContent,
  MapContainer,
  OpenDetails,
  BoxHour,
  BoxOpenOnWeekends,
} from './styles';

const Orphanage: React.FC = () => {
  return (
    <Container>
      <Sidebar />

      <Main>
        <OrphanageDetails>
          <img
            src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
            alt="Lar das meninas"
          />

          <Images>
            <ButtonImage type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </ButtonImage>
            <ButtonImage type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </ButtonImage>
            <ButtonImage type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </ButtonImage>
            <ButtonImage type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </ButtonImage>
            <ButtonImage type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </ButtonImage>
            <ButtonImage type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </ButtonImage>
          </Images>

          <OrphanageDetailsContent>
            <h1>Lar das meninas</h1>
            <p>
              Presta assistência a crianças de 06 a 15 anos que se encontre em
              situação de risco e/ou vulnerabilidade social.
            </p>

            <MapContainer>
              <Map
                center={[-27.2092052, -49.6401092]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[-27.2092052, -49.6401092]}
                />
              </Map>

              <footer>
                <a href="/">Ver rotas no Google Maps</a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>
              Venha como se sentir mais à vontade e traga muito amor para dar.
            </p>

            <OpenDetails>
              <BoxHour>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta
                <br />
                8h às 18h
              </BoxHour>

              <BoxOpenOnWeekends>
                <FiInfo size={32} color="#39CC83" />
                Atendemos
                <br />
                fim de semana
              </BoxOpenOnWeekends>
            </OpenDetails>
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </Main>
    </Container>
  );
};

export default Orphanage;
