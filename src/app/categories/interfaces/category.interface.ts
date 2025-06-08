export interface CategoryResponse {
  status: string;
  response: Category;
}
export interface CategoriesResponse {
  status: string;
  response: Category[];
}
export interface CategoriesErrorResponse {
  status: string;
  response: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image_url: string;
  created_at: Date;
  update_at: Date;
}
