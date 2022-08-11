import axios from "axios";
// const axios = require("axios").default;

export const baseURL: string = "https://pokeapi.co/api/v2/";

export const api = axios.create({
  baseURL,
});
