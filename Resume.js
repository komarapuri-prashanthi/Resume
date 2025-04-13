import React from 'react';

export default function Resume() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-center mb-4">Prashanthi Komarapuri</h1>
        <p className="text-center text-gray-600 mb-2">Email: komarapuriprashanthi@gmail.com</p>
        <p className="text-center text-gray-600 mb-4">
          <a href="https://www.hackerrank.com/profile/23wh1a1250" className="text-blue-600 hover:underline">HackerRank</a> | 
          <a href="https://github.com/KomarapuriPrashanthi" className="text-blue-600 hover:underline ml-2">GitHub</a>
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-2">Education</h2>
          <ul className="list-disc list-inside">
            <li>BVRIT Hyderabad College of Engineering for Women, B.Tech IT (GPA: 8.61) - Aug 2023 - Mar 2027</li>
            <li>S R Junior College, Hyderabad, Intermediate (GPA: 9.8) - Jun 2021 - May 2023</li>
            <li>New Hope High School, Hyderabad, SSC (GPA: 10) - Jun 2009 - Mar 2020</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-2">Skills</h2>
          <ul className="list-disc list-inside">
            <li>Languages: C, Python, JAVA, HTML, CSS, SQL</li>
            <li>Courses: Data Structures, DBMS, IoT</li>
            <li>Tools: VS Code, MySQL, Eclipse</li>
            <li>Platforms: Linux, Windows, Arduino, Raspberry Pi</li>
            <li>Soft Skills: Communication, Adaptability, Leadership, Time Management</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-2">Projects</h2>
          <ul className="list-disc list-inside">
            <li><strong>Pick and Pack (Java App):</strong> Console-based grocery shopping system. Role: User Management & Cart Checkout</li>
            <li><strong>Knowledgeable Knight’s Tour (Python GUI):</strong> Chessboard Knight's move visualizer using Pygame. Role: GUI</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-2">Certificates</h2>
          <ul className="list-disc list-inside">
            <li>Great Apesec Hackathon - Cyber Security</li>
            <li>DEMUX Hackathon - Tech Oriented</li>
            <li>Flipkart Grid 6.0 - Software Development</li>
            <li>Get started with Julia - ML & AI</li>
            <li>Semiconductor Fabrication 101 - Purdue University</li>
            <li>Pure Earth Environment Conference</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-2">Hackathons</h2>
          <ul className="list-disc list-inside">
            <li>DEMUX Hackathon - Sep 2024 (Crop Data Web App at BVRT Narsapur)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
