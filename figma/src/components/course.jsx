import course from "../assets/Courses.png"
import fcourse from "../assets/Featured Courses.png"

export const Course = () => {
  return (
    <div className="w-full bg-[#F5F7FA] pb-12">
      <div className="w-[1200px] m-auto">
        <h2 className="text-center pt-12 pb-12 font-extrabold text-4xl">
          Best selling courses
        </h2>
        <img className="mb-10" src= {course} />
        <img src={fcourse} />
      </div>
    </div>
  );
};
