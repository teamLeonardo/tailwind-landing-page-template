import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex gap-1 justify-center items-center flex-nowrap" aria-label="Cruip">
      <div
        className="w-[30px] h-[30px] rounded-full bg-gradient-to-tl from-lime-200 to-green-600"
      >
      </div>
      <span
        className="bg-clip-text font-bold text-transparent bg-gradient-to-tl from-lime-200 to-green-600"
      >
        {" "} WAMBot
      </span>
    </Link>
  )
}
