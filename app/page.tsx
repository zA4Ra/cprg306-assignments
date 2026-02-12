import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="mb-4 text-2xl font-bold">
        CPRG 306: Web Development 2 – Assignments
      </h1>

      <ul className="space-y-2">
        <li>
          <Link href="/week-2" className="text-white-600 underline">
            Week 2
          </Link>
        </li>

        <li>
          <Link href="/week-3" className="text-white-600 underline">
            Week 3
          </Link>
        </li>
         <li>
          <Link href="/week-4" className="text-white-600 underline">
            Week 4
          </Link>
        </li>
        <li>
          <Link href="/week-5" className="text-white-600 underline">
          Week 5
          </Link>
        </li>
      </ul>
    </main>
  );
}
