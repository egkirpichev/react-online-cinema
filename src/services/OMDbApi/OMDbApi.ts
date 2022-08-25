import axios from "axios";
import { IMovieFull, IMovieShort, Param } from "../../types/types";

class OMDbAPI {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_OMDbAPI;

  private readonly API_KEY = process.env.REACT_APP_API_KEY;

  private readonly API = axios.create({ baseURL: this.BASE_URL });

  private getRandomParam() {
    const defaultParams = [
      "gun",
      "world",
      "life",
      "story",
      "sea",
      "dark",
      "road",
    ];
    return defaultParams[Math.floor(Math.random() * defaultParams.length)];
  }

  public async getRandomMovies(): Promise<IMovieShort[]> {
    const params = {
      [Param.ApiKey]: this.API_KEY,
      [Param.Search]: this.getRandomParam(),
    };

    const {
      data: { Search },
    } = await this.API.get("", {
      params,
    });

    return Search;
  }

  public async getMovieById(id: string): Promise<IMovieFull> {
    const params = { [Param.ApiKey]: this.API_KEY, [Param.Id]: id };
    const { data } = await this.API.get("", {
      params,
    });
    return data;
  }
}

export const OMDbApi = new OMDbAPI();
