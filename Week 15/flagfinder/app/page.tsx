'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const [countryName, setCountryName] = useState('');
  const router = useRouter();

  const submitCountryName = (e) => {
    e.preventDefault();
    router.push(`country/${countryName}`)
  }

  return (
    <div>
      <form className="flex flex-col justify-center items-center h-screen" onSubmit={submitCountryName}>
        <h1 className="text-4xl font-bold py-4">
          Search for Country
        </h1>
        <div>
          <input value={countryName} type="text" placeholder="Search for a country" className="border p-4 rounded border-gray-300" onChange={(e) => setCountryName(e.target.value)} />
          <button className="bg-sky-500 text-white p-4 rounded">Submit</button>
        </div>
      </form>
    </div>
  );
}
