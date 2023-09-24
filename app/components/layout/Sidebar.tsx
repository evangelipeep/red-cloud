import { BsHouseFill, BsBellFill } from "react-icons/bs"
import { FaUser } from "react-icons/fa"
import { BiSolidLogOutCircle } from "react-icons/bi"
import { SidebarLogo } from "./SidebarLogo"
import { SidebarItems } from "./SidebarItems"
import { SidebarPostButton } from "./SidebarPostButton"

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
    <div className="col-span-1 h-full pt-2 pr-5 md:pr-7">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[220px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItems
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SidebarItems
            onClick={() => {}}
            icon={BiSolidLogOutCircle}
            label="Logout"
          />
          <SidebarPostButton />
        </div>
      </div>
    </div>
  )
}
