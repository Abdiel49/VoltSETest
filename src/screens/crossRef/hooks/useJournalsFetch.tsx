import {useCallback, useEffect, useState} from 'react';

import {getJournalsData} from '../api/journals.api';

import {IJournalItem, JournalQueryParams} from '../types';

export const useJournalFetch = (initialQuery?: JournalQueryParams) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [journals, setJournals] = useState<IJournalItem[]>();
  const [totalResults, setTotalResults] = useState(0);
  const [queryParams, setQueryParams] = useState<JournalQueryParams>(
    initialQuery || {
      offset: 0,
      query: '',
      rows: 10,
    },
  );

  const getData = useCallback(
    async (query: JournalQueryParams, changeData: boolean = false) => {
      setIsLoading(true);
      if (isLoading) {
        return;
      }

      try {
        setQueryParams(query);
        const response = await getJournalsData(query);
        if (!response) {
          return setJournals(undefined);
        }

        const {data} = response;
        const totalItems = data['total-results'];
        setTotalResults(totalItems);

        if (totalItems <= 0) {
          return setJournals(undefined);
        }

        if (changeData) {
          // change all journals
          setJournals(data.items);
        } else {
          // add more journals
          setJournals(currentJournals =>
            currentJournals
              ? [...currentJournals, ...data.items]
              : [...data.items],
          );
        }
      } catch (error) {
        console.error('Error on get journals data, error:', error);
      } finally {
        setIsLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      (async () => {
        await getData(queryParams);
      })();
    }
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reloadJournalsQuery = async () => {
    const initQueryParams: JournalQueryParams = {
      ...queryParams,
      offset: 0,
    };
    await getData(initQueryParams, true);
  };

  const nextJournalsPage = async () => {
    if (journals === undefined) {
      return;
    }
    const nextQueryParams: JournalQueryParams = {
      ...queryParams,
      offset: queryParams.offset + 1,
    };
    await getData(nextQueryParams);
  };

  const searchQuery = (query: JournalQueryParams) => {
    const queryChanged = query.query !== queryParams.query;
    const makeQuery = {...query};
    if (queryChanged) {
      makeQuery.offset = 0;
    }
    getData(makeQuery, queryChanged);
  };

  return {
    journals,
    queryParams,
    isLoading,
    totalResults,
    reloadJournalsQuery,
    nextJournalsPage,
    searchQuery,
  };
};
