'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logout from '@/server/Logout';
import {add }from '../../lib/features/user/userSlice';
import { Settings, User, Ticket, Calendar, LogOut, LogIn } from 'lucide-react'
import { useAppSelector } from '@/lib/hook';
import { useAppDispatch } from '@/lib/hook';
import { useRouter } from 'next/navigation';
import { toast,Toaster } from 'sonner';
export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const users = useAppSelector(state => state.user)
  const dispatch = useAppDispatch();
  const router = useRouter();
  console.log(users)
  const handleLogout = async () => {
    Logout();
    dispatch(add({name: '', email: '', img: '', isauth: false, github: '', linkedin: '', intrests: [], languages: '', frameworks: ''}));
    toast.success('Logged out successfully');
    setTimeout(()=>{
    router.push('/');
    },2000)
    }
  if (!users.isauth) {
    return (
      <Link href={"/login"}><div className="">
        <LogIn className="h-5 w-5" />
      </div>
      </Link>
    )
  }
//handle Logout

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <Toaster richColors/>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            {users.img? (
              <AvatarImage src={users.img} alt={users.name} />
            ) : (
              <AvatarFallback>{users.name ? users.name.charAt(0).toUpperCase() : 'D'}</AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 my-2" align="end" forceMount>
        <DropdownMenuLabel className="font-normal ">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Welcome, {users.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{users.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
       
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
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

