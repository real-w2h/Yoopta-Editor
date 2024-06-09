import { http } from './http';

export const api = {
  searchPage(path: string) {
    return http.get('/public/product', {
      params: { path },
    });
  },
};
