'use client';
import {  useState, useEffect} from 'react';
import { getMovies } from '../utilities/getMovies';
import { IMAGE_BASE_URL } from '../config';
import Link from 'next/link';
import Navigation from './Navbar';
console.log(('IMAGE_BASE_URL'));
interface MovieProps{
  id: number;
  title: string;
  genre_ids:number[]
  poster_path:string
}
 function Home() {
const [movies, setMovies] = useState<MovieProps[]>();
const [filteredMovies,setFilteredMovies] = useState<MovieProps[]>();
useEffect(() => {
  (async() => {
    const movies = await getMovies();
    setMovies(movies);
    https://github.com/BurajeVallary/Anitab_Nextjs_APIS
    // console.log({movies});
  })();
}, []);
const filterMovies = (query:string) => {
  if (query === '') {
    setFilteredMovies(movies);
  } else {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  }
};
  return (
    <main>
      <Navigation onFilter={filterMovies} />
      <div className='grid grid-cols-4 gap-4'>
      {movies?.map((item) =>(
        <Link href={`/movie/${item.id}`} key={item.id}>
        <div>
          <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title}/>
        </div>
        </Link>
      ) )}
      </div>
    
    </main>
  )
}
export default Home;