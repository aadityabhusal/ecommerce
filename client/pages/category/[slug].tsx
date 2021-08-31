import { Heading } from "@components/ui";
import { useRouter } from "next/router";

export default function Category() {
  let router = useRouter();
  return <Heading>{router.query.slug} Category Page</Heading>;
}
