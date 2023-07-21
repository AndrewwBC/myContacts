import HttpClient from "./utils/HttpClient";

class ContactService {
  public httpClient;

  constructor() {
    this.httpClient = new HttpClient("http://localhost:3001");
  }

  async listContacts(orderBy: string) {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  async createContact(contact: object) {
    return this.httpClient.post(`/contacts`, contact);
  }
}

export default new ContactService();
