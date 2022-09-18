import { NestedPageLayout } from "@/components/layout";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Row = ({
  src,
  name,
  asistencia,
}: {
  src: string;
  name: string;
  asistencia: number;
}) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <Image
                src={src}
                alt="Avatar Tailwind CSS Component"
                layout="fill"
              />
            </div>
          </div>
          <div className="font-bold">{name}</div>
        </div>
      </td>
      <td>
        <p>{asistencia}%</p>
      </td>
      <td className="btn-group justify-end">
        <button className="btn btn-success">
          <CheckIcon className="h-8 w-8" />
        </button>
        <button className="btn btn-warning">
          <ExclamationCircleIcon className="h-8 w-8" />
        </button>
        <button className="btn btn-error">
          <XMarkIcon className="h-8 w-8" />
        </button>
      </td>
    </tr>
  );
};

export default function BoletinesPage() {
  return (
    <NestedPageLayout
      title="CFS - Curso 2A Manana - Asistencia - Marzo 1"
      desc="Asistencia Curso 2A Manana Marzo 1"
      backToUrl="/curso/2A-manana/asistencia"
      backToName="Asistencia"
      name="Marzo 1"
      className="prose-sm w-full sm:prose sm:max-w-none"
    >
      <div className="not-prose w-full overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Alumno</th>
              <th>Asistencia</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <Row src="/rust-logo.png" name="Ramon Soarez" asistencia={100} />
            <Row src="/rust-logo.png" name="Ornela Facciola" asistencia={100} />
            <Row src="/rust-logo.png" name="Juan Cortelezzi" asistencia={100} />
            <Row src="/rust-logo.png" name="Ignacio Tsung" asistencia={100} />
            <Row
              src={"/rust-logo.png"}
              name="Miguel Danotto"
              asistencia={100}
            />
            <Row
              src={"/rust-logo.png"}
              name="Miguel Danotto"
              asistencia={100}
            />
            <Row
              src={"/rust-logo.png"}
              name="Miguel Danotto"
              asistencia={100}
            />
            <Row
              src={"/rust-logo.png"}
              name="Miguel Danotto"
              asistencia={100}
            />
            <Row
              src={"/rust-logo.png"}
              name="Miguel Danotto"
              asistencia={100}
            />
            <Row
              src={"/rust-logo.png"}
              name="Miguel Danotto"
              asistencia={100}
            />
            <Row
              src={"/rust-logo.png"}
              name="Miguel Danotto"
              asistencia={100}
            />
            <Row
              src={"/rust-logo.png"}
              name="Miguel Danotto"
              asistencia={100}
            />
            <Row
              src={"/rust-logo.png"}
              name="Miguel Danotto"
              asistencia={100}
            />
            <Row
              src={"/rust-logo.png"}
              name="Miguel Danotto"
              asistencia={100}
            />
            <Row
              src={"/rust-logo.png"}
              name="Miguel Danotto"
              asistencia={100}
            />
            <Row
              src={"/rust-logo.png"}
              name="Miguel Danotto"
              asistencia={100}
            />
          </tbody>
        </table>
      </div>
    </NestedPageLayout>
  );
}
