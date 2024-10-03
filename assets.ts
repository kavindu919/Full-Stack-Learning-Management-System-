import React from "react";
import { MenuOutlined } from "@ant-design/icons";

export const studentLinks = [
  { name: "Dashboard", image: "/menu.png", url: "/student/dashboard" },
  { name: "Course", image: "/course.png", url: "/student/course" },
  { name: "Profile", image: "/user.png", url: "/student/profile" },
  { name: "Grade Book", image: "/gradebook.png", url: "/student/grade_book" },
];
export const instructorLinks = [
  { name: "Dashboard", image: "image_Link", url: "/instructor/dashboard" },
  { name: "Course", image: "image_Link", url: "/instructor/course" },
  { name: "Student", image: "image_Link", url: "/instructor/student" },
  { name: "Assignemt", image: "image_Link", url: "/instructor/assignment" },
  { name: "Grade Book", image: "image_Link", url: "/instructor/grade_book" },
];
export const AdminLinks = [
  { name: "Dashboard", image: "image_Link", url: "/admin/dashboard" },
  { name: "Course", image: "image_Link", url: "/admin/course" },
  { name: "Student", image: "image_Link", url: "/admin/student" },
  { name: "Admin", image: "image_Link", url: "/admin/instructor" },
  { name: "Assignemt", image: "image_Link", url: "/admin/assignment" },
  { name: "Grade Book", image: "image_Link", url: "/admin/grade_book" },
];

export const courseList = [
  {
    courseImage: "https://picsum.photos/200",
    courseName: "Web Development",
    courseCode: "WD101",
  },
  {
    courseImage: "https://picsum.photos/200",
    courseName: "Data Science",
    courseCode: "DS102",
  },
  {
    courseImage: "https://picsum.photos/200",
    courseName: "Cyber Security",
    courseCode: "CS103",
  },
  {
    courseImage: "https://picsum.photos/200",
    courseName: "Artificial Intelligence",
    courseCode: "AI104",
  },
  {
    courseImage: "https://picsum.photos/200",
    courseName: "Cloud Computing",
    courseCode: "CC105",
  },
  {
    courseImage: "https://picsum.photos/200",
    courseName: "DevOps",
    courseCode: "DV106",
  },
  {
    courseImage: "https://picsum.photos/200",
    courseName: "Blockchain Technology",
    courseCode: "BT107",
  },
];

export const columns = [
  "Assignment Name",
  "Course Code",
  "Posted Date",
  "Due Date",
  "Status",
];

export const data = [
  {
    "Assignment Name": "React Hooks and State Management",
    "Course Code": "CS201",
    "Posted Date": "2024-09-10",
    "Due Date": "2024-09-20",
    Status: "Pending",
  },
  {
    "Assignment Name": "MongoDB Schema Design",
    "Course Code": "CS202",
    "Posted Date": "2024-09-15",
    "Due Date": "2024-09-25",
    Status: "Completed",
  },
  {
    "Assignment Name": "Building RESTful APIs with Node.js",
    "Course Code": "CS203",
    "Posted Date": "2024-09-12",
    "Due Date": "2024-09-22",
    Status: "In Progress",
  },
  {
    "Assignment Name": "Introduction to GraphQL",
    "Course Code": "CS204",
    "Posted Date": "2024-09-17",
    "Due Date": "2024-09-27",
    Status: "Pending",
  },
  {
    "Assignment Name": "Responsive Web Design with Tailwind CSS",
    "Course Code": "CS205",
    "Posted Date": "2024-09-05",
    "Due Date": "2024-09-15",
    Status: "Completed",
  },
  {
    "Assignment Name": "Docker and Containerization Basics",
    "Course Code": "CS206",
    "Posted Date": "2024-09-19",
    "Due Date": "2024-09-29",
    Status: "Pending",
  },
  {
    "Assignment Name": "JWT Authentication with Express",
    "Course Code": "CS207",
    "Posted Date": "2024-09-14",
    "Due Date": "2024-09-24",
    Status: "In Progress",
  },
  {
    "Assignment Name": "TypeScript Basics",
    "Course Code": "CS208",
    "Posted Date": "2024-09-18",
    "Due Date": "2024-09-28",
    Status: "Completed",
  },
];

//data for the course card
export const cardData = [
  {
    courseCode: "PMAT 11513",
    courseName: "Abstract Algebra",
    image: "https://picsum.photos/300/150?random=1",
    onClick: () => {
      console.log("Abstract Algebra clicked");
    },
  },
  {
    courseCode: "CSCI 11013",
    courseName: "Introduction to Programming",
    image: "https://picsum.photos/300/150?random=2",
    onClick: () => {
      console.log("Introduction to Programming clicked");
    },
  },
  {
    courseCode: "PHYS 10123",
    courseName: "General Physics",
    image: "https://picsum.photos/300/150?random=3",
    onClick: () => {
      console.log("General Physics clicked");
    },
  },
  {
    courseCode: "CHEM 11213",
    courseName: "Organic Chemistry",
    image: "https://picsum.photos/300/150?random=4",
    onClick: () => {
      console.log("Organic Chemistry clicked");
    },
  },
  {
    courseCode: "MATH 12013",
    courseName: "Calculus I",
    image: "https://picsum.photos/300/150?random=5",
    onClick: () => {
      console.log("Calculus I clicked");
    },
  },
];

export const lectureData = [
  {
    lectureNo: "Lecture 01",
    uploadDateTime: "2024/09/03 15:46",
    pdfName: "Lecture_01.pdf",
  },
  {
    lectureNo: "Lecture 02",
    uploadDateTime: "2024/09/10 14:30",
    pdfName: "Lecture_02.pdf",
  },
  {
    lectureNo: "Lecture 03",
    uploadDateTime: "2024/09/17 13:20",
    pdfName: "Lecture_03.pdf",
  },
];

export const assignmentData = [
  {
    assignmentNo: "Assignment 01",
    uploadDateTime: "2024/09/01 10:30",
    dueDateTime: "2024/09/15 23:59",
    pdfName: "Assignment_01.pdf",
  },
  {
    assignmentNo: "Assignment 02",
    uploadDateTime: "2024/09/05 14:00",
    dueDateTime: "2024/09/20 23:59",
    pdfName: "Assignment_02.pdf",
  },
  {
    assignmentNo: "Assignment 03",
    uploadDateTime: "2024/09/10 09:00",
    dueDateTime: "2024/09/25 23:59",
    pdfName: "Assignment_03.pdf",
  },
  {
    assignmentNo: "Assignment 04",
    uploadDateTime: "2024/09/15 12:15",
    dueDateTime: "2024/09/30 23:59",
    pdfName: "Assignment_04.pdf",
  },
];

export const gradebookAssignmentsColumns = [
  "Assignment Name",
  "Course Code",
  "Posted Date",
  "Marks",
  "Status",
];
export const gradebookAssignmentsData = [
  {
    "Assignment Name": "Introduction to Chemistry",
    "Course Code": "CHE101",
    "Posted Date": "2024-09-01",
    Marks: 85,
    Status: "Submitted",
  },
  {
    "Assignment Name": "Math Assignment 1",
    "Course Code": "MAT202",
    "Posted Date": "2024-09-05",
    Marks: 90,
    Status: "Graded",
  },
  {
    "Assignment Name": "Literature Review",
    "Course Code": "ENG303",
    "Posted Date": "2024-09-10",
    Marks: 78,
    Status: "Submitted",
  },
  {
    "Assignment Name": "Programming Project",
    "Course Code": "CSC404",
    "Posted Date": "2024-09-15",
    Marks: 95,
    Status: "Graded",
  },
  {
    "Assignment Name": "Group Presentation",
    "Course Code": "COM505",
    "Posted Date": "2024-09-20",
    Marks: 88,
    Status: "Pending",
  },
  {
    "Assignment Name": "Data Analysis Report",
    "Course Code": "STA606",
    "Posted Date": "2024-09-25",
    Marks: 92,
    Status: "Submitted",
  },
  {
    "Assignment Name": "Research Paper",
    "Course Code": "RES707",
    "Posted Date": "2024-09-28",
    Marks: 81,
    Status: "Graded",
  },
  {
    "Assignment Name": "Final Exam Preparation",
    "Course Code": "EXM808",
    "Posted Date": "2024-09-30",
    Marks: 0, // Or you can omit this line if you prefer
    Status: "Not Submitted",
  },
];
