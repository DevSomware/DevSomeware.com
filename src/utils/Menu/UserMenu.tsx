'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Settings, User, Ticket, Calendar, LogOut, LogIn } from 'lucide-react'

interface UserMenuProps {
  isLoggedIn: boolean
  userEmail?: string
  userName?: string
  userImage?: string
  onLogin?: () => void
  onLogout?: () => void
}

export function UserMenu({ isLoggedIn, userEmail, userName, userImage, onLogout }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (!isLoggedIn) {
    return (
      <Link href={"/login"}><div className="">
        <LogIn className="h-5 w-5" />
      </div>
      </Link>
    )
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            {userImage ? (
              <AvatarImage src={userImage} alt={userName} />
            ) : (
              <AvatarFallback>{userName ? userName.charAt(0).toUpperCase() : 'U'}</AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 my-2" align="end" forceMount>
        <DropdownMenuLabel className="font-normal ">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Welcome, {userName}</p>
            <p className="text-xs leading-none text-muted-foreground">{userEmail}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Ticket className="mr-2 h-4 w-4" />
          <span>Tickets</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Calendar className="mr-2 h-4 w-4" />
          <span>Events</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

