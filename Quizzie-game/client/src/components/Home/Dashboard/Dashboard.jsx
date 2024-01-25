import React, { useState } from 'react';
import './Dashboard.css';
// import { Link } from 'react-router-dom';
import CreateQuizModal from './CreateQuizModal'
const Dashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  return (
    <div>
    <div className="style-1">
  <div className="left-box">
    <a href="/dashboard" className="style-3">
      <div className="style-4">QUIZZIE</div>
    </a>
    <div className="style-5">
      <button className="style-6" fdprocessedid="o52byd">
        Dashboard
      </button>
      <button className="style-7" fdprocessedid="mlps6c">
        Analytics
      </button>
      <button className="style-8" onClick={openModal}>
          Create Quiz
      </button>
     
    </div>
    <hr className="style-9" />
    <button className="style-10" fdprocessedid="nhymwy">
      LOGOUT
    </button>

    
  </div>
 
  <div className="style-11">
    <div className="style-12">
      <div className="style-13">
        <div className="style-14">
          <div className="style-15">0</div>Quizzes Created
        </div>
        <div className="style-16">
          <div className="style-17">0</div>Questions Created
        </div>
        <div className="style-18">
          <div className="style-19">0</div> Impressions
        </div>
      </div>
      <div className="">
        <h2 className="style-23">Trending Quiz</h2>
        <div className="style-20">
          <p className="style-21">
            You haven't created any Quiz, Click on Create Quiz to create your
            first Quiz
          </p>
        </div>
        <div>
           {/* close modal */}
    {isModalOpen && <CreateQuizModal onClose={closeModal} />}
        </div>
      </div>
    </div>
  </div>
</div>

</div>

  )
}

export default Dashboard
