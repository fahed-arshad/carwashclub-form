import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const request = await req.json();

    const response = await axios.get(
      `https://api.brandfetch.io/v2/search/${request.brand}`,
      {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_BRAND_FETCH_API_KEY, // Replace with your actual API key
        },
      }
    );
    return new NextResponse(JSON.stringify(response.data[0].domain));
  } catch (error) {
    console.error("Error fetching brand domain:", error);
    return new NextResponse(JSON.stringify(error));
  }
}
