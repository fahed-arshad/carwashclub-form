import { NextResponse } from "next/server";
import { revSyncInstance } from "../lib/revsync-backend.instance";

export async function GET() {
  try {
    const response = await revSyncInstance.get("memberships");

    return new NextResponse(JSON.stringify(response.data), {
      status: response.status,
    });
  } catch (error) {
    console.error("Error fetching membership levels", error);
    return new NextResponse(JSON.stringify(error));
  }
}
