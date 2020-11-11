import Server from './axios'

const api = {
  async getData() {
    return await Server.get(`/login`)
  },

  async postData() {
    return await Server.post(`/add`)
  }
}

export default api
