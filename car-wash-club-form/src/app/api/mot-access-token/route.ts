// import useSWR from "swr";
// import { fetcher } from "../lib/fetcher";

// app/api/get-token/route.js

import axios from "axios";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await axios.post(
      "https://login.microsoftonline.com/a455b827-244f-4c97-b5b4-ce5d13b4d00c/oauth2/v2.0/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.NEXT_PUBLIC_MOT_API_CLIENT_ID ?? "",
        client_secret: process.env.NEXT_PUBLIC_MOT_API_CLIENT_SECRET ?? "",
        scope: "https://tapi.dvsa.gov.uk/.default",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching access token:", error);
    return NextResponse.json(
      { error: "Failed to fetch access token" },
      { status: 500 }
    );
  }
}
