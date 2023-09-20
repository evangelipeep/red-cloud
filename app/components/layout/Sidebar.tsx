import { BsHouseFill, BsBellFill } from "react-icons/bs"
import { FaUser } from "react-icons/fa"
import { SidebarLogo } from "./SidebarLogo"
import { SidebarItems } from "./SidebarItems"

export const Sidebar = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
    },
    {
      label: "Profile",
      href: "/user/111",
      icon: FaUser,
    },
  ]
  return (
    <div className="col-span-1 h-full pr-3 md:pr-5">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[320px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItems
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
