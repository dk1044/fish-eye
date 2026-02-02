"use client"

import { useState } from "react"

export default function CameraFallback() {
  const [failed, setFailed] = useState(false)

  return (
    <img
      src={failed ? "/pictures/pogfish.png" : "http://192.168.1.119/stream"}
      alt="ESP32-CAM Fish Eye View"
      className="aspect-[15/8] w-full max-h-full rounded-2xl object-contain bg-black"
      onError={() => setFailed(true)}
    />
  )
}
