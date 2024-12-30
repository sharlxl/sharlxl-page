import { LocalStorageKeys } from '@/config/common';

export const addNewBookmark = (formData: FormData) => {
  const storedBookmarksJsonString = localStorage.getItem(
    LocalStorageKeys.BOOKMARKS
  );
  const formDataObject: { [key: string]: string } = {};
  formData.forEach((value: { toString: () => string }, key: string) => {
    formDataObject[key] = value.toString();
  });
  if (storedBookmarksJsonString) {
    const storedBookmarks = JSON.parse(storedBookmarksJsonString || '');
    localStorage.setItem(
      LocalStorageKeys.BOOKMARKS,
      JSON.stringify([formDataObject, ...storedBookmarks])
    );
  } else {
    localStorage.setItem(
      LocalStorageKeys.BOOKMARKS,
      JSON.stringify([formDataObject])
    );
  }
};
