export default function Headers({ columns }) {
  <tr>
    {columns.map((head) => (
      <th key={crypto.randomUUID()}>{head}</th>
    ))}
  </tr>;
}
