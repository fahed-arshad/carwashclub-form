// app/api/car-details/route.js

import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

let accessToken: string | null = null;
let tokenExpiryTime = 0;

// Helper function to fetch the access token
const fetchAccessToken = async () => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/mot-access-token`
    );
    accessToken = response.data.access_token;
    tokenExpiryTime = Date.now() + 30 * 60 * 1000; // 30 minutes
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw new Error("Failed to fetch access token");
  }
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const licencePlate = searchParams.get("licencePlate");

  if (!licencePlate) {
    return NextResponse.json(
      { error: "Licence plate is required" },
      { status: 400 }
    );
  }

  try {
    // Check if token is expired or not yet fetched
    if (!accessToken || Date.now() >= tokenExpiryTime) {
      await fetchAccessToken();
    }

    const response = await axios.get(
      `https://history.mot.api.gov.uk/v1/trade/vehicles/registration/${licencePlate}`,
      {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_MOT_API_KEY ?? "",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching car details:", error);
    return NextResponse.json(
      { error: "Failed to fetch car details" },
      { status: 500 }
    );
  }
}
