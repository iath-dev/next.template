'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error({ error });
  }, []);

  return (
    <main className="bg-white dark:bg-gray-900">
      <section className="w-scree h-screen container mx-auto flex items-center justify-center">
        <div className="flex items-center flex-col space-y-2">
          <Image
            className="dark:invert-15"
            alt="Error image"
            src="/svgs/oops.svg"
            width={384}
            height={384}
          />
          <h3 className="text-xl font-extrabold leading-none tracking-tight text-primary-900 md:text-2xl lg:text-3xl dark:text-accent">
            ERROR
          </h3>
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mb-8">
            Algo salio mal!
          </h1>
          <div className="flex gap-2">
            <button
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              onClick={() => reset()}
            >
              Intentar de nuevo
            </button>
            <Link
              className="text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:ring-secondary-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus:outline-none dark:focus:ring-secondary-800"
              href="/"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
