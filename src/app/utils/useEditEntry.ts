function useEditEntry(date: string | undefined) {
  const updateEntry = async (newEntry: {
    imageUrl: string | null;
    date: string | undefined;
    title: string;
    text: string;
  }) => {
    await fetch(`/api/entries/${date}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    });
  };
  return updateEntry;
}

export default useEditEntry;
