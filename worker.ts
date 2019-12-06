import colls, { asc } from "colls-wa";

colls
  .then(({ createOrderedSet }) => {
    console.log('Initialized');

    const orderedSet = createOrderedSet(v => [asc(v)], v => [asc(v)], [
      5,
      1,
      2,
      8,
      5,
      3,
    ]);

    orderedSet.add([7, 3, 5, 7, 2, 4, 8, 34, 2, 6, 8, 23, 2]);

    console.log(orderedSet.toArray());
  })
  .catch(err => console.error(err));
