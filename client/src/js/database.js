import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id) => {
  console.log("put");

  const textdb = await openDB("jate", 1);

  const tx = textdb.transaction("jate", "readwrite");

  const store = tx.objectStore("jate");

  const request = store.put({ id: id });

  const result = await request;

  return result;
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("get From Database");
  const textdb = await openDB("jate", 1);

  const tx = textdb.transaction("jate", "readonly");

  const store = tx.objectStore("jate");

  const request = store.getAll();

  const result = await request.id;

  console.log("result.value", result);
  return result;
};

initdb();
