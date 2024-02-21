import axios from 'axios';
import {DogCeoType, RequestResponse} from '../types';

export const getDocCeo = async (): Promise<
  RequestResponse<DogCeoType> | undefined
> => {
  try {
    const {data, status, statusText} = await axios.get(
      'https://dog.ceo/api/breeds/image/random',
    );
    if (status === 200 && data) {
      const response: RequestResponse<DogCeoType> = {
        data: data,
        status,
        statusText,
      };
      return response;
    }
    // TODO: handle more status code
  } catch (error) {
    throw new Error('Error on get dog ceo data');
  }
};
