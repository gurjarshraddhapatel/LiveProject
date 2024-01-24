import React from 'react'
import "./Analytic.css"

const Analytic = () => {
  return (
    <div>
                               <div className="">
  <div className="style-1">
    <div className="style-2">
      <a href="/dashboard" className="style-3">
        <div className="style-4">QUIZZIE</div>
      </a>
      <div className="style-5">
        <button className="style-6">Dashboard</button>
        <button className="style-7">Analytics</button>
        <button className="style-8">Create Quiz</button>
      </div>
      <hr className="style-9" />
      <button className="style-10">LOGOUT</button>
    </div>
    <div className="style-11">
      <div className="style-12">
        <h1 className="style-13">Quiz Analytics</h1>
        <table className="style-14">
          <thead className="style-15">
            <tr className="">
              <th className="style-16">S.No</th>
              <th className="style-17">Quiz Name</th>
              <th className="style-18">Created on</th>
              <th className="style-19">Impression</th>
              <th className="style-20" />
              <th className="style-21" />
            </tr>
          </thead>
          <tbody className="">
            <tr className="style-22">
              <td className="style-23">1</td>
              <td className="style-24">Sam</td>
              <td className="style-25">1/17/2024</td>
              <td className="style-26">3</td>
              <td className="style-27">
                <img
                  src="/static/media/edit-icon.6d02606fe75f22c4c2b803e184038aa3.svg"
                  alt=""
                  className="style-28"
                />
                <img
                  src="/static/media/delete-icon.79553559426285fa2470dec136413952.svg"
                  alt=""
                  className="style-29"
                />
                <img
                  src="/static/media/share-icon.27ce9cc4056d35e980b4dcbf26c4cb4b.svg"
                  alt=""
                  className="style-30"
                />
              </td>
              <td className="style-31">Question Wise Analysis</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div className="" />
</div>

    </div>
  )
}

export default Analytic
