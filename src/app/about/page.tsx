"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles1";
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
import { LogoMotion } from "@/sections/LogoMotion";

export default function AboutPage() {
  const MentorCard = () => (
    <div className="w-[350px] relative mt-4 h-[430px] group mx-auto dark:bg-black bg-white dark:border-2 border-purple-500 border rounded-md dark:text-white text-black flex flex-col">
      <div className="absolute top-2 left-2 w-[5rem] h-10 z-50 opacity-100">
        <Image
          src={WatermarkLogo}
          alt="Watermark"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="w-full rounded-t-md h-[350px] group-hover:h-[410px] overflow-hidden transition-all duration-300">
        <Image
          src={Swagat}
          alt="mentor"
          width={600}
          height={600}
          className="h-full w-full scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300"
        />
      </div>
      <article className="relative overflow-hidden flex-grow">
        <div className="info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300">
          <p className="md:text-2xl font-semibold">Saneev Kumar Das</p>
          <p className="sm:text-base text-sm">Mentor &amp; AI/ML Expert</p>
        </div>
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
      <div className="absolute top-2 left-2 w-[5rem] h-10 z-50 opacity-100">
        <Image
          src={WatermarkLogo}
          alt="Watermark"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="w-full rounded-t-md h-[350px] group-hover:h-[410px] overflow-hidden transition-all duration-300">
        <Image
          src={image}
          alt={name}
          width={600}
          height={600}
          className="h-full w-full scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300"
        />
      </div>
      <article className="relative overflow-hidden flex-grow">
        <div className="info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300">
          <p className="md:text-2xl font-semibold">{name}</p>
          <p className="sm:text-base text-sm">{role}</p>
        </div>
        <button className="absolute h-10 -bottom-8 opacity-0 group-hover:opacity-100 cursor-pointer group-hover:bottom-3 text-3xl font-medium transition-all duration-300 w-full text-center">
          {role}
        </button>
      </article>
    </div>
  );

  return (
    <div className="h-auto w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h1 className="md:text-7xl sm:text-5xl lg:text-7xl font-bold text-center text-white relative z-20 mt-[5rem]">
        About DevSomeware
      </h1>
      <div className="w-[40rem] h-40 relative mt-10">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 text-white text-center mt-16">
        <p className="text-lg leading-relaxed -mt-[4rem]">
          <span className="font-bold text-purple-500">DevSomeware</span> is a
          thriving community of technology enthusiasts, developers, and
          innovators dedicated to exploring, learning, and creating cutting-edge
          solutions. At DevSomeware, we believe in empowering individuals with
          the knowledge and resources they need to succeed in the ever-evolving
          tech industry.
        </p>
        <p className="mt-6 text-lg leading-relaxed">
          Our mission is to foster collaboration, ignite creativity, and
          celebrate the spirit of innovation. Whether you&apos;re a seasoned
          developer or just starting your journey, DevSomeware offers a platform
          to connect with like-minded individuals, share ideas, and grow
          together. We organize workshops, hackathons, and community-driven
          projects to enable hands-on learning and skill development.
        </p>
        <p className="mt-6 text-lg leading-relaxed">
          Join us as we push the boundaries of technology and shape the future
          of development, one idea at a time. Be a part of a vibrant ecosystem
          that celebrates passion, curiosity, and resilience.
        </p>
      </div>
      <LogoMotion />
      <div className="mt-16">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Mentor
        </h2>
        <MentorCard />
      </div>

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

      <div className="mt-16 mb-10">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Team Members
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <MemberCard name="Disha Mishra" role="Team Member" image={Disha} />
          <MemberCard name="Mir Sadab Ali " role="Team Member" image={Swagat} />
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
