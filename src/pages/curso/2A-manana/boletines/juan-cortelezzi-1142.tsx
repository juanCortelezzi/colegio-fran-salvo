import { NestedPageLayout } from "@/components/layout";

const Row = ({
  materia,
  notas,
}: {
  materia: string;
  notas: (number | undefined)[];
}) => {
  const filteredNotas = notas.filter((n) => n !== undefined) as Array<number>;
  const promedio = filteredNotas.reduce<number>((a, c) => a + c, 0) / 3;

  return (
    <tr>
      <th>{materia}</th>
      {notas.map((nota, idx) => (
        <td key={`${nota}${idx}`}>
          <p>{nota}</p>
        </td>
      ))}
      <td>
        <p>{promedio.toFixed(1)}</p>
      </td>
    </tr>
  );
};

export default function BoletinesPage() {
  return (
    <NestedPageLayout
      title="CFS - Curso 2A Manana - Boletines - Juan Cortelezzi"
      desc="boletin Juan Cortelezzi"
      backToUrl="/curso/2A-manana/boletines"
      backToName="Boletines"
      name="2A Manana Juan Cortelezzi"
      className="prose-sm w-full sm:prose sm:max-w-none"
    >
      <p>El boletin esta completo</p>
      <p>Promedio Anual: 8</p>
      <div className="not-prose overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Materia</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>Dic</th>
              <th>Feb</th>
              <th>Mar</th>
              <th>Promedio</th>
            </tr>
          </thead>
          <tbody>
            <Row
              materia="Matematica"
              notas={[8, 7, 7, undefined, undefined, undefined]}
            />
            <Row
              materia="Ingenieria"
              notas={[8, 7, 7, undefined, undefined, undefined]}
            />
            <Row materia="Lengua" notas={[8, 7, 7, 6, undefined, undefined]} />
            <Row
              materia="Quimica"
              notas={[8, 7, 7, undefined, undefined, undefined]}
            />
            <Row
              materia="Fisica"
              notas={[8, 7, 7, undefined, undefined, undefined]}
            />
          </tbody>
        </table>
      </div>
    </NestedPageLayout>
  );
}
