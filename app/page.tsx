import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
      <p className="text-lg mb-4">
        This is a showcase of my projects and skills.
      </p>
      <Image
        src="/profile.jpg"
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-full"
      />
    </main>
  );
}
