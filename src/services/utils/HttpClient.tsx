import APIError from "../../errors/APIError";
import delay from "../../utils/delay";

class HttpClient {
  public baseURL;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(path: string) {
    await delay(500);

    const response = await fetch(`${this.baseURL}${path}`);

    let body = null;
    const contentType: string = response.headers.get("Content-type")!;
    if (contentType.includes("application/json")) {
      body = await response.json();
    }

    if (response.status === 200) {
      return body;
    }

    throw new APIError(response, body);
  }
}

export default HttpClient;
