import axios from "axios";

class OMDbAPI {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_OMDbAPI;

  private readonly API_KEY = process.env.REACT_APP_API_KEY;

  private readonly API = axios.create({ baseURL: this.BASE_URL });

  private getRandomParam() {
    const defaultParams = ["gun", "world", "life"];
    return defaultParams[Math.floor(Math.random() * defaultParams.length)];
  }

  public async getRandomMovies(): Promise<any> {
    const params = { apikey: this.API_KEY, s: this.getRandomParam() };

    const { data } = await this.API.get<any>("?", {
      params,
    });
    return data;
  }
}

export const OMDbApi = new OMDbAPI();
