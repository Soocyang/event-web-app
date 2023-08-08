export interface SearchEvent {
  _embedded: SearchEventEmbedded;
  _links:    SearchEventLinks;
  page:      Page;
}

export interface SearchEventEmbedded {
  events: EventDetails[];
}

export interface EventDetails {
  name:             string;
  type:             EventType;
  id:               string;
  test:             boolean;
  url:              string;
  locale:           Locale;
  images:           Image[];
  sales:            Sales;
  dates:            Dates;
  classifications:  Classification[];
  promoter?:        Promoter;
  promoters?:       Promoter[];
  info?:            string;
  accessibility?:   Accessibility;
  ticketLimit?:     TicketLimit;
  ageRestrictions?: AgeRestrictions;
  ticketing?:       Ticketing;
  _links:           EventLinks;
  _embedded:        EventEmbedded;
  priceRanges?:     PriceRange[];
  seatmap?:         Seatmap;
  pleaseNote?:      string;
  products?:        Product[];
  outlets?:         Outlet[];
}

export interface EventEmbedded {
  venues:      Venue[];
  attractions: Attraction[];
}

export interface Attraction {
  name:            string;
  type:            AttractionType;
  id:              string;
  test:            boolean;
  url:             string;
  locale:          Locale;
  externalLinks?:  ExternalLinks;
  images:          Image[];
  classifications: Classification[];
  upcomingEvents:  AttractionUpcomingEvents;
  _links:          AttractionLinks;
  aliases?:        string[];
}

export interface AttractionLinks {
  self: First;
}

export interface First {
  href: string;
}

export interface Classification {
  primary:  boolean;
  segment:  Genre;
  genre:    Genre;
  subGenre: Genre;
  type?:    Genre;
  subType?: Genre;
  family:   boolean;
}

export interface Genre {
  id:   string;
  name: string;
}

export interface ExternalLinks {
  twitter:      Facebook[];
  facebook:     Facebook[];
  wiki:         Facebook[];
  instagram:    Facebook[];
  homepage:     Facebook[];
  youtube?:     Facebook[];
  itunes?:      Facebook[];
  lastfm?:      Facebook[];
  spotify?:     Facebook[];
  musicbrainz?: Musicbrainz[];
}

export interface Facebook {
  url: string;
}

export interface Musicbrainz {
  id: string;
}

export interface Image {
  ratio?:   Ratio;
  url:      string;
  width:    number;
  height:   number;
  fallback: boolean;
}

export enum Ratio {
  The16_9 = "16_9",
  The3_2 = "3_2",
  The4_3 = "4_3",
}

export enum Locale {
  EnDe = "en-de",
  EnUs = "en-us",
}

export enum AttractionType {
  Attraction = "attraction",
}

export interface AttractionUpcomingEvents {
  ticketmaster: number;
  _total:       number;
  _filtered:    number;
  tmr?:         number;
  "mfx-de"?:    number;
  ticketweb?:   number;
}

export interface Venue {
  name:                     string;
  type:                     VenueType;
  id:                       string;
  test:                     boolean;
  url?:                     string;
  locale:                   Locale;
  images?:                  Image[];
  postalCode:               string;
  timezone:                 Timezone;
  city:                     City;
  state?:                   State;
  country:                  Country;
  address:                  Address;
  location:                 Location;
  markets?:                 Genre[];
  dmas:                     DMA[];
  social?:                  Social;
  boxOfficeInfo?:           BoxOfficeInfo;
  parkingDetail?:           string;
  generalInfo?:             GeneralInfo;
  upcomingEvents:           VenueUpcomingEvents;
  _links:                   AttractionLinks;
  accessibleSeatingDetail?: string;
  ada?:                     Ada;
  aliases?:                 string[];
}

export interface Ada {
  adaPhones:     string;
  adaCustomCopy: string;
  adaHours:      string;
}

export interface Address {
  line1: string;
}

export interface BoxOfficeInfo {
  phoneNumberDetail?:     string;
  openHoursDetail?:       string;
  acceptedPaymentDetail?: string;
  willCallDetail?:        string;
}

export interface City {
  name: string;
}

export interface Country {
  name:        CountryName;
  countryCode: CountryCode;
}

export enum CountryCode {
  GB = "GB",
  Us = "US",
}

export enum CountryName {
  GreatBritain = "Great Britain",
  UnitedStatesOfAmerica = "United States Of America",
}

export interface DMA {
  id: number;
}

export interface GeneralInfo {
  generalRule?: string;
  childRule?:   string;
}

export interface Location {
  longitude: string;
  latitude:  string;
}

export interface Social {
  twitter: Twitter;
}

export interface Twitter {
  handle: string;
}

export interface State {
  name:      string;
  stateCode: string;
}

export enum Timezone {
  AmericaChicago = "America/Chicago",
  AmericaDenver = "America/Denver",
  AmericaNewYork = "America/New_York",
  AmericaPhoenix = "America/Phoenix",
  EuropeLondon = "Europe/London",
}

export enum VenueType {
  Venue = "venue",
}

export interface VenueUpcomingEvents {
  tmr?:          number;
  ticketmaster?: number;
  _total:        number;
  _filtered:     number;
}

export interface EventLinks {
  self:        First;
  attractions: First[];
  venues:      First[];
}

export interface Accessibility {
  info?:        string;
  ticketLimit?: number;
}

export interface AgeRestrictions {
  legalAgeEnforced: boolean;
}

export interface Dates {
  start:            Start;
  timezone?:        Timezone;
  status:           Status;
  spanMultipleDays: boolean;
}

export interface Start {
  localDate:      Date;
  localTime:      string;
  dateTime:       Date;
  dateTBD:        boolean;
  dateTBA:        boolean;
  timeTBA:        boolean;
  noSpecificTime: boolean;
}

export interface Status {
  code: Code;
}

export enum Code {
  Offsale = "offsale",
  Onsale = "onsale",
  Rescheduled = "rescheduled",
}

export interface Outlet {
  url:  string;
  type: string;
}

export interface PriceRange {
  type:     PriceRangeType;
  currency: Currency;
  min:      number;
  max:      number;
}

export enum Currency {
  Usd = "USD",
}

export enum PriceRangeType {
  Standard = "standard",
}

export interface Product {
  name:            string;
  id:              string;
  url:             string;
  type:            ProductType;
  classifications: Classification[];
}

export enum ProductType {
  Parking = "Parking",
  Upsell = "Upsell",
}

export interface Promoter {
  id:          string;
  name:        PromoterName;
  description: Description;
}

export enum Description {
  LiveNationMusicNtlUsa = "LIVE NATION MUSIC / NTL / USA",
  MlbRegularSeasonNtlUsa = "MLB REGULAR SEASON / NTL / USA",
  NederlanderProductionsNtlUsa = "NEDERLANDER PRODUCTIONS / NTL / USA",
  NflExhibitionPreseasonNtlUsa = "NFL EXHIBITION & PRESEASON / NTL / USA",
  NflRegularSeasonNtlUsa = "NFL REGULAR SEASON / NTL / USA",
  PromotedByVenueNtlUsa = "PROMOTED BY VENUE / NTL / USA",
}

export enum PromoterName {
  LiveNationMusic = "LIVE NATION MUSIC",
  MlbRegularSeason = "MLB REGULAR SEASON",
  NederlanderProductions = "NEDERLANDER PRODUCTIONS",
  NflExhibitionPreseason = "NFL EXHIBITION & PRESEASON",
  NflRegularSeason = "NFL REGULAR SEASON",
  PromotedByVenue = "PROMOTED BY VENUE",
}

export interface Sales {
  public:    Public;
  presales?: Presale[];
}

export interface Presale {
  startDateTime: Date;
  endDateTime:   Date;
  name:          string;
  description?:  string;
}

export interface Public {
  startDateTime?: Date;
  startTBD:       boolean;
  startTBA:       boolean;
  endDateTime?:   Date;
}

export interface Seatmap {
  staticUrl: string;
}

export interface TicketLimit {
  info: string;
}

export interface Ticketing {
  safeTix:             AllInclusivePricing;
  allInclusivePricing: AllInclusivePricing;
}

export interface AllInclusivePricing {
  enabled: boolean;
}

export enum EventType {
  Event = "event",
}

export interface SearchEventLinks {
  first: First;
  self:  First;
  next:  First;
  last:  First;
}

export interface Page {
  size:          number;
  totalElements: number;
  totalPages:    number;
  number:        number;
}
