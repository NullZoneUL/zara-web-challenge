import md5 from "md5";
import apiKey from "@api-key";

const BASE_URL = "https://gateway.marvel.com:443/v1/public/";

export enum ApiServices {
  characters = "characters",
}

export const getFromApi = (
  service: keyof typeof ApiServices,
  parameters: { [key: string]: string },
) => {
  const timeStamp = Date.now();
  const hash = md5(`${timeStamp}${apiKey.private_key}${apiKey.public_key}`);
  return fetch(
    `${BASE_URL}${service}?${formatParameters(parameters)}&ts=${timeStamp}&apikey=${apiKey.public_key}&hash=${hash}`,
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
