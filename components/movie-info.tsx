import Link from "next/link";
import { API_URL } from "@/app/(home)/page";
import styles from "@/styles/movie-info.module.css";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} className={styles.poster} />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐ {movie.vote_average.toFixed(1)}</h3>
        <p className={styles.info}>{movie.overview}</p>
        <Link href={movie.homepage} target="_blank">
          Homepage &rarr;
        </Link>
      </div>
    </div>
  );
}
