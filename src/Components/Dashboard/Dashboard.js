import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [item, setItem] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch("https://tuhhin-app-sarver-1.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  useEffect(() => {
    fetch("https://tuhhin-app-sarver-1.vercel.app/code")
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, []);

  return (
    <div>
      <div>
        <div className="container">
          <h3 className="text-center">
            {result.map((data, index) => (
              <h3>
                {index + 1}={data.Code}
              </h3>
            ))}
          </h3>
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              {item.map((data, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.Email}</td>
                  <td>{data.Password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
