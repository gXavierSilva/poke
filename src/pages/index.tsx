import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getPokemon, getPokemonKando } from "./api/endpoints";
import styles from "../styles/styles.module.css";
import image from "../styles/assets/Pokémon.full.3423411.png";

interface pokemon {
  name: string;
  url: string;
}
interface onePokemon {
  name: string;
  img: string;
}

const Home: NextPage = () => {
  const [listPokemon, setListPokemon] = useState([]);
  const [onePokemon, setOnePokemon] = useState<onePokemon>({
    name: "",
    img: "",
  });
  const [openPokemon, setOpenPokemon] = useState(false);
  // async function getPokemon() {
  //   return await getPokemonKando(0, 151);
  // }
  useEffect(() => {
    getPokemonKando(0, 151, setListPokemon);
  }, []);

  return (
    <div className={styles.main}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {!openPokemon &&
          listPokemon?.map((value: any) => (
            <div className={styles.cardPokemon} key={value?.name}>
              <button
                onClick={() => {
                  getPokemon(value?.name, setOnePokemon);
                  setOpenPokemon(!openPokemon);
                }}
              >
                {value?.name}
              </button>
            </div>
          ))}

        {openPokemon && (
          <div className={styles.pokeInfo}>
            <img src={onePokemon?.img} alt="Pokemons" />
            <p>{onePokemon?.name}</p>
            <button
              onClick={() => {
                setOpenPokemon(!openPokemon);
              }}
            >
              Voltar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
