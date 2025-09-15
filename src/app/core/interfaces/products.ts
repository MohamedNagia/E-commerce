export interface Product {
  sold: number;
  images: any[];
  subcategory: any[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Category;
  brand: Category;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
