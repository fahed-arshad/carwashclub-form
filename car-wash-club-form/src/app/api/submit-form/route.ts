import { NextRequest, NextResponse } from "next/server";
import { revSyncInstance } from "../lib/revsync-backend.instance";
import { AxiosError } from "axios";

export interface RequestDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  carWashId: number;
  vehicle: RequestVehicleDto;
}

export interface RequestVehicleDto {
  make: string;
  model: string;
  registration: string;
}

export async function POST(req: NextRequest) {
  try {
    const request = (await req.json()) as RequestDto;

    const response = await revSyncInstance.post("members", request);
    return new NextResponse(JSON.stringify(response.data), {
      status: response.status,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error sending form data:", error);
      return new NextResponse("Error sending form data", { status: 500 });
    }
    console.error("Error sending form data:", error);
    return new NextResponse("Error sending form data", { status: 500 });
  }
}
