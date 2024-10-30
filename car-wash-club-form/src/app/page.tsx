import axios from "axios";
import Home from "./form";

export const revalidate = 0;

export interface Membership {
  id: number;
  name: string;
  description: string;
  price: string;
}

export default async function HomeSSR() {
  const { data } = await axios.get<Membership[]>(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/memberships`,
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
  return <Home memberships={data} />;
}
