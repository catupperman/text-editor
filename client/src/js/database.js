import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');
  const contentAdd = await putDb('jate', 1);
  const message = contentAdd.transaction('jate', 'readwrite');
  const store = message.objectStore('jate');
  const request = store.add({ main: content });
  const result = await request;
  console.log('added to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getlDb = async () => {
  console.error('getDb not implemented');
  const allContent = await getDb('jate', 1);
  const message = allContent.transaction('jate', 'readonly');
  const store = message.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  return result;
};

initdb();
