import axios from "axios";
import {
  IMovieFull,
  IMovieShort,
  IRequestParams,
  Param,
} from "../../types/types";

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

  public async getRandomMovies(): Promise<{
    Search: IMovieShort[];
    params: IRequestParams;
  }> {
    const params = {
      [Param.ApiKey]: this.API_KEY,
      [Param.Search]: this.getRandomParam(),
      [Param.Page]: "1",
    };

    const {
      data: { Search },
    } = await this.API.get("", {
      params,
    });

    return { Search, params };
  }

  public async getMovieById(id: string): Promise<IMovieFull> {
    const params = { [Param.ApiKey]: this.API_KEY, [Param.Id]: id };
    const { data } = await this.API.get("", {
      params,
    });
    return data;
  }

  public async loadMoreMovies(initialParams: IRequestParams): Promise<any> {
    const { apikey, s, page } = initialParams;
    const params = { apikey, s, page: (Number(page) + 1).toString() };
    const {
      config,
      data: { Search },
    } = await this.API.get("", {
      params,
    });

    return { config, Search, params };
  }
}

export const OMDbApi = new OMDbAPI();
