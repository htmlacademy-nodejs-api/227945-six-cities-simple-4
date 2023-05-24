export const HELP_TITLE = ' Программа для подготовки данных для REST API сервера.';
export const HELP_EXAMPLE = ' Пример: main.js --<command> [--arguments]  ';
export const HELP_COMMANDS = ` Команды:
  --version:                   # выводит номер версии
  --help:                      # печатает этот текст
  --import <path>:             # импортирует данные из TSV
  --generate <n> <path> <url>  # генерирует произвольное количество тестовых данных`;

export const ErrorMessage = {
  Import: 'Не удалось импортировать данные. Ошибка: '
} as const;

export const UserNameLength = {
  Min: 1,
  Max: 15,
};
export const UserPasswordLength = {
  Min: 6,
  Max: 12,
};

export const OfferTitleLength = {
  Min: 10,
  Max: 100,
};

export const OfferDescriptionLength = {
  Min: 20,
  Max: 1024,
};

export const OfferRoomsAmount = {
  Min: 1,
  Max: 8,
};

export const OfferGuestsAmount = {
  Min: 1,
  Max: 10,
};

export const OfferRating = {
  Min: 1,
  Max: 5,
};

export const OfferPrice = {
  Min: 100,
  Max: 100000,
};

export enum OfferType {
  Apartment = 'apartment',
  House = 'house',
  Room = 'room',
  Hotel = 'hotel'
};

export enum GoodType {
  Breakfast = 'Breakfast',
  AirConditioning = 'Air conditioning',
  LaptopWorkspace = 'Laptop friendly workspace',
  BabySeat = 'Baby seat',
  Washer = 'Washer',
  Towels = 'Towels',
  Fridge = 'Fridge',
};

export enum CityType {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
};

export const Paris = {
  name: CityType.Paris,
  location: {
    latitude: 48.85661,
    longitude: 2.351499
  }
};

export const Cologne = {
  name: CityType.Cologne,
  location: {
    latitude: 50.938361,
    longitude: 6.959974
  }
};

export const Brussels = {
  name: CityType.Brussels,
  location: {
    latitude: 50.846557,
    longitude: 4.351697
  }
};

export const Amsterdam = {
  name: CityType.Amsterdam,
  location: {
    latitude: 52.370216,
    longitude: 4.895168
  }
};

export const Hamburg = {
  name: CityType.Hamburg,
  location: {
    latitude: 53.550341,
    longitude: 10.000654
  }
};

export const Dusseldorf = {
  name: CityType.Dusseldorf,
  location: {
    latitude: 51.225402,
    longitude: 6.776314
  }
};
