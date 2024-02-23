import axios from 'axios';
import {NewspaperType, RequestResponse} from '../types';

export const getNewsPapers = async (): Promise<
  RequestResponse<NewspaperType[]> | undefined
> => {
  try {
    const {data, status, statusText} = await axios.get(
      'https://chroniclingamerica.loc.gov/newspapers.json',
    );
    if (status === 200 && data) {
      const response: RequestResponse<NewspaperType[]> = {
        data: data.newspapers,
        status,
        statusText,
      };

      return response;
    }
  } catch (error) {
    throw new Error('Error on get news papaers data');
  }
};
