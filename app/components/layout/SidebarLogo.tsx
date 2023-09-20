"use client"
import React from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export const SidebarLogo = () => {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push("/")}
      className="p-2 h-14 w-14 flex items-center justify-center cursor-pointer opacity-100 hover:opacity-90 transition">
      <Image src="/akatsuki.svg" alt="Logo" width={60} height={28} priority />
    </div>
  )
}
