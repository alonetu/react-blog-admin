import Server from './axios'

const api = {
  async getData() {
    return await Server.get(`/login`)
  }
}

export default api
