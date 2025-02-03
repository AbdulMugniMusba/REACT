function fetchCourses(){
    const Courses = [
        {
          id: 1,
          name: "Subject--Python",
          description: "Discription--Python Programming",
          price:6000,
          duration:30,
        },
        {
          id: 2,
          name: "java",
          description: "Java Programming",
          price: 5000,
          duration: 50,
        },
        {
          id: 3,
          name: "React",
          description: "React Programming",
          price: 8000,
          duration: 70,
        },
      ];
      return Courses;
}
export default fetchCourses;