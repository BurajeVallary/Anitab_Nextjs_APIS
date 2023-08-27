'use client';
import {  useState, useEffect} from 'react';
// specify you are on the client side when using hooks which uses it on the client Side, or else you get bugs
import { getMovies } from './utilities/getMovies';
import { IMAGE_BASE_URL } from './config'; 
console.log(('IMAGE_BASE_URL'));
interface MovieProps{
  id: number;
  title: string;
  genre_ids:number[]
  poster_path:string
}
export default function Home() {
const [movies, setMovies] = useState<MovieProps[]>();
useEffect(() => {
  (async() => {
    const movies = await getMovies();
    setMovies(movies);
    console.log({movies});
  })();
}, []);
  return (
    <main>
      <div className='grid grid-cols-4 gap-4'>
      {movies?.map((item) =>(
        <div key={item.id}>
          <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title}/>
        </div>
      ) )}
      </div>
    
    </main>
  )
}