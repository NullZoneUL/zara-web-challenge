import md5 from "md5";
import apiKey from "@api-key";

export const BASE_API_URL = "https://gateway.marvel.com/v1/public/";

export const MAX_NUM_CHARACTERS = 50;

export enum ApiServices {
  characters = "characters",
}

export const getFromApi = (
  url: string,
  parameters?: { [key: string]: string },
) => {
  const timeStamp = Date.now();
  const hash = md5(`${timeStamp}${apiKey.private_key}${apiKey.public_key}`);
  return fetch(
    `${url}?${parameters ? formatParameters(parameters) : ""}&ts=${timeStamp}&apikey=${apiKey.public_key}&hash=${hash}`,
  )
    .then((res) => res.json())
    .then((res) => res.data);
};

const formatParameters = (parameters: { [key: string]: string }) =>
  JSON.stringify(parameters)
    .replace("{", "")
    .replace("}", "")
    .split('"')
    .join("")
    .split(":")
    .join("=")
    .split(",")
    .join("&");
