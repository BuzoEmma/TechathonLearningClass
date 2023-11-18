const Rendering = () => {
  const hobby = [
    {
      id: 1,
      activities: "running",
      book: "Rich Dad Poor Dad",
      shoe: "size 50",
    },
    { id: 2, activities: "jugging", book: "Atomic Habits", shoe: "size 100" },
    {
      id: 3,
      activities: "sweeping",
      book: "How to be successfull",
      shoe: "size 10",
    },
    { id: 4, activities: "watching Movies", book: "Laziness", shoe: "size 30" },
    { id: 5, activities: "making money", book: "Rich parent", shoe: "size 40" },
    { id: 6, activities: "Laptop", book: " Poor Dad ", shoe: "size 350" },
    { id: 7, activities: "cooking", book: "how to cook", shoe: "size 250" },
    { id: 8, activities: "capentry", book: "shoe mending", shoe: "size 590" },
  ];

  return (
    <div>
      <h1 style={{ color: "red" }}>List of my company hobby</h1>
      {hobby.map((item) => (
        <div key={item.id}>
          <p>{item.activities}</p>
          <p>{item.book}</p>
          <p>{item.shoe}</p>
        </div>
      ))}
      <br />
    </div>
  );
};

export default Rendering;
