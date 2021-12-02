function usePostEntry() {
  const postEntry = async (entry: {
    imageURL: string;
    date: Date;
    title: string;
    text: string;
  }) => {
    await fetch('mein mongodb', {
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
