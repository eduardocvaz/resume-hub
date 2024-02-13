// post.interface.ts
export interface Post {
  id: number;
  attributes: {
    title: string;
    body: string;
    slug: string;
    sumary: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: {
        attributes: {
          name: string;
          alternativeText: string;
          caption: string;
          width: number;
          height: number;
          size: number;
          url: string;
        }
      }
    };
  };
}

// meta.interface.ts
export interface PaginationMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

// api-response.interface.ts
export interface ApiResponse {
  data: Post[];
  meta: PaginationMeta;
}
