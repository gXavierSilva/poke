import { NextApiResponse } from "next";
import { api } from "./config";
export async function getPokemon(pokemon: string, setValue: any) {
  api.get(`pokemon/${pokemon}`).then((res) =>
    setValue({
      name: res?.data.name,
      img: res?.data.sprites?.front_default,
    }),
  );
}

export async function getPokemonKando(
  offset: number,
  limit: number,
  setValue: any,
) {
  api
    .get(`pokemon/`, {
      params: {
        offset,
        limit,
      },
    })
    .then((res: any) => setValue(res?.data.results));
  // .then((res) => console.log(res));
}
