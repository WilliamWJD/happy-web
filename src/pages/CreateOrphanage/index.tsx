import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';

import mapIcon from '../../utils/mapIcon';

import api from '../../services/api';

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
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    setPosition({ latitude: lat, longitude: lng });
  }

  function handleSelectImages(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }

    const selectedImages = Array.from(e.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append('name', name);
      data.append('about', about);
      data.append('instructions', instructions);
      data.append('opening_hours', opening_hours);
      data.append('latitude', String(position.latitude));
      data.append('longitude', String(position.longitude));
      data.append('open_on_weekends', String(open_on_weekends));

      images.forEach(image => {
        data.append('images', image);
      });

      await api.post('/orphanages', data);

      toast.success('Orfanato cadastrado com sucesso');

      history.push('/app');
    } catch (err) {
      console.log(err);
      toast.error('Erro ao cadastrar orfanato');
    }
  }

  return (
    <Container>
      <Sidebar />

      <Main>
        <Form onSubmit={handleSubmit}>
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
              <input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre
                <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={e => setAbout(e.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <UploadedImages>
                {previewImages.map(image => (
                  <img key={image} src={image} alt={name} />
                ))}

                <label htmlFor="images[]">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </UploadedImages>

              <input
                multiple
                onChange={handleSelectImages}
                type="file"
                id="images[]"
              />
            </InputBlock>
          </fieldset>

          {/* -------------- VISITAÇÃO --------------- */}

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea
                value={instructions}
                onChange={e => setInstructions(e.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                value={opening_hours}
                onChange={e => setOpeningHours(e.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <BoxOptions>
                <ButtonActive
                  type="button"
                  active={open_on_weekends}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </ButtonActive>
                <ButtonActive
                  type="button"
                  active={!open_on_weekends}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </ButtonActive>
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
