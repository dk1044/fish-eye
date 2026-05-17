import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch("http://192.168.1.184:81", {
      cache: "no-store",
    })

    return new Response(response.body, {
      headers: {
        "Content-Type":
          response.headers.get("content-type") ||
          "multipart/x-mixed-replace",
        "Cache-Control": "no-cache",
      },
    })
  } catch (err: any) {
    return Response.json({
      error: err.message,
    })
  }
}