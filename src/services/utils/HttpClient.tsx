import APIError from "../../errors/APIError";
import delay from "../../utils/delay";
import { Contact } from "../../utils/types/contactType";

class HttpClient {
  public baseURL;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  get(path: string, options) {
    return this.makeRequest(path, {
      method: "GET",
      headers: options?.headers,
    });
  }

  post(path: string, options) {
    return this.makeRequest(path, {
      method: "POST",
      body: options?.body,
      headers: options?.headers,
    });
  }

  async makeRequest(path: string, options: any) {
    await delay(1000);

    const headers = new Headers();

    if (options.body) {
      headers.append("Content-Type", "application/json");
    }

    if (options.headers) {
      Object.entries(options.headers).forEach(([name, value]) => {
        headers.append(name, value);
      });
    }

    const response = await fetch(`${this.baseURL}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers,
    });

    let responseBody = null;
    const contentType: string = response.headers.get("Content-type")!;
    if (contentType.includes("application/json")) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new APIError(response, responseBody);
  }
}

export default HttpClient;
