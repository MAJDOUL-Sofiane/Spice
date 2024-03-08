import Image from "next/image";
import Button from '@/components/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Button Graa = "Ice Spice"/>
    <Image src = "/image.png" width={1920} height={1080} />
    </main>
  );
}
