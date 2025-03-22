interface CategorySkeleton { message: string }

export interface CategoryListResponse extends CategorySkeleton{
  response: Category[]
}

export interface CategoryResponse extends CategorySkeleton {
  response: Category
}

export interface Category {
  id:          number;
  name:        string;
  description: string;
  image_url:   string;
  created_at:  Date;
  update_at:   Date;
}
