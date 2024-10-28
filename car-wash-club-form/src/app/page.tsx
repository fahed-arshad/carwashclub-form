import axios from "axios";
import Home from "./form";

export interface Membership {
  id: number;
  name: string;
  description: string;
  price: string;
}

export default async function HomeSSR() {
  const { data } = await axios.get<Membership[]>(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/memberships`
  );
  return <Home memberships={data} />;
}
