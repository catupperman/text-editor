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
  console.log('put in new message in db')
  const contentAdd = await openDB('jate', 1);
  const message = contentAdd.transaction('jate', 'readwrite');
  const store = message.objectStore('jate');
  const request = store.put({ id: 1, jate: content });
  const result = await request;
  console.log('added to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('get all DB')
  const allContent = await openDB('jate', 1);
  const message = allContent.transaction('jate', 'readonly');
  const store = message.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  console.log('result.value', result)
  return result?.value;
};

export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1);
  const message = jateDb.transaction('jate', 'readwrite');
  const store = message.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log('data saved in the db', result.value);
};

initdb();
