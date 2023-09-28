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

// Initialize the database when your application starts
initdb();

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const db = await openDB('jate', 1); // Open the database
  const tx = db.transaction('jate', 'readwrite'); // Start a transaction
  const store = tx.objectStore('jate'); // Get the object store

  // Add the content to the database
  const id = await store.add({ content });
  await tx.done; // Complete the transaction
  console.log(`Added content with ID: ${id}`);
};

// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await openDB('jate', 1); // Open the database
  const tx = db.transaction('jate', 'readonly'); // Start a read-only transaction
  const store = tx.objectStore('jate'); // Get the object store

  // Retrieve all content from the object store
  const contentArray = await store.getAll();
  await tx.done; // Complete the transaction

  // Return the content
  return contentArray;
};
