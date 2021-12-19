import { useRouter } from "next/router";

export default function PorfolioProjectPage() {
  const router = useRouter();
  console.log(router.pathname);
  // router.query - access to complete data on url
  console.log(router.query.projectId);
  return (
    <div>
      <h4>Porfolio project page</h4>
    </div>
  );
}
