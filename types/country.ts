export interface TCountry {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: TFlags;
  currencies: TCurrency[];
  languages: TLanguage[];
  translations: TTranslations;
  flag: string;
  regionalBlocs: TRegionalBloc[];
  cioc: string;
  independent: boolean;
}

interface TRegionalBloc {
  acronym: string;
  name: string;
}

interface TTranslations {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
}

interface TLanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface TCurrency {
  code: string;
  name: string;
  symbol: string;
}

interface TFlags {
  svg: string;
  png: string;
}
