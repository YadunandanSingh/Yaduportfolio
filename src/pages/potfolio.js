import React, { useState } from 'react';
import spotifyclone from '../media/Screenshot from 2024-04-23 16-19-41.png'
function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="Portfolio-main ">
      <div className="Potfolio-section ">
        <div className="Potfolio-header">
          <b className="head-border skil-head">
            My Works and Projects
          </b>
        </div>

        <div className="Potfolio-body">
          <p>I've always been fascinated by the project-based learning approach. Passively learning facts and reciting them out of context is no longer sufficient to prepare me for solving real-world problems. Working with projects has helped me a lot in developing various skills likewise teamwork, problem-solving, research gathering, time management, information synthesizing, implementing new tools and technologies. I've personally felt these all are very essential in becoming a good software engineer and develop skills.</p>
        </div>
      </div>

      <div className="project-section pb-5  ">
        <div className="project-header">
          <b className="head-border skil-head">
            Happy spending my time to this projects
          </b>
        </div>

        {/* Tabs Section */}
        {/* <div className="tabs flex flex-wrap justify-center gap-4 mt-5">
          <button
            className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'all'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            onClick={() => handleTabClick('all')}
          >
            All
          </button>
          <button
            className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'html'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            onClick={() => handleTabClick('html')}
          >
            HTML
          </button>
          <button
            className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'react'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            onClick={() => handleTabClick('react')}
          >
            React
          </button>
          <button
            className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'mern'
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            onClick={() => handleTabClick('mern')}
          >
            MERN
          </button>
        </div> */}

        {/* Projects Section */}
        <div className="projects-box mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'all' && (
            <>
              <div class="container">
                <div class="row g-3">
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3 ">
                    <span className='card-text'>
                      <a href='https://gurukuljyotish.org/'>
                        <div class="card  border rounded-lg shadow-sm prj3">


                          <span className='card-text'>
                            Gurukuljhotish.org
                          </span>
                        </div>
                      </a>
                    </span>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <span className='card-text'>
                    <a href='http://vimalincense.com/'>
                      <div class="card  border rounded-lg shadow-sm prj4">
                        <span className='card-text'>
                          Vimal Incense
                        </span>
                      </div>
                      </a>
                    </span>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <span className='card-text'>
                    <a href='http://www.cosmicblessings.in/'>
                      <div class="card  border rounded-lg shadow-sm prj5">
                        <span className='card-text'>
                          Cosmic Blessings
                        </span>
                      </div>
                      </a>

                    </span>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <span className='card-text'>
                    <a href='https://www.vijaygoel.net/'>
                      <div class="card  border rounded-lg shadow-sm prj6">
                        <span className='card-text'>
                          Vijay Goel
                        </span>
                      </div>
</a>
                    </span>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <span className='card-text'>
                      <a href='https://amasicon2025.com/'>
                      <div class="card  border rounded-lg shadow-sm prj7">
                        <span className='card-text'>
                          Amsicon 2025
                        </span>
                      </div>
                      </a>
                    </span>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <span className='card-text'>
                      <a href='https://www.archpointwellness.com/'>
                      <div class="card  border rounded-lg shadow-sm prj8">
                        <span className='card-text'>
                          Archpoint Wellness
                        </span>
                      </div>
                      </a>
                    </span>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <span className='card-text'>
                      <a href='https://insuconcables.com/'>
                      <div class="card  border rounded-lg shadow-sm prj9">
                        <span className='card-text'>
                          Insucon
                        </span>
                      </div>
                      </a>
                    </span>
                  </div>
                  {/* <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <span className='card-text'>
                      <div class="card border rounded-lg shadow-sm">
                        <span className='card-text'>
                          React Projects
                        </span>
                      </div>

                    </span>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <span className='card-text'>
                      <div class="card  border rounded-lg shadow-sm">
                        <span className='card-text'>
                          MERN Projects
                        </span>
                      </div>

                    </span>
                  </div> */}
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card  border rounded-lg shadow-sm prj2 text-white" >
                      <span className='card-text'>spotify clone</span></div>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === 'html' && (
            <div class="container">
              <div class="row g-3">
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 ">
                    <span className='card-text'>
                      <a href='https://gurukuljyotish.org/'>
                        <div class="card  border rounded-lg shadow-sm prj3">


                          <span className='card-text'>
                            Gurukuljhotish.org
                          </span>
                        </div>
                      </a>
                    </span>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <span className='card-text'>
                    <a href='http://vimalincense.com/'>
                      <div class="card  border rounded-lg shadow-sm prj4">
                        <span className='card-text'>
                          Vimal Incense
                        </span>
                      </div>
                      </a>
                    </span>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <span className='card-text'>
                    <a href='http://www.cosmicblessings.in/'>
                      <div class="card  border rounded-lg shadow-sm prj5">
                        <span className='card-text'>
                          Cosmic Blessings
                        </span>
                      </div>
                      </a>

                    </span>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <span className='card-text'>
                    <a href='https://www.vijaygoel.net/'>
                      <div class="card  border rounded-lg shadow-sm prj6">
                        <span className='card-text'>
                          Vijay Goel
                        </span>
                      </div>
</a>
                    </span>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <span className='card-text'>
                      <a href='https://amasicon2025.com/'>
                      <div class="card  border rounded-lg shadow-sm prj7">
                        <span className='card-text'>
                          Amsicon 2025
                        </span>
                      </div>
                      </a>
                    </span>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <span className='card-text'>
                      <a href='https://www.archpointwellness.com/'></a>
                      <div class="card  border rounded-lg shadow-sm prj8">
                        <span className='card-text'>
                          Archpoint Wellness
                        </span>
                      </div>

                    </span>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <span className='card-text'>
                      <a href='https://insuconcables.com/'></a>
                      <div class="card  border rounded-lg shadow-sm prj9">
                        <span className='card-text'>
                          Insucon
                        </span>
                      </div>

                    </span>
                  </div>

              </div>
            </div>

          )}
          {activeTab === 'react' && (
            <>
              <div class="container">
                <div class="row g-3">

                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <span className='card-text'>
                      <a href='http://www.idealsoft/'></a>
                      <div class="card  border rounded-lg shadow-sm prj9">
                        <span className='card-text'>
                          Insucon
                        </span>
                      </div>

                    </span>
                  </div>
                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card p-4 border rounded-lg shadow-sm">spotify clone</div>
                  </div>
                </div>
              </div>

            </>
          )}
          {activeTab === 'mern' && (
            <>
              <div class="container">
                <div class="row g-3">

                  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card p-4 border rounded-lg shadow-sm">whatsapp marketing</div>
                  </div>
                </div>
              </div></>

          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;