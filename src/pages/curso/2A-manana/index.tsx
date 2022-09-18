import { WeirdLayout } from "@/components/layout";
import Link from "next/link";

const Button = () => (
  <Link passHref href="/curso/2A-manana/ingenieria">
    <button className="btn btn-primary btn-sm">Detalle</button>
  </Link>
);

const Row = ({
  number,
  materia,
  profesor,
}: {
  number: number;
  materia: string;
  profesor: string;
}) => {
  return (
    <tr>
      <th>{number}</th>
      <td>{materia}</td>
      <td>{profesor}</td>
      <td className="flex items-center justify-end">
        <Button />
      </td>
    </tr>
  );
};

export default function CursoPage() {
  return (
    <WeirdLayout
      title="CFS - Curso 2A Manana"
      desc="datos del curso 2A manana"
      className="prose-sm w-full sm:prose sm:max-w-none"
    >
      <p>Total de materias: 6</p>
      <div className="not-prose overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th />
              <th>Materia</th>
              <th>Profesor</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <Row number={1} materia="Matematica" profesor="Viviana Fastuca" />
            <Row number={2} materia="Ingenieria" profesor="Mateo Sauton" />
            <Row number={3} materia="Lengua" profesor="Betania Bojanich" />
            <Row number={4} materia="Quimica" profesor="Daniela Collante" />
            <Row number={5} materia="Fisica" profesor="Philleas Kettlehorn" />
          </tbody>
        </table>
      </div>
    </WeirdLayout>
  );
}
