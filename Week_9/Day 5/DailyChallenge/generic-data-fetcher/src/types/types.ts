export interface Recipe {
    id: number;
    title: string;
    image: string;
    summary: string;
  }
  
  export interface ApiResponse<T> {
    results: T[];
  }
  