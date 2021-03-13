export const itemsPerPage = 3;

const myWorks = [
  { title: "weatherApp", imgSrc: "/my-work1.png" },
  { title: "todoApp", imgSrc: "/my-work2.png" },
  { title: "windbnb", imgSrc: "/my-work3.png" },
];

export function getWorks() {
  return myWorks;
}

// export function getWorks(currentPage) {
//   const paginated = myWorks.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );
//   return paginated;
// }

export function getLength() {
  return myWorks.length;
}
