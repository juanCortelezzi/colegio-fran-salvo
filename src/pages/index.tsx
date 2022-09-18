import type { NextPage } from "next";
import { Layout } from "@/components/layout";
import Link from "next/link";

interface Curso {
  id: number,
  year: number,
  division: string,
  students: number,
  shift: "Morning" | "Evening"
}

const cursos: Curso[] = [
  { id: 0, year: 1, division: "a", students: 21, shift: "Morning" },
  { id: 1, year: 2, division: "a", students: 22, shift: "Morning" },
  { id: 2, year: 2, division: "b", students: 23, shift: "Evening" },
  { id: 3, year: 3, division: "a", students: 24, shift: "Morning" },
  { id: 4, year: 4, division: "a", students: 25, shift: "Morning" },
];

function Card({ year, division, students, shift }: Curso) {
  return (
    <div className="not-prose">
      <Link href="/curso/2A-manana">
        <a>
          <div className="card w-full border border-primary shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                {year}
                {division}
              </h2>
              <p>Turno: {shift}</p>
              <p>{students} students</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

const Home: NextPage = () => {
  return (
    <Layout
      title="Colegio Francisco Salvo"
      desc="Webcampus precios cuidados"
      className="prose-sm w-full sm:prose sm:max-w-none"
    >
      <input
        type="text"
        className="input input-bordered w-full"
        placeholder="Search..."
      />

      <div className="my-6" />

      <div className="grid grid-cols-1 content-evenly justify-center gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cursos.map((c) => (
          <Card
            key={c.id}
            id={c.id}
            year={c.year}
            division={c.division}
            students={c.students}
            shift={c.shift}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
