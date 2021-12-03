import { useEffect, useState } from 'react';

type Entry = {
  id: number;
  imageUrl: string;
  date: string;
  title: string;
  text: string;
};

function useGetEntries(): Entry[] | null {
  const [entries, setEntries] = useState<null | Entry[]>(null);

  useEffect(() => {
    fetch('/api/entries')
      .then((response) => response.json())
      .then(setEntries);
  }, []);

  return entries;
}

export default useGetEntries;
