"use client";
import React from "react";
import Image from "next/image";
import Swagat from "@/assets/swagat.jpg";
import Basir from "@/assets/basir.jpg";
import Bhawani from "@/assets/bhawani.jpg";
import Aniket from "@/assets/aniket.jpg";
import Disha from "@/assets/disha.jpg";
import Ankit from "@/assets/ankit.jpg";
import Khawar from "@/assets/khawar.jpeg";
import Aryan from "@/assets/aryan.jpg";
import WatermarkLogo from "@/assets/logo.png";
import { StaticImageData } from "next/image";

const MentorCard = () => (
  <div className="w-[350px] relative mt-4 h-[430px] group mx-auto dark:bg-black bg-white dark:border-2 border-purple-500 border rounded-md dark:text-white text-black flex flex-col">
    {/* Watermark */}
    <div className="absolute top-2 left-2 w-[5rem] h-10 z-10 opacity-100">
      <Image
        src={WatermarkLogo}
        alt="Watermark"
        layout="responsive"
        objectFit="contain"
      />
    </div>
    {/* Image */}
    <div className="w-full rounded-t-md h-[350px] group-hover:h-[410px] overflow-hidden transition-all duration-300">
      <Image
        src={Swagat}
        alt="mentor"
        width={600}
        height={600}
        className="h-full w-full scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300"
      />
    </div>
    {/* Info */}
    <article className="relative overflow-hidden flex-grow">
      <div className="info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300">
        <p className="md:text-2xl font-semibold">Saneev Kumar Das</p>
        <p className="sm:text-base text-sm">Mentor &amp; AI/ML Expert</p>
      </div>
      {/* Role on hover */}
      <button className="absolute h-10 -bottom-8 opacity-0 group-hover:opacity-100 cursor-pointer group-hover:bottom-3 text-3xl font-medium transition-all duration-300 w-full text-center">
        Mentor &amp; AI/ML Expert
      </button>
    </article>
  </div>
);

const MemberCard = ({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: StaticImageData;
}) => (
  <div className="w-[350px] relative mt-4 h-[430px] group mx-auto dark:bg-black bg-white dark:border-2 border-purple-500 border rounded-md dark:text-white text-black flex flex-col">
    {/* Watermark */}
    <div className="absolute top-2 left-2 w-[5rem] h-10 z-10 opacity-100">
      <Image
        src={WatermarkLogo}
        alt="Watermark"
        layout="responsive"
        objectFit="contain"
      />
    </div>
    {/* Image */}
    <div className="w-full rounded-t-md h-[350px] group-hover:h-[410px] overflow-hidden transition-all duration-300">
      <Image
        src={image}
        alt={name}
        width={600}
        height={600}
        className="h-full w-full scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300"
      />
    </div>
    {/* Info */}
    <article className="relative overflow-hidden flex-grow">
      <div className="info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300">
        <p className="md:text-2xl font-semibold">{name}</p>
        <p className="sm:text-base text-sm">{role}</p>
      </div>
      {/* Role on hover */}
      <button className="absolute h-10 -bottom-8 opacity-0 group-hover:opacity-100 cursor-pointer group-hover:bottom-3 text-3xl font-medium transition-all duration-300 w-full text-center">
        {role}
      </button>
    </article>
  </div>
);

export default function TeamPage() {
  return (
    <div className="h-auto w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* Mentor Section */}
      <div className="mt-16">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Mentor
        </h2>
        <MentorCard />
      </div>

      {/* Core Community Members */}
      <div className="mt-16 mb-10">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Core Community Members
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <MemberCard
            name="Basir Khan"
            role="Core Community Lead"
            image={Basir}
          />
          <MemberCard
            name="Aniket Subudhi"
            role="Core Community Lead"
            image={Aniket}
          />
          <MemberCard
            name="Swagat Kumar Dash"
            role="Core Community Lead"
            image={Swagat}
          />
          <MemberCard
            name="Ankit Kumar Yadav"
            role="Core Community Lead"
            image={Ankit}
          />
          <MemberCard
            name="Nyayabrata Das"
            role="Core Community Lead"
            image={Swagat}
          />
        </div>
      </div>

      {/* Team Members */}
      <div className="mt-16 mb-10">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Team Members
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <MemberCard name="Disha Mishra" role="Team Member" image={Disha} />
          <MemberCard name="Mir Sadab Ali" role="Team Member" image={Swagat} />
          <MemberCard
            name="Bhawani Sankar Das"
            role="Team Member"
            image={Bhawani}
          />
          <MemberCard
            name="Aryan Ashima Swain"
            role="Team Member"
            image={Aryan}
          />
          <MemberCard
            name="Khawar Ahmed Khan"
            role="Team Member"
            image={Khawar}
          />
        </div>
      </div>
    </div>
  );
}
