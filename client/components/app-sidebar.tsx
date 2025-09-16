"use client";

import * as React from "react";
import {
  IconDashboard,
  IconListDetails,
  IconCalendarWeekFilled,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { useSession } from "next-auth/react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Calendar",
      url: "/dashboard/calendar",
      icon: IconCalendarWeekFilled,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session, status } = useSession();
  console.log(`status: ${status}, image: ${session?.user?.image}`);

  const user = React.useMemo(
    () => ({
      name: session?.user?.name ?? "username",
      email: session?.user?.email ?? "user@email.com",
      avatar:
        session?.user?.image ||
        "https://lh3.googleusercontent.com/a/ACg8ocJ-pXhZapKussoISrZzd_03V8KDBH0ucb_N2YkiJjEQbCOcCQzp=s96-c",
    }),
    [session?.user]
  );
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#" className="flex items-center gap-2">
                <img
                  src="/tempo-logo.png"
                  alt="Tempo Logo"
                  className="h-6 w-6"
                />
                <span className="text-base font-semibold">tempo</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
