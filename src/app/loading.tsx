import { BsGearFill } from 'react-icons/bs';

export default function Loading() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <div className="w-scree h-screen container mx-auto flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <BsGearFill className="text-gray-200 dark:text-white/50 text-9xl animate-bounce mb-6" />
          <div role="status" className="animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-md mb-4"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
