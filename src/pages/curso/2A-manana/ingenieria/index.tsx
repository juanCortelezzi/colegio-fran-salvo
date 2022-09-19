import { NestedPageLayout } from "@/components/layout";
import Link from "next/link";
import Image from "next/image";

const Button = () => (
  <Link passHref href="/curso/2A-manana/ingenieria/juan-cortelezzi-1142">
    <button className="btn btn-primary btn-sm">Detalle</button>
  </Link>
);

const Row = ({
  src,
  name,
  promedio,
}: {
  src: string;
  name: string;
  promedio: number;
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
      <th className="flex items-center justify-end">
        <Button />
      </th>
    </tr>
  );
};

export default function MateriaPage() {
  return (
    <NestedPageLayout
      title="CFS - Curso 2A Manana - Ingenieria"
      desc="datos ingenieria"
      backToName="2A Manana"
      backToUrl="/curso/2A-manana/"
      name="Detalles - Ingenieria"
      className="prose-sm mt-2 w-full sm:prose sm:max-w-none"
    >
      <h1>Alumnos de Ingenieria</h1>
      <div className="not-prose w-full overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Alumno</th>
              <th>Promedio de materia</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <Row src={"/rust-logo.png"} name={"Ramon Soares"} promedio={8} />
            <Row
              src={"/rust-logo.png"}
              name={"Ornela Facciola"}
              promedio={6.8}
            />
            <Row src={"/rust-logo.png"} name={"Juan Cortelezzi"} promedio={3} />
            <Row src={"/rust-logo.png"} name={"Ignacio Tsai"} promedio={9} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
            <Row src={"/rust-logo.png"} name={"Miguel Danotto"} promedio={10} />
          </tbody>
        </table>
      </div>
    </NestedPageLayout>
  );
}
