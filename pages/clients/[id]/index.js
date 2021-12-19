import { useRouter } from "next/router";
import Link from "next/link";

export default function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  const clickHandler = () => {
    router.push("/clients/max/projecA");
  };
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <Link href="/clients">Back</Link>
      <p>
        <button onClick={clickHandler}>Load Project A</button>
      </p>
    </div>
  );
}
