import React, { useState } from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

import image1 from '../../public/img/news/1.webp';
import image2 from '../../public/img/news/2.webp';
import image3 from '../../public/img/news/3.webp';
import image4 from '../../public/img/news/4.webp';
import image5 from '../../public/img/news/5.webp';
import image6 from '../../public/img/news/6.webp';

const postDetails = [
  {
    id: 1,
    image: image1,
    date: '15.12.2024',
    title: 'Playhost Hosts Yorkshire\'s Biggest Esports Tournament',
    excerpt: 'Join us for the ultimate gaming showdown as we host Yorkshire\'s largest esports tournament featuring League of Legends, CS:GO, and Valorant competitions with over £5,000 in prizes...',
  },
  {
    id: 2,
    image: image2,
    date: '10.12.2024',
    title: 'New VR Gaming Zone Opens at Playhost',
    excerpt: 'Experience the future of gaming with our brand new VR gaming zone featuring the latest Meta Quest 3 headsets and immersive gaming experiences for all ages...',
  },
  {
    id: 3,
    image: image3,
    date: '05.12.2024',
    title: 'Gaming Community Meetup: Connect with Fellow Yorkshire Gamers',
    excerpt: 'Join our monthly gaming community meetup where gamers from across Yorkshire come together to share strategies, form teams, and celebrate our shared passion for gaming...',
  },
  {
    id: 4,
    image: image4,
    date: '01.12.2024',
    title: 'Esports and Competitive Gaming: The Rise of Yorkshire Talent',
    excerpt: 'Discover how Yorkshire is becoming a hotbed for esports talent, with local players making waves in national and international competitions...',
  },
  {
    id: 5,
    image: image5,
    date: '28.11.2024',
    title: 'How to Protect Your Gaming Account and Stay Safe Online',
    excerpt: 'Essential tips and strategies for keeping your gaming accounts secure, protecting your personal information, and maintaining a safe online gaming experience...',
  },
  {
    id: 6,
    image: image6,
    date: '25.11.2024',
    title: '5 Ways to Maintain Good Posture During Long Gaming Sessions',
    excerpt: 'Expert advice on maintaining proper posture, preventing gaming-related injuries, and staying comfortable during extended gaming sessions at our facility...',
  },
  {
    id: 7,
    image: image3,
    date: '20.11.2024',
    title: 'Playhost Announces Partnership with Local Universities',
    excerpt: 'Exciting new collaboration bringing gaming education and esports programs to students across Yorkshire, creating pathways for future careers in gaming...',
  },
  {
    id: 8,
    image: image2,
    date: '15.11.2024',
    title: 'The Future of Gaming: What\'s Next for Playhost',
    excerpt: 'Get an exclusive look at our upcoming expansions, new gaming technologies, and exciting developments planned for Yorkshire\'s premier gaming destination...',
  },
  // Add more posts similarly...
];

const postsPerPage = 6; // Number of posts per page

const Section = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postDetails.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(postDetails.length / postsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container">
      <div className="row g-4">
        {currentPosts.map((post) => (
          <div key={post.id} className="col-lg-4 col-md-6 mb10">
            <div className="bloglist item">
              <div className="post-content">
                <div className="post-image">
                  <div className="d-tagline">
                    <span>gaming</span>
                    <span>leeds</span>
                  </div>
                  <Image src={post.image} alt="" />
                </div>
                <div className="post-text">
                  <div className="d-date">{post.date}</div>
                  <h4>
                    <Link href="/">{post.title}<span></span></Link>
                  </h4>
                  <p>{post.excerpt}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-md-12">
          <ul className="pagination">
            <li className={currentPage === 1 ? 'disabled' : ''}>
              <Link href="" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                Prev
              </Link>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i} className={i + 1 === currentPage ? 'active' : ''}>
                <Link href="" onClick={() => paginate(i + 1)}>
                  {i + 1}
                </Link>
              </li>
            ))}
            <li className={currentPage === totalPages ? 'disabled' : ''}>
              <Link href="" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section;
