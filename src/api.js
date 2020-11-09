import Server from './axios'

const baseURL = '/api'

export default {
  async getData() {
    return await Server.axios('GET', baseURL, `/login`)
  }
}