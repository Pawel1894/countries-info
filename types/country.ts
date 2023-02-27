export interface TCountry {
  name: TName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: TCurrencies;
  idd: TIdd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: TLanguages;
  translations: TTranslations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: TDemonyms;
  flag: string;
  maps: TMaps;
  population: number;
  gini: TGini;
  fifa: string;
  car: TCar;
  timezones: string[];
  continents: string[];
  flags: TFlags;
  coatOfArms: TCoatOfArms;
  startOfWeek: string;
  capitalInfo: TCapitalInfo;
  postalCode: TPostalCode;
}

export interface TPostalCode {
  format: string;
  regex: string;
}

export interface TCapitalInfo {
  latlng: number[];
}

export interface TCoatOfArms {
  png: string;
  svg: string;
}

export interface TFlags {
  png: string;
  svg: string;
  alt: string;
}

export interface TCar {
  signs: string[];
  side: string;
}

export interface TGini {
  "2018": number;
}

export interface TMaps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface TDemonyms {
  eng: TEng;
  fra: TEng;
}

export interface TEng {
  f: string;
  m: string;
}

export interface TTranslations {
  ara: TPol;
  bre: TPol;
  ces: TPol;
  cym: TPol;
  deu: TPol;
  est: TPol;
  fin: TPol;
  fra: TPol;
  hrv: TPol;
  hun: TPol;
  ita: TPol;
  jpn: TPol;
  kor: TPol;
  nld: TPol;
  per: TPol;
  pol: TPol;
  por: TPol;
  rus: TPol;
  slk: TPol;
  spa: TPol;
  srp: TPol;
  swe: TPol;
  tur: TPol;
  urd: TPol;
  zho: TPol;
}

export interface TLanguages {
  pol: string;
}

export interface TIdd {
  root: string;
  suffixes: string[];
}

export interface TCurrencies {
  PLN: TPLN;
}

export interface TPLN {
  name: string;
  symbol: string;
}

export interface TName {
  common: string;
  official: string;
  nativeName: TNativeName;
}

export interface TNativeName {
  pol: TPol;
}

export interface TPol {
  official: string;
  common: string;
}
