import axios from 'axios';
import {RequestResponse} from '../../../types';
import {IJournalMessage, IJournalResponse, JournalQueryParams} from '../types';

const _initialParams: JournalQueryParams = {
  offset: 0,
  query: '',
  rows: 10,
};

export const getJournalsData = async (
  params: JournalQueryParams = _initialParams,
): Promise<RequestResponse<IJournalMessage> | undefined> => {
  const {offset, query, rows} = params;
  try {
    const url = new URL('https://api.crossref.org/journals');

    if (query && query.length > 0) {
      url.searchParams.append('query', query);
    }
    if (offset) {
      url.searchParams.append('offset', `${Math.abs(offset)}`);
    }
    if (rows) {
      url.searchParams.append('rows', `${Math.abs(rows)}`);
    }
    const {data, status, statusText} = await axios.get(url.href);

    if (status === 200 && data) {
      const d = data as IJournalResponse;
      const response: RequestResponse<IJournalMessage> = {
        data: d.message,
        status,
        statusText,
      };

      return response;
    }
  } catch (error) {
    throw new Error('Error on get news papaers data');
  }
};
