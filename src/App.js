import Pokemon from './Pokemon'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination'
export default function App() {
  const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()
  const [loading, setLoading] = useState(true)
  //res.data -> gives json files of api here
  useEffect(() => {
    let cancel

    axios.get(currentUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false);
      setNextUrl(res.data.next)
      setPrevUrl(res.data.previous)
      setPokemon(res.data.results.map(e => e.name));
    }
    );
    return function () {
      cancel()
    }
  }, [currentUrl]);
  function gotoNextPage() {
    setCurrentUrl(nextUrl)
  }
  function gotoPrevPage() {
    setCurrentUrl(prevUrl)
  }
  const [pokemon, setPokemon] = useState([])
  return (
    <>
      <Pokemon pokemon={pokemon} />
      <Pagination gotoNextPage={nextUrl ? gotoNextPage : null}
        gotoPrevPage={prevUrl ? gotoPrevPage : null} />
    </>
  )
}