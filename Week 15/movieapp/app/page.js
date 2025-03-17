import Image from "next/image";
import Section from "./components/Section";

export default function Home() {
  return (
    <div>

      {/* POPULAR MOVIES SECTION  */}
      <Section title="popular" />

      {/* NOW PLAYING MOVIES SECTION */}
      <Section title="now_playing" />

      {/* TOP RATES MOVIES SECTION */}
      <Section title="top_rated" />

      {/* UPCOMING MOVIES SESSION */}
      <Section title="upcoming" />


    </div>
  );
}
