'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import {add} from '../lib/features/user/userSlice'
export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    //add intial data here
    storeRef.current.dispatch(add({
        name:"DevSomeware",
        email:"khanbasir@gmail.com",
        github:"dsfs",
        linkedin:"dsfs",
        img:"dsfs",
        intrests:["dsfs"],
        languages:"dsfs",
        frameworks:"dsfs",
        isauth:false,
    }))

  }

  return <Provider store={storeRef.current}>{children}</Provider>
}