export interface IJournalResponse {
  status: string;
  'message-type': string;
  'message-version': string;
  message: IJournalMessage;
}

export interface IJournalMessage {
  'items-per-page': number;
  query: Query;
  'total-results': number;
  items: IJournalItem[];
}

export interface Query {
  'start-index': number;
  'search-terms': string;
}

export interface IJournalItem {
  'last-status-check-time': number;
  counts: Counts;
  breakdowns: Breakdowns;
  publisher: string;
  coverage: Coverage;
  title: string;
  subjects: any[];
  'coverage-type': CoverageType;
  flags: Flags;
  ISSN: string[];
  'issn-type': IssnType[];
}

export interface Counts {
  'current-dois': number;
  'backfile-dois': number;
  'total-dois': number;
}

export interface Breakdowns {
  'dois-by-issued-year': number[][];
}

export interface Coverage {
  'affiliations-current': number;
  'similarity-checking-current': number;
  'descriptions-current': number;
  'ror-ids-current': number;
  'funders-backfile': number;
  'licenses-backfile': number;
  'funders-current': number;
  'affiliations-backfile': number;
  'resource-links-backfile': number;
  'orcids-backfile': number;
  'update-policies-current': number;
  'ror-ids-backfile': number;
  'orcids-current': number;
  'similarity-checking-backfile': number;
  'references-backfile': number;
  'descriptions-backfile': number;
  'award-numbers-backfile': number;
  'update-policies-backfile': number;
  'licenses-current': number;
  'award-numbers-current': number;
  'abstracts-backfile': number;
  'resource-links-current': number;
  'abstracts-current': number;
  'references-current': number;
}

export interface CoverageType {
  all: All;
  backfile: Backfile;
  current: Current;
}

export interface All {
  'last-status-check-time': number;
  affiliations: number;
  abstracts: number;
  orcids: number;
  licenses: number;
  references: number;
  funders: number;
  'similarity-checking': number;
  'award-numbers': number;
  'ror-ids': number;
  'update-policies': number;
  'resource-links': number;
  descriptions: number;
}

export interface Backfile {
  'last-status-check-time': number;
  affiliations: number;
  abstracts: number;
  orcids: number;
  licenses: number;
  references: number;
  funders: number;
  'similarity-checking': number;
  'award-numbers': number;
  'ror-ids': number;
  'update-policies': number;
  'resource-links': number;
  descriptions: number;
}

export interface Current {
  'last-status-check-time': number;
  affiliations: number;
  abstracts: number;
  orcids: number;
  licenses: number;
  references: number;
  funders: number;
  'similarity-checking': number;
  'award-numbers': number;
  'ror-ids': number;
  'update-policies': number;
  'resource-links': number;
  descriptions: number;
}

export interface Flags {
  'deposits-abstracts-current': boolean;
  'deposits-orcids-current': boolean;
  deposits: boolean;
  'deposits-affiliations-backfile': boolean;
  'deposits-update-policies-backfile': boolean;
  'deposits-similarity-checking-backfile': boolean;
  'deposits-award-numbers-current': boolean;
  'deposits-resource-links-current': boolean;
  'deposits-ror-ids-current': boolean;
  'deposits-articles': boolean;
  'deposits-affiliations-current': boolean;
  'deposits-funders-current': boolean;
  'deposits-references-backfile': boolean;
  'deposits-ror-ids-backfile': boolean;
  'deposits-abstracts-backfile': boolean;
  'deposits-licenses-backfile': boolean;
  'deposits-award-numbers-backfile': boolean;
  'deposits-descriptions-current': boolean;
  'deposits-references-current': boolean;
  'deposits-resource-links-backfile': boolean;
  'deposits-descriptions-backfile': boolean;
  'deposits-orcids-backfile': boolean;
  'deposits-funders-backfile': boolean;
  'deposits-update-policies-current': boolean;
  'deposits-similarity-checking-current': boolean;
  'deposits-licenses-current': boolean;
}

export interface IssnType {
  value: string;
  type: string;
}
