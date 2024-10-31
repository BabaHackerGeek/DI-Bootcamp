export interface Recipe {
    id: number;
    title: string;
    image: string;
  }
  export interface ApiResponse<T> {
    results: T[];
  }
  