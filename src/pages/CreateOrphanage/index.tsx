import React, { useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { FiPlus } from 'react-icons/fi';

import mapIcon from '../../utils/mapIcon';

import Sidebar from '../../components/Sidebar';

import {
  Container,
  Main,
  Form,
  InputBlock,
  UploadedImages,
  ButtonActive,
  BoxOptions,
  ConfirmButoon,
} from './styles';

const CreateOrphanage: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    setPosition({ latitude: lat, longitude: lng });
  }

  return (
    <Container>
      <Sidebar />

      <Main>
        <Form>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-22.8327222, -47.1459692]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre
                <span>Máximo de 300 caracteres</span>
              </label>
              <textarea id="name" maxLength={300} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <UploadedImages />

              <button type="button">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </InputBlock>
          </fieldset>

          {/* -------------- VISITAÇÃO --------------- */}

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Nome</label>
              <input />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <BoxOptions>
                <ButtonActive type="button" active>
                  Sim
                </ButtonActive>
                <ButtonActive type="button">Não</ButtonActive>
              </BoxOptions>
            </InputBlock>
          </fieldset>

          <ConfirmButoon type="submit">Confirmar</ConfirmButoon>
        </Form>
      </Main>
    </Container>
  );
};

export default CreateOrphanage;
