import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
import api from '../../services/api';

interface Orphanage {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface OrphageParams {
  id: string;
}

const Orphanage: React.FC = () => {
  const params = useParams<OrphageParams>();

  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { id } = params;

  useEffect(() => {
    async function loadOrphanageDetail() {
      const response = await api.get(`/orphanages/${id}`);
      setOrphanage(response.data);
    }
    loadOrphanageDetail();
  }, [id]);

  if (!orphanage) {
    return <p>Carregando</p>;
  }

  return (
    <Container>
      <Sidebar />

      <Main>
        <OrphanageDetails>
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <Images>
            {orphanage.images.map((image, index) => (
              <ButtonImage
                type="button"
                key={image.id}
                onClick={() => setActiveImageIndex(index)}
                activeImageIndex={activeImageIndex}
                indexImage={index}
              >
                <img src={image.url} alt={orphanage.name} />
              </ButtonImage>
            ))}
          </Images>

          <OrphanageDetailsContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

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
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails>
              <BoxHour>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta
                <br />
                {orphanage.opening_hours}
              </BoxHour>

              {orphanage.open_on_weekends ? (
                <BoxOpenOnWeekends>
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos
                  <br />
                  fim de semana
                </BoxOpenOnWeekends>
              ) : (
                <BoxOpenOnWeekends
                  OrphanageWeekends={orphanage.open_on_weekends}
                >
                  <FiInfo size={32} color="#ff6692" />
                  Não atendemos
                  <br />
                  fim de semana
                </BoxOpenOnWeekends>
              )}
            </OpenDetails>
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </Main>
    </Container>
  );
};

export default Orphanage;
