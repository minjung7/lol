import fetchChampionRotation from "@/utils/serverApi";
import { NextResponse } from "next/server";


export async function GET() {
  const rotationData = await fetchChampionRotation();
  return NextResponse.json(rotationData);
  
};