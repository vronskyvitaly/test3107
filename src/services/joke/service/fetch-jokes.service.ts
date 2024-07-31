import axios from "axios";
import { JokeResponseType } from "@/services/joke/type";

export async function fetchJokes(searchTerm: string) {
  const response = await axios.get<{ data: JokeResponseType }>(
    `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(searchTerm)}`,
  );
  return response.data;
}
