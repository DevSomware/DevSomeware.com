'use client'
import { useState, useEffect, useRef } from 'react';
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store';
import VerifyUser from '@/server/VerifyUser';
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
    let myFunc = async () => {
      let [isauth, user] = await VerifyUser();
      if (isauth) {
        storeRef.current?.dispatch(add({
          name: user.name,
          email: user.email,
          img: user.img,
          isauth: true,
          github: user.github,
          linkedin: user.linkedin,
          intrests: user.intrests,
          languages: user.languages,
          frameworks: user.frameworks
        }));
      }

    }
    myFunc();

    //add intial data here
    // storeRef.current.dispatch(add({
    //     name:"DevSomeware",
    //     email:"khanbasir@gmail.com",
    //     github:"dsfs",
    //     linkedin:"dsfs",
    //     img:"dsfs",
    //     intrests:["dsfs"],
    //     languages:"dsfs",
    //     frameworks:"dsfs",
    //     isauth:false,
    // }))

  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
