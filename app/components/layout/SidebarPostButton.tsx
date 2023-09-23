"use client"
import { useRouter } from "next/navigation"
import React from "react"
import { FaFeatherAlt } from "react-icons/fa"

export const SidebarPostButton = () => {
  const router = useRouter()
  return (
    <div onClick={() => router.push("/")}>
      <div className="mt-6 lg:hidden h-14 w-14 p-4 flex items-center rounded-full justify-center bg-red hover:bg-opacity-80 transition cursor-pointer">
        <FaFeatherAlt size={28} color="white" />
      </div>
      <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-red hover:bg-opacity-90 cursor-pointer transition">
        <p className="hidden lg:block text-white text-center font-senibold text-[20px]">
          Post
        </p>
      </div>
    </div>
  )
}
