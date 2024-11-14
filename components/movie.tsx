import Image from "next/image";
import Link from "next/link";
import styles from "../styles/movie.module.css";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

export default function Movie({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movies/${movie.id}`} key={movie.id}>
      <div className={styles.movie}>
        <Image
          src={movie.poster_path}
          alt={movie.title}
          width={78 * 2}
          height={117 * 2}
        />
        <div>{movie.title}</div>
      </div>
    </Link>
  );
}
