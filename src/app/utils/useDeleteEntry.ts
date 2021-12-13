function useDeleteEntry(date: string | undefined) {
  const deleteEntry = async () => {
    await fetch(`/api/entries/${date}`, {
      method: 'DELETE',
    });
  };
  return deleteEntry;
}

export default useDeleteEntry;
