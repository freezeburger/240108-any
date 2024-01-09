import { AbsoluteURL, Categories, DoubleDecimal, Integer, TextLong, TextShort, UniqueId } from "./generics";


export interface Product {
  id: UniqueId,
  title: TextShort,
  description: TextLong,
  price: DoubleDecimal,
  discountPercentage: DoubleDecimal,
  rating: DoubleDecimal,
  stock: Integer,
  brand: string,
  category: Categories,
  thumbnail: AbsoluteURL,
  images: AbsoluteURL[]
}

