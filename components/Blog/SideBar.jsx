import Image from "next/image";
import Link from "next/link";
import tileCatalogue from "/public/images/ETV Rectangle.jpg";
import tileFacebook from "/public/images/ETV Rectangle2.jpg";
import tileYoutube from "/public/images/ETV Rectangle3.jpg";

const data = [
  { href: "/downloads", image: tileCatalogue, alt: "Catalogue" },
  {
    href: "/caradvisor",
    image: tileYoutube,
    alt: "Kaufberater",
  },
  {
    href: "https://www.facebook.com/ARIMotorsElektrofahrzeuge/",
    image: tileFacebook,
    alt: "Facebook",
  },
];

export default function SideBar(props) {
  return (
    <div className="hidden mr-2 lg:block xl:mr-0 ">
      {data.map((tile) => (
        <Link href={tile.href} key={tile.href}>
          <a
            className="flex flex-row my-10 overflow-hidden transition transform shadow-xl hover:scale-105 w-80"
            rel="noreferrer"
          >
            {
              <Image
                src={tile.image}
                alt={tile.alt}
                width={500}
                height={392}
                objectFit="cover"
              />
            }
          </a>
        </Link>
      ))}
    </div>
  );
}
