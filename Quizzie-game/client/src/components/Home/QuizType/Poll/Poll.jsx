import React from 'react'
import "./Poll.css"
const Poll = () => {
  return (
    <div>
                            <div className="style-0">
  <div className="style-1">
    <div className="style-2">
      <div className="style-3">
        <div className="style-4">
          <div className="style-5">1</div>
          <div className="style-6">+</div>
        </div>
        <p className="">Max 5 Questions</p>
      </div>
      <div className="style-7">
        <div className="">
          <input
            type="text"
            placeholder="Poll Question"
            className="style-8"
            defaultValue=""
          />
        </div>
        <div className="style-9">
          <div className="style-10">Option Type:</div>
          <label className="">
            <input
              type="radio"
              name="optionType"
              defaultChecked=""
              className="style-11"
            />
            Text
          </label>
          <label className="style-12">
            <input type="radio" name="optionType" className="" />
            Image URL
          </label>
          <label className="style-13">
            <input type="radio" name="optionType" className="" />
            Text and Image URL
          </label>
        </div>
        <div className="style-14">
          <div className="">
            <input type="radio" name="ansOption" className="" />
            <input
              type="text"
              name="optionText_0"
              placeholder="Option"
              className="style-15"
              defaultValue=""
            />
          </div>
          <div className="">
            <input type="radio" name="ansOption" className="" />
            <input
              type="text"
              name="optionText_1"
              placeholder="Option"
              className="style-16"
              defaultValue=""
            />
          </div>
          <div className="">
            <input type="radio" name="ansOption" className="" />
            <input
              type="text"
              name="optionText_2"
              placeholder="Option"
              className="style-17"
              defaultValue=""
            />
          </div>
          <div className="">
            <input type="radio" name="ansOption" className="" />
            <input
              type="text"
              name="optionText_3"
              placeholder="Option"
              className="style-18"
              defaultValue=""
            />
          </div>
        </div>
        <div className="style-19">
          <button className="style-20">Cancel</button>
          <button className="style-21">Create Quiz</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Poll
