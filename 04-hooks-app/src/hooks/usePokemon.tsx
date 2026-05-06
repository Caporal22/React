import { useEffect, useState } from "react";

interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
}

interface Props {
    id: number;
}


const usePokemon = ({id}: Props) => {
  
    const [pokemon, setPokemon] = useState< Pokemon | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const getPokemonById =async(id: number) => {
        setIsLoading(true);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json();

        setPokemon({
            id: id, 
            name: data.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        });

        setIsLoading(false);
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getPokemonById(id);


    }, [getPokemonById, id])
  
    return {
        // Props
        isLoading,
        pokemon, 

        //
        formattedId: id.toString().padStart(3, '0')

    };

};

export default usePokemon
