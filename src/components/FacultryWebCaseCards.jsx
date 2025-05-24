import FacultyWebCaseCard from "./FacultyWebCaseCard";

function FacultyWebCaseCards({ facultyData }) {
  return (
    <div className="grid grid-cols-4 gap-10 w-full rounded-xl shadow-sm shadow-black/30 p-10 place-items-center ">
      {facultyData.map((item, index) => (
        <FacultyWebCaseCard
          key={index}
          facultyName={item.facultyName}
          data1={item.data1}
          data2={item.data2}
          colors={item.colors}
        />
      ))}
    </div>
  );
}

export default FacultyWebCaseCards;
