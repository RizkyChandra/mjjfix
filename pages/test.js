import { useEffect, useState } from "react";
import { intervalToDuration, getSeconds } from "date-fns";
import { FiCloudDrizzle } from "react-icons/fi";
import Link from "next/link";

const test = () => {
  return (
    <>
      <div className="w-full">
        <ul className="grid grid-cols-3 gap-4">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <Link href="/beranda">
          <a className="text-red-400 text-xl focus:text-2xl">
            Lihat Semua Product
          </a>
        </Link>
      </div>
    </>
  );
};

export default test;
