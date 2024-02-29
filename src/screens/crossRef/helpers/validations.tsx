import {JournalQueryParams} from '../types';

/**
 * This function compares changes in query parameters and calls a callback function with the updated
 * query and a boolean indicating if any changes were detected.
 * @param {JournalQueryParams} prevQuery - `prevQuery` is an object representing the previous query
 * parameters for a journal.
 * @param {JournalQueryParams} query - The `query` parameter in the `validateChangesInQueryParams`
 * function represents the current state of the journal query parameters. It is compared with the
 * `prevQuery` parameter, which represents the previous state of the query parameters. The function
 * checks for changes in the `offset`, `query`, and
 * @param next - The `next` parameter in the `validateChangesInQueryParams` function is a callback
 * function that takes two arguments: `query` of type `JournalQueryParams` and `isChanged` of type
 * `boolean`. This callback function is called with the updated query parameters and a boolean value
 * indicating whether
 * @returns The function `validateChangesInQueryParams` is returning the result of calling the `next`
 * function with the `query` and `isChanged` parameters as arguments.
 */
export const validateChangesInQueryParams = (
  prevQuery: JournalQueryParams,
  query: JournalQueryParams,
  next: (query: JournalQueryParams, isChanged: boolean) => void,
  keys: (keyof JournalQueryParams)[],
) => {
  let offsedChanged = false;
  let queryChanged = false;
  let rowsChanged = false;

  if (query.offset !== prevQuery.offset) {
    offsedChanged = true;
  }
  if (query.query.trim() !== prevQuery.query.trim()) {
    queryChanged = true;
  }
  if (query.rows !== prevQuery.rows) {
    rowsChanged = true;
  }

  const mutedQuery = {...query};

  if (queryChanged) {
    mutedQuery.offset = 0;
  }

  const isChanged = offsedChanged && queryChanged && rowsChanged;
  next(mutedQuery, queryChanged);
};
