"use client"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { BiArrowBack } from "react-icons/bi"

interface HeaderProps {
  label: string
  showBackArrow?: boolean
}

export const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter()

  const handleBack = useCallback(() => {
    router.back()
  }, [router])

  return (
    <div className="border-b-[2px] border-red p-5">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            size={20}
            className="cursor-pointer hover:opasity-80 transition "
          />
        )}
        <h1 className="text-xl font-senibold">{label}</h1>
      </div>
    </div>
  )
}
