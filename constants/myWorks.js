export const itemsPerPage = 3;

const myWorks = [
  { title: "weatherApp", imgSrc: "/my-work1.png" },
  { title: "todoApp", imgSrc: "/my-work2.png" },
  { title: "windbnb", imgSrc: "/my-work3.png" },
  { title: "commingSoon", imgSrc: "/comming-soon.png" },
  { title: "commingSoon", imgSrc: "/comming-soon.png" },
  { title: "commingSoon", imgSrc: "/comming-soon.png" },
];

export function getWorks(currentPage) {
  const paginated = myWorks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return paginated;
}

export function getLength() {
  return myWorks.length;
}
