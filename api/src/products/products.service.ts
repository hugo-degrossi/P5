import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type Product = any;

@Injectable()
export class ProductsService {
  private readonly products = [
    {
      id: 0,
      name: 'Socks1',
      isLiked: false,
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.1846277416.0884%2Fur%2Csocks_female_back_medium%2Ctall_portrait%2C750x1000-bg%2Cf8f8f8.4.jpg&f=1&nofb=1',
    },
    {
      id: 1,
      name: 'Socks2',
      isLiked: true,
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.1846277416.0884%2Fur%2Csocks_female_back_medium%2Ctall_portrait%2C750x1000-bg%2Cf8f8f8.4.jpg&f=1&nofb=1',
    },
  ];

  async getAll(): Promise<Product | undefined> {
    return this.products;
  }
}
