// src/app/page.tsx

import axios from "axios";
import Home from "./form";

export interface Membership {
  id: number;
  name: string;
  description: string;
  price: string;
}

export default async function HomeSSR() {
  try {
    const { data } = await axios.get<Membership[]>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/membership-levels`
    );
    return <Home memberships={data} />;
  } catch (error) {
    console.error("Error fetching memberships:", error);
    return <Home memberships={[]} />; // Provide fallback if API request fails
  }
}
