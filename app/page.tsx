import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button>你好</button>
      <Link href={"/about"}>啊?</Link>
    </main>
  )
}
