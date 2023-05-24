import { readFileSync } from 'node:fs';
import { FileReaderInterface } from './file-reader.interface.js';
import { Offer } from '../../types/offer.type.js';
import { CityType, GoodType, OfferType } from '../../const.js';
import { UserRole } from '../../types/user.type.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }
    const lines = this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'));

    return lines.map((data) => {
      const [
        title,
        description,
        postDate,
        city,
        previewImage,
        images,
        isPremium,
        rating,
        type,
        rooms,
        guests,
        price,
        goods,
        name,
        email,
        avatar,
        password,
        userType,
        commentsCount,
        location,
      ] = data;
      const [latitude = null, longitude = null] = this.parseGroup(location);

      return {
        title,
        description,
        postDate: new Date(postDate),
        city: city as CityType,
        previewImage,
        images: this.parseGroup(images),
        isPremium: !this.isEmpty(isPremium),
        rating: Number(rating),
        type: type as OfferType,
        rooms: Number(rooms),
        guests: Number(guests),
        price: Number(price),
        goods: this.parseGroup(goods) as GoodType[],
        user: {
          name,
          email,
          avatar: this.isEmpty(avatar) ? undefined : avatar,
          password,
          type: userType as UserRole,
        },
        commentsCount: Number(commentsCount),
        location: { latitude: Number(latitude), longitude: Number(longitude) },
      };
    });
  }

  private isEmpty(field: string): boolean {
    return field === '-';
  }

  private parseGroup(str: string): string[] {
    if (!str) {
      return [];
    }
    return str.split(';');
  }
}
