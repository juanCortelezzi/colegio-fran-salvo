import { WeirdLayout } from "@/components/layout";
import Link from "next/link";

const Button = () => (
  <Link passHref href="/curso/2A-manana/ingenieria">
    <button className="btn btn-sm btn-primary">Detalle</button>
  </Link>
);

export default function CursoPage() {
  return (
    <WeirdLayout
      title="CFS - Curso 2A Manana"
      desc="datos del curso 2A manana"
      className="prose-sm w-full sm:prose sm:max-w-none"
    >
      <p>Total de materias: 6</p>
      <div className="overflow-x-auto">
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
            <tr>
              <th>1</th>
              <td>Matematica</td>
              <td>Viviana Fastuca</td>
              <td>
                <Button />
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Ingenieria</td>
              <td>Mateo Sauton</td>
              <td>
                <Button />
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>Lengua</td>
              <td>Betania Bojanich</td>
              <td>
                <Button />
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td>Quimica</td>
              <td>Daniela Collante</td>
              <td>
                <Button />
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td>Fisica</td>
              <td>Philleas Kettlehorn</td>
              <td>
                <Button />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </WeirdLayout>
  );
}
