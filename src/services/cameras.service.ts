import axios from 'axios';

import {API} from '@/config/API';

class CamerasService {
  private cameras = 'cameras';

  getAll = async () => {
    return axios.get(`${API}/${this.cameras}`);
  }

  getById = async (id: string) => {
    return axios.get(`${API}/${this.cameras}/${id}`);
  }

  addCart = async (id: string) => {
    return axios.put(
      `${API}/${this.cameras}/${id}`,
      {isInCart: true}
    );
  }

  deleteCart = async (id: string) => {
    return axios.put(
      `${API}/${this.cameras}/${id}`,
      {isInCart: false}
    );
  }
}

export default new CamerasService();