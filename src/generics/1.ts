import axios from "axios";

async function fetchData(url: string): Promise<string> {
  try {
    const response: any = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
