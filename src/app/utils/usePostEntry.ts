function usePostEntry() {
  const postEntry = async (entry: {
    imageUrl: string | null;
    date: string;
    title: string;
    text: string;
  }) => {
    await fetch('/api/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    });
  };
  return { postEntry };
}

export default usePostEntry;
