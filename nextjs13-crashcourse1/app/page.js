'use client';

import { useState, useEffect } from 'react';
import Courses from './components/courses';
import LoadingPage from './loading';
import CourseSearch from './components/course_search';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);
  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome to Anthony'Courses!</h1>
      <CourseSearch
        getSearchResults={(results) => {
          setCourses(results);
        }}
      />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
