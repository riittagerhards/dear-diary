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
    }).then((response) => {
      response.headers.get('content-type')?.includes('application/json');

      if (!response.ok) {
        const message = 'You cannot add a day twice!';
        alert(message);
      }
    });
  };
  return { postEntry };
}

export default usePostEntry;
