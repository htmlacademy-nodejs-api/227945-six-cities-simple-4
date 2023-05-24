import { CityType, OfferType, GoodType } from "../const"
import { User } from "./user.type"

export type LocationType = {
  latitude: number,
  longitude: number,
}

export type Offer = {
  title: string,
  description: string,
  postDate: Date,
  city: CityType,
  previewImage: string,
  images: string[],
  isPremium: boolean,
  rating: number,
  type: OfferType,
  rooms: number,
  guests: number,
  price: number,
  goods: GoodType[],
  user: User,
  commentsCount: number;
  // todo user maybe string with link
  location: LocationType,
}
