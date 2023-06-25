import { NextResponse } from "next/server";

import db from "../../db";
import { notes } from "../../db/schema";

export async function GET() {
  const notesData = await db.select().from(notes);
  console.log("fetched on server: ", notesData);
  return NextResponse.json(notesData);
}
