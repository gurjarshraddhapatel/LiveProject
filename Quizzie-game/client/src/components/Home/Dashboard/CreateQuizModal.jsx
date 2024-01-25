import React, { useState } from 'react';

const CreateQuizModal = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    // Add your validation logic here
    if (selectedOption === 'male') {
      setShowSecondModal(true);
    } else if (selectedOption === 'female') {
      setShowThirdModal(true);
    }
  };

  const handleSecondModalSubmit = () => {
    // Add additional logic or actions for the second modal
    setShowSecondModal(false); // Hide the second modal after submission
  };

  const handleThirdModalSubmit = () => {
    // Add additional logic or actions for the third modal
    setShowThirdModal(false); // Hide the third modal after submission
  };
  

  return (
    <div>
      {/* First Modal */}
      <div className={`modal-overlay ${showSecondModal || showThirdModal ? 'hidden' : ''}`}>
        <div className={`modal-container ${showSecondModal || showThirdModal ? 'hidden' : ''}`}>
          <div className="modal-content">
            <div className="inner-modal-content">
              <input type="text" name="" placeholder='Quiz name' className='input-width' id="" />
              <div className="radio-group">
                <label htmlFor="">Quiz Type</label>
                <label>
                  <input
                    type="radio"
                    name="genderOptions"
                    value="male"
                    checked={selectedOption === 'male'}
                    onChange={handleOptionChange}
                  />
                  Q & A
                </label>
                <label>
                  <input
                    type="radio"
                    name="genderOptions"
                    value="female"
                    checked={selectedOption === 'female'}
                    onChange={handleOptionChange}
                  />
                  Poll Type
                </label>
              </div>
              <div className="btn-style">
                <button className='btn-cancel' onClick={onClose}>Cancel</button>
                <button className='btn-continue' onClick={handleSubmit}>Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* ====================================Second Modal ==================================== */}
      {showSecondModal && (
        <div className="modal-overlay">
          <div className="modal-containersecond">
            <div className="modal-contentseconde">
              <h2>Create Quiz</h2>
              <div>
                {/* Additional content for the second modal */}
                
                <p>Max 5 Questions</p>

                <p>Poll Question</p>
                <div>
                  <label htmlFor="optionType">Option Type:</label>
                  <select id="optionType">
                    <option value="Text">Text</option>
                    <option value="Image URL">Image URL</option>
                    <option value="Text and Image URL">Text and Image URL</option>
                  </select>
                </div>

                <div>
                  <p>Option</p>
                  <input type="text" />
                </div>

                <div>
                  <p>Option</p>
                  <input type="text" />
                </div>

                <div>
                  <p>Option</p>
                  <input type="text" />
                </div>

                <div>
                  <p>Option</p>
                  <input type="text" />
                </div>

                <p>Timer Type:</p>
                <div>
                  <label htmlFor="timerType">Timer Type:</label>
                  <select id="timerType">
                    <option value="5 Sec">5 Sec</option>
                    <option value="10 Sec">10 Sec</option>
                    <option value="OFF">OFF</option>
                  </select>
                </div>

                <div className="btn-style">
                  <button className="btn-cancel" onClick={handleSecondModalSubmit}>
                    Cancel
                  </button>
                  <button className="btn-continue" onClick={() => setShowSecondModal(false)}>
                    Create Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* ===================================Third Modal =========================================*/}
      {showThirdModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-content">
              <h2>Third Modal Content</h2>
              {/* Additional content for the third modal */}
              <button className='btn-cancel' onClick={handleThirdModalSubmit}>Submit</button>
              <button className='btn-continue' onClick={() => setShowThirdModal(false)}>Close Third Modal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateQuizModal;
