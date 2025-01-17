import { Instagram, Linkedin, Twitter } from "lucide-react";

function Profile({ src, name, position }) {
  return (
    <article className="flex flex-col items-center gap-2">
      <img src={src} alt={position} />
      <h1 className="text-2xl font-semibold">{name}</h1>
      <p>{position}</p>
      <section className="flex gap-5">
        <article>
          <Twitter />
        </article>
        <article>
          <Instagram />
        </article>
        <article>
          <Linkedin />
        </article>
      </section>
    </article>
  );
}

const profiles = [
  {
    src: "/team-1.png",
    name: "Tom Cruise",
    position: "Founder & Chairman",
  },
  {
    src: "/team-2.png",
    name: "Emma Watson",
    position: "Managing Director",
  },
  {
    src: "/team-3.png",
    name: "Will Smith",
    position: "Product Designer",
  },
];

export default function Team() {
  return (
    <main className="flex flex-col gap-10">
      <h1 className="ms-10 text-2xl font-semibold">Our Team</h1>
      <section className="flex justify-evenly gap-10">
        {profiles.map(({ src, name, position }, index) => (
          <Profile name={name} src={src} position={position} key={index} />
        ))}
      </section>
    </main>
  );
}
