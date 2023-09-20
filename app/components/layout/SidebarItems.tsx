import { IconType } from "react-icons"

interface SidebarItemsProps {
  label: string
  href: string
  icon: IconType
  onClick?: () => void
}

export const SidebarItems: React.FC<SidebarItemsProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div className="relative h-14 w-14 rounded-full flex items-center justify-center p-4 hover:bg-red hover:bg-opacity-90 cursor-pointer transition lg:hidden">
        <Icon size={28} />
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-red hover:bg-opacity-10 cursor-pointer ">
        <Icon size={28} />
        <p>{label}</p>
      </div>
    </div>
  )
}
