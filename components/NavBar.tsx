import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          
            <NavigationMenuLink href="/" >Home</NavigationMenuLink>
          
        </NavigationMenuItem>
        <NavigationMenuItem>
          
            <NavigationMenuLink href="/">Profile</NavigationMenuLink>
          
        </NavigationMenuItem>
        <NavigationMenuItem>
          
            <NavigationMenuLink href="/">Work</NavigationMenuLink>
          
        </NavigationMenuItem>
        
      </NavigationMenuList>
      <NavigationMenuIndicator />
      <NavigationMenuViewport />
    </NavigationMenu>
  )
}