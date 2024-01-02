import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar"
import { ServerSideBar } from "@/components/server/server-sidebar"

export const MobileToggle = ({
    serverId
}: {
    serverId: string;
}) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant = "ghost" size = "icon" className = "md:hidden">
                    <Menu className = "w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                </Button>
            </SheetTrigger>
            <SheetContent side = "left" className = "p-0 flex gap-0">
                <div className = "w-[72px]">
                    <NavigationSidebar />
                </div>
                <ServerSideBar
                    serverId = {serverId}
                />
            </SheetContent>
        </Sheet>
    )
}