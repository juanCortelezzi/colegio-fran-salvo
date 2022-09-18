import { NestedPageLayout } from "@/components/layout";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const Button = () => (
  <Link passHref href="/curso/2A-manana/boletines/juan-cortelezzi-1142">
    <button className="btn btn-primary btn-sm">Detalle</button>
  </Link>
);

const Row = ({
  src,
  name,
  promedio,
  completo,
}: {
  src: string;
  name: string;
  promedio: number;
  completo: boolean;
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
        <p>{promedio}</p>
      </td>
      <td>
        {completo ? (
          <CheckIcon className="h-8 w-8" />
        ) : (
          <XMarkIcon className="h-8 w-8" />
        )}
      </td>
      <th className="flex items-center justify-end">
        <Button />
      </th>
    </tr>
  );
};

export default function BoletinesPage() {
  return (
    <NestedPageLayout
      title="CFS - Curso 2A Manana - Boletines"
      desc="boletines ingenieria"
      backToUrl="/curso/2A-manana/"
      backToName="2A Manana"
      name="Boletines"
      className="prose-sm w-full sm:prose sm:max-w-none"
    >
      <div className="not-prose w-full overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Alumno</th>
              <th>Promedio anual</th>
              <th>Completo</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <Row
              src="/rust-logo.png"
              name="Ramon Soarez"
              promedio={8}
              completo={true}
            />
            <Row
              src="/rust-logo.png"
              name="Ornela Facciola"
              promedio={6.8}
              completo={false}
            />
            <Row
              src="/rust-logo.png"
              name="Juan Cortelezzi"
              promedio={3}
              completo={true}
            />
            <Row
              src="/rust-logo.png"
              name="Ignacio Tsung"
              promedio={9}
              completo={false}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
            <Row
              src={"/rust-logo.png"}
              name={"Miguel Danotto"}
              promedio={10}
              completo={true}
            />
          </tbody>
        </table>
      </div>
    </NestedPageLayout>
  );
}
