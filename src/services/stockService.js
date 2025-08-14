import axios from "axios";

export default class StockService {
  constructor() {
    this.client = axios.create({
      baseURL: "https://sheetdb.io/api/v1/yk5ae1b2druhq",
    });
  }

  async fetchData(sheetName) {
    try {
      const response = await this.client.get(`/?sheet=$${sheetName}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching stock data for ${sheetName}:`, error);
      throw error;
    }
  }
}
