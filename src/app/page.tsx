import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-7xl justify-between px-4 py-5 text-sm">
      <section className="flex items-center gap-10">
        <h1 className="font-bold text-2xl">WORK</h1>
        <div className="flex items-center gap-4 transition-all">
            <Link href={""} className="group px-2 py-3 transition-all">
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover: text-black">
                <span>Features</span>
                <IoIosArrowDown className=" rotate-180 transition-all group-hover:rotate-0" />
              </p>
              <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                <Link href={"#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"></Link>
              </div>
            </Link>
          </div>
      </section>

      <section className="flex items-center gap-8">
        <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
          Login
        </button>
        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:text-black/90">
          Register
        </button>
      </section>
    </div>
  );
}
