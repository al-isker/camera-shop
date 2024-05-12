import axios from 'axios';

import {API} from '@/config/API';

class CamerasService {
  private API: string = API;
  private cameras: string = '/cameras';

  getAll = async () => {
    const targetURL: URL = new URL(this.cameras, this.API);

    return axios.get(targetURL.href);
  }

  getById = async (id: string) => {
    const targetURL: URL = new URL(`${this.cameras}/${id}`, this.API);

    return axios.get(targetURL.href);
  }

  getByParams = async (name: string, value: string) => {
    const targetURL: URL = new URL(this.cameras, this.API);
    targetURL.searchParams.append(name, value);

    return axios.get(targetURL.href);
  }

  getLimitByParams = async (limit: string, name: string, value: string) => {
    const targetURL: URL = new URL(this.cameras, this.API);
    targetURL.searchParams.append('page', '1');
    targetURL.searchParams.append('limit', limit);
    targetURL.searchParams.append(name, value);

    return axios.get(targetURL.href);
  }

  addCart = async (id: string) => {
    const targetURL: URL = new URL(`${this.cameras}/${id}`, this.API);

    return axios.put(
      targetURL.href,
      {isInCart: true}
    );
  }

  deleteCart = async (id: string) => {
    const targetURL: URL = new URL(`${this.cameras}/${id}`, this.API);

    return axios.put(
      targetURL.href,
      {isInCart: false}
    );
  }
}

export default new CamerasService();