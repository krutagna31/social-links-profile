import Image from "next/image";
import Link from "next/link";
import { SectionContainer, ViewContainer } from "@/components/layouts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";

const links: { title: string; href: string }[] = [
  { title: "GitHub", href: "/" },
  { title: "Frontend Mentor", href: "/" },
  { title: "LinkedIn", href: "/" },
  { title: "Twitter", href: "/" },
  { title: "Instagram", href: "/" },
];

export default function Home() {
  return (
    <SectionContainer>
      <ViewContainer className="w-[min(var(--container-md),100vw)] text-center">
        <Card className="py-12">
          <CardHeader>
            <div className="mb-4 flex justify-center">
              <Image
                className="rounded-full"
                src="/images/avatar-jessica.jpeg"
                width="88"
                height="88"
                alt="profile picture of jesicca randall"
              />
            </div>
            <CardTitle className="text-3xl">Jesicca Randall</CardTitle>
            <CardDescription className="font-bold text-lime-500 dark:text-lime-300">
              London, United Kingdom
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              &quot;Front-end developer and avid reader.&quot;
            </p>
          </CardContent>
          <CardFooter>
            <ul className="w-full space-y-4">
              {links.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    className="bg-secondary hover:text-secondary block rounded-sm py-3 font-bold hover:bg-lime-500 dark:hover:bg-lime-300"
                    href={href}
                  >
                    <span>{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </CardFooter>
        </Card>
      </ViewContainer>
    </SectionContainer>
  );
}
