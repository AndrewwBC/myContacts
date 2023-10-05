import HttpClient from "./utils/HttpClient";

class CategoryService {
  private httpClient;
  //espelho do category controller
  constructor() {
    this.httpClient = new HttpClient("http://localhost:3001");
  }

  async listCategories(orderBy = "asc") {
    return this.httpClient.get(`/categories?orderBy=${orderBy}`);
  }

  async createCategorie(categorie: any) {
    return this.httpClient.post(`/categories`, {
      body: categorie,
    });
  }
}

export default new CategoryService();
