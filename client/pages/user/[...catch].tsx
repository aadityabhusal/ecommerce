import { useRouter } from "next/router";

export default function CatchRoutes() {
  const router = useRouter();

  console.log(router.query);

  return <div>Catch all Routes</div>;
}
