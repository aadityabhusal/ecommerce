export interface ICategory {
  id?: string;
  slug: string;
  name: string;
}

export interface ICategoryDetails {
  id: string;
  slug: string;
  name: string;
  parentId: string;
  description: string;
}
