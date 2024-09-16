import config from '../config';

export const getImageUrl = (filename) => {
  return `${config.API_URL}/images/${filename}`;
};