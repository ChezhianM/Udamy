import React, { useState, useRef, useEffect } from 'react';
import './Course.css';
import Search from './Search';

import jsImage from './images/javascript.jpg';
import pythonImage from './images/python.jpeg';
import javaImage from './images/java.jpeg';
import htmlImage from './images/html.jpg';
import cssImage from './images/css.jpg';
import springImage from './images/spring.webp';
import mongoImage from './images/mongodb.webp';
import sqlImage from './images/sql.jpeg';

const courseData = [
  {
    id: 1,
    title1:'javascript',
    title: 'JavaScript For Beginners',
    description: 'Learn the basics of JavaScript, the most popular programming language in web development.',
    thumbnail: jsImage,
    category: 'Frontend',
    fullDetails: 'Comprehensive JavaScript course covering basics to advanced topics: variables, functions, DOM manipulation, AJAX, ES6, frameworks (React, Angular), and practical projects. Hands-on learning for web development proficiency.',
  },
  {
    id: 2,
    title1:'python',
    title: 'Advanced Python Programming',
    description: 'Enhance your Python skills with advanced concepts and applications.',
    thumbnail: pythonImage,
    category: 'Backend',
    fullDetails: 'This Python course covers programming basics, data structures, web development, data analysis, and machine learning, providing hands-on projects to build proficiency and practical skills for various applications and industries.',
  },
  {
    id: 3,
    title1:'java',
    title: 'Mastering Java',
    description:'Full course details for Mastering Java...' ,
    thumbnail: javaImage,
    category: 'Backend',
    fullDetails: 'Learn Java programming from basics to advanced concepts. Master object-oriented principles, data structures, and algorithms. Gain hands-on experience with real-world projects, preparing you for software development careers. No prior experience required.',
  },
  {
    id: 4,
    title1:'html',
    title: 'HTML Essentials',
    description: 'Understand the structure of web pages with a comprehensive introduction to HTML.',
    thumbnail: htmlImage,
    category: 'Frontend',
    fullDetails: 'Learn the fundamentals of HTML, the backbone of web development. This course covers tags, elements, and structure, enabling you to create and format webpages effectively from scratch. No prior experience required.',
  },
  {
    id: 5,
    title1:'css',
    title: 'CSS for Designers',
    description: 'Learn how to style web pages with CSS, from basics to advanced techniques.',
    thumbnail: cssImage,
    category: 'Frontend',
    fullDetails: 'Learn CSS to style web pages with precision. Master layout techniques, animations, and responsive design. Perfect for beginners and intermediate learners aiming to enhance their web development skills.',
  },
  {
    id: 6,
    title1:'springboot',
    title: 'Spring Boot Fundamentals',
    description: 'Get started with Spring Boot to build robust and scalable Java applications.',
    thumbnail: springImage,
    category: 'Backend',
    fullDetails: 'Learn Spring Boot essentials: building and deploying Java applications, RESTful APIs, data persistence with Spring Data JPA, security, testing, and microservices architecture. Ideal for developers seeking practical, hands-on experience.',
  },
  {
    id: 7,
    title1:'mongodb',
    title: 'Mastering MongoDB',
    description: 'Learn how to use MongoDB, a popular NoSQL database, to build efficient and scalable applications.',
    thumbnail: mongoImage,
    category: 'Database',
    fullDetails: 'The MongoDB course covers database fundamentals, CRUD operations, indexing, aggregation, schema design, replication, and sharding, providing practical experience with MongoDB for efficient data management and application development.',
  },
  {
    id: 8,
    title1:'sql',
    title: 'SQL for Beginners',
    description: 'Get started with SQL, the standard language for managing and manipulating databases.',
    thumbnail: sqlImage,
    category: 'Database',
    fullDetails: 'Learn SQL fundamentals: querying, updating, and managing databases. Master joins, subqueries, and indexing for efficient data retrieval. Hands-on projects and real-world scenarios prepare you for database management and analysis roles.',
  },
];

const Course = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedCourseId, setExpandedCourseId] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const courseRefs = useRef({});

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setExpandedCourseId(null); 
  };

  const handleCategorySelected = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (searchInput) => {
    const matchedCourse = courseData.find(course => 
      course.title1.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (matchedCourse && courseRefs.current[matchedCourse.id]) {
      courseRefs.current[matchedCourse.id].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewMore = (courseId) => {
    setExpandedCourseId(courseId === expandedCourseId ? null : courseId);
  };

  const handleAddCourse = (course) => {
    setSelectedCourses((prevSelectedCourses) => {
      if (!prevSelectedCourses.some(c => c.id === course.id)) {
        return [...prevSelectedCourses, course];
      }
      return prevSelectedCourses;
    });
  };

  const handleRemoveCourse = (courseId) => {
    setSelectedCourses((prevSelectedCourses) => prevSelectedCourses.filter(c => c.id !== courseId));
  };

  const filteredCourses = selectedCategory === 'All' 
    ? courseData 
    : courseData.filter(course => course.category === selectedCategory);

  return (
    <section id='course' className='section'>
      <div className="courses-container">
        <h1>Programming Language Courses</h1>
        <Search onSearch={handleSearch} id="search" />
        
        <div className="category-buttons">
          <button onClick={() => handleCategoryChange('All')}>All</button>
          <button onClick={() => handleCategoryChange('Frontend')}>Frontend</button>
          <button onClick={() => handleCategoryChange('Backend')}>Backend</button>
          <button onClick={() => handleCategoryChange('Database')}>Database</button>
        </div>
        <div className="main-content">
          <div className="courses-list">
            {filteredCourses.map(course => (
              <div key={course.id} className="course-card" ref={(el) => (courseRefs.current[course.id] = el)}>
                <img src={course.thumbnail} alt={course.title} />
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                {expandedCourseId === course.id && <p>{course.fullDetails}</p>}
                <button onClick={() => handleViewMore(course.id)} id='view'>
                  {expandedCourseId === course.id ? 'Show Less' : 'View More'}
                </button>
                <button onClick={() => handleAddCourse(course)}>Add Course</button>
              </div>
            ))}
          </div>
          <div className="selected-courses">
            <h2>Selected Courses</h2>
            {selectedCourses.length === 0 ? (
              <p>No courses selected</p>
            ) : (
              <ul>
                {selectedCourses.map(course => (
                  <li key={course.id}>
                    <img src={course.thumbnail} alt={course.title} />
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    {expandedCourseId === course.id && <p>{course.fullDetails}</p>}
                    <button onClick={() => handleViewMore(course.id)} id='s-view'>
                      {expandedCourseId === course.id ? 'Show Less' : 'View More'}
                    </button>
                    <button onClick={() => handleRemoveCourse(course.id)} id='remove'>Remove</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
