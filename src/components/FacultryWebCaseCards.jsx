import FacultyWebCaseCard from "./FacultyWebCaseCard";

function FacultyWebCaseCards() {
  const facultyData = [
    {
      facultyName: "Fakultas Teknik",
      data1: 80,
      data2: 20,
    },
    {
      facultyName: "Fakultas Hukum",
      data1: 80,
      data2: 20,
    },
    {
      facultyName: "Fakultas Ekonomi Bisnis",
      data1: 80,
      data2: 20,
    },
    {
      facultyName: "Fakultas Pertanian",
      data1: 80,
      data2: 20,
    },
    {
      facultyName: "Fakultas ISIP",
      data1: 80,
      data2: 20,
    },
    {
      facultyName: "Fakultas Kedokteran",
      data1: 80,
      data2: 20,
    },
    {
      facultyName: "Fakultas MIPA",
      data1: 80,
      data2: 20,
    },
    {
      facultyName: "Fakultas KIP",
      data1: 80,
      data2: 20,
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-5 w-full rounded-xl shadow-sm shadow-black/30 p-5 place-items-center">
      {facultyData.map((item, index) => (
        <FacultyWebCaseCard
          key={index}
          facultyName={item.facultyName}
          data1={item.data1}
          data2={item.data2}
        />
      ))}
    </div>
  );
}

export default FacultyWebCaseCards;
