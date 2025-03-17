"use client";

import { useRouter } from 'next/navigation'
import { useState } from "react";

export default function Home() {

  const [countryName, setCountryName] = useState("");
  const router = useRouter(); // THis is similar to useNavigate

  const handleSubmit = (e) => {
    e.preventDefault(); // That avoids browser to refresh
    router.push(`/country/${countryName}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center">
        <h1 className="font-bold">
            Search For country Name
        </h1>


        <div>
          <input onChange={(e) => setCountryName(e.target.value)} className="border rounded"  placeholder="Search" />

          <button type="submit">Search</button>
        </div>
      </form>
    </>
  );
}
