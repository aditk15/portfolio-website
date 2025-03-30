import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Path to your CV file in the public directory
    const filePath = path.join(process.cwd(), "public", "Adit_Khandelwal_CV.pdf")

    // Read the file
    const fileBuffer = fs.readFileSync(filePath)

    // Return the file with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Adit_Khandelwal_CV.pdf"',
      },
    })
  } catch (error) {
    console.error("Error downloading CV:", error)
    return new NextResponse("File not found", { status: 404 })
  }
}

