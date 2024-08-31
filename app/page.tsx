'use client';
import { useState, useEffect } from 'react';
import HamburgerMenu from '@/components/HamburgerMenu';
import HorizontalMenu from '@/components/HorizontalMenu';
import GridView from '@/components/GridView';

export default function Home() {
  const [data, setData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="min-h-screen bg-background text-text">
      <header>
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
        <div className="hidden md:block">
          <HorizontalMenu />
        </div>
      </header>

      <main className="p-4 pt-10">
        <h1 className="text-3xl font-bold mb-4 text-center">Student Data</h1>
        <div className="block">
          <GridView data={data} />
        </div>
      </main>
    </div>
  );
}