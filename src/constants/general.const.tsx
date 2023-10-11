import {
    IconBuilding,
    IconDashboard,
    IconMessage,
    IconPerson,
    IconProfile,
    IconStar,
} from "@/components/icon";
import { TSidebarLink } from "@/types/general.types";

export const sidebarLinks: TSidebarLink[] = [
    {
        title: "Dashboard",
        icon: <IconDashboard />,
        path: "/",
    },
    {
        title: "Property",
        icon: <IconBuilding />,
        path: "/property",
    },
    {
        title: "Agent",
        icon: <IconPerson />,
        path: "/agent",
    },
    {
        title: "Review",
        icon: <IconStar />,
        path: "/review",
    },
    {
        title: "Message",
        icon: <IconMessage />,
        path: "/message",
    },
    {
        title: "My Profile",
        icon: <IconProfile />,
        path: "/my-profile",
    },
];
