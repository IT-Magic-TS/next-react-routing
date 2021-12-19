import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "baddy", title: "Baddy" },
    { id: "misa", title: "Misa" },
    { id: "pero", title: "Pero" }
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <Link href="/">Back</Link>
      <ul>
        {clients.map(c => (
          <li key={c.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: c.id }
              }}
            >
              {c.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
