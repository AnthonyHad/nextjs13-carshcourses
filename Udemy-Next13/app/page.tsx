import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <nav className="bg-white p-2 flex justify-between">
          <a href="" className="font-bold text-gray-700 text-2xl">
            Open Table
          </a>
          <div className="flex">
            <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
              Sign In
            </button>
            <button className="border p-1 px-4 rounded text-black">
              Sign Up
            </button>
          </div>
        </nav>
        <main>
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
              <h1 className="text-white text-5xl font-bold mb-2">
                Find your table for any occasion
              </h1>
            </div>
            <div className=" overflow-hidden rounded text-left py-3 m-auto flex justify-center">
              <input
                className="rounded text-lg mr-3 w-74 p-2 w-[450px] bg-white"
                type="text"
                placeholder="State, city or town"
              />
              <button className=" rounded bg-red-600 px-9 py-2 text-white">
                Let's go
              </button>
            </div>
          </div>
          <div className="py-3 px-36 mt-10 flex flex-wrap">
            <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
              <img
                src="https://resizer.otstatic.com/v2/photos/wide-huge/4/49890575.png"
                alt=""
                className="w-full h-36"
              />
              <div className="p-1">
                <h3 className="font-bold text-2xl mb-2 text-black">
                  La Coupole
                </h3>
                <div className="flex items-start">
                  <div className="flex mb-2 text-black">*****</div>
                  <p className="ml-2 text-black">77 reviews</p>
                </div>
                <div className="flex text-black text-reg font-light capitalize">
                  <p className=" mr-3 ">Mexican</p>
                  <p className="mr-3">$$$$</p>
                  <p>Toronto</p>
                </div>
                <p className="text-sm mt-1 font-bold text-black ">
                  Booked 3 times today
                </p>
              </div>
            </div>
          </div>
        </main>
      </main>
    </main>
  );
}
