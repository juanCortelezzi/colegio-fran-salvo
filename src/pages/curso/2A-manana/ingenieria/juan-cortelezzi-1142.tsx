import { NestedPageLayout } from "@/components/layout";

const Input = ({ value }: { value?: number }) => {
  return (
    <input
      disabled
      className="input w-full"
      type="number"
      defaultValue={value}
    />
  );
};

export default function JuansPage() {
  return (
    <NestedPageLayout
      title="CFS - Curso 2A Manana - Ingenieria"
      desc="datos ingenieria"
      backToUrl="/curso/2A-manana/ingenieria/"
      backToName="Ingenieria"
      name={"J.C 1142"}
      className="prose-sm w-full sm:prose sm:max-w-none"
    >
      <div className="flex items-start justify-between">
        <div>
          <h1>Notas Trimestrales Juan Cortelezzi</h1>
          <h2>2A Turno Manana</h2>
        </div>

        <div className="btn-group">
          <button className="btn">Edit</button>
          <button disabled className="btn btn-error">
            Cancel
          </button>
          <button disabled className="btn btn-success">
            Save
          </button>
        </div>
      </div>
      <textarea
        className="textarea textarea-secondary w-full"
        placeholder="Reporte del alumno..."
        disabled
      />
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th />
                <th>Nota</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1er Trimestre</td>
                <td>
                  <Input value={0} />
                </td>
              </tr>
              <tr>
                <td>2do Trimestre</td>
                <td>
                  <Input value={0} />
                </td>
              </tr>
              <tr>
                <td>3er Trimestre</td>
                <td>
                  <Input value={0} />
                </td>
              </tr>
              <tr>
                <td>Diciembre</td>
                <td>
                  <Input />
                </td>
              </tr>
              <tr>
                <td>Enero</td>
                <td>
                  <Input />
                </td>
              </tr>
              <tr>
                <td>Febrero</td>
                <td>
                  <Input />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </NestedPageLayout>
  );
}
