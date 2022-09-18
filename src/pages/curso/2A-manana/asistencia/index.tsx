import { NestedPageLayout } from "@/components/layout";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Button = () => (
  <Link passHref href="/curso/2A-manana/asistencia/juan-cortelezzi-1142">
    <button className="btn btn-primary btn-sm">Asistencia</button>
  </Link>
);

const Row = ({
  completo,
  day,
  asistenciaTotal,
}: {
  completo: boolean;
  day: string;
  asistenciaTotal: number;
}) => {
  return (
    <tr>
      <td>
        {completo ? (
          <CheckIcon className="h-8 w-8" />
        ) : (
          <XMarkIcon className="h-8 w-8" />
        )}
      </td>
      <td>
        <p>{day}</p>
      </td>
      <td>
        <p>{asistenciaTotal}%</p>
      </td>
      <td>
        <Button />
      </td>
    </tr>
  );
};

export default function BoletinesPage() {
  return (
    <NestedPageLayout
      title="CFS - Curso 2A Manana - Asistencia"
      desc="Curso 2A Manana Asistencia"
      backToUrl="/curso/2A-manana/"
      backToName="2A Manana"
      name="Asistencia"
      className="prose-sm w-full sm:prose sm:max-w-none"
    >
      <div className="not-prose overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Completo</th>
              <th>Dia</th>
              <th>Asistencia Total</th>
              <th>Tomar Asistencia</th>
            </tr>
          </thead>
          <tbody>
            <Row completo={true} day={"Marzo 1"} asistenciaTotal={100} />
            <Row completo={true} day={"Marzo 2"} asistenciaTotal={100} />
            <Row completo={true} day={"Marzo 3"} asistenciaTotal={100} />
            <Row completo={false} day={"Marzo 4"} asistenciaTotal={95} />
            <Row completo={true} day={"Marzo 5"} asistenciaTotal={100} />
            <Row completo={true} day={"Marzo 6"} asistenciaTotal={100} />
            <Row completo={false} day={"Marzo 7"} asistenciaTotal={30} />
            <Row completo={false} day={"Marzo 8"} asistenciaTotal={60} />
            <Row completo={true} day={"Marzo 9"} asistenciaTotal={100} />
            <Row completo={true} day={"Marzo 10"} asistenciaTotal={80} />
          </tbody>
        </table>
      </div>
    </NestedPageLayout>
  );
}
