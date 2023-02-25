export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Gini {
  "2018": number;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Translations {
  ara: Pol;
  bre: Pol;
  ces: Pol;
  cym: Pol;
  deu: Pol;
  est: Pol;
  fin: Pol;
  fra: Pol;
  hrv: Pol;
  hun: Pol;
  ita: Pol;
  jpn: Pol;
  kor: Pol;
  nld: Pol;
  per: Pol;
  pol: Pol;
  por: Pol;
  rus: Pol;
  slk: Pol;
  spa: Pol;
  srp: Pol;
  swe: Pol;
  tur: Pol;
  urd: Pol;
  zho: Pol;
}

export interface Languages {
  pol: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Currencies {
  PLN: PLN;
}

export interface PLN {
  name: string;
  symbol: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  pol: Pol;
}

interface Pol {
  official: string;
  common: string;
}
