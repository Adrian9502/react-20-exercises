import React, { useEffect, useState } from "react";

export default function GitHubProfileFinder() {
  const [user, setUser] = useState("Adrian9502");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    if (data) {
      setUserData([data]); // Convert the single user data to an array
      setLoading(false);
      console.log(data);
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }
  if (loading) {
    return (
      <>
        <div className="container bg-dark row mx-auto mt-5 rounded border border-light">
          <h2 className="text-light p-5">Loading...</h2>
        </div>
      </>
    );
  }
  return (
    <div className="container bg-dark row mx-auto mt-5 rounded border border-light">
      <h1 className="text-light m-3">Github Profile Finder using API</h1>
      <div className="d-flex gap-5 mb-4">
        <input
          onChange={(e) => setUser(e.target.value)}
          type="text"
          name="search-by-user"
          className="form-control"
          placeholder="Search GitHub profiles"
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>

      {userData.map((user) => (
        <div
          className="card mb-3 mx-auto p-2 align-items-center"
          style={{ maxWidth: "70%" }}
          key={user.id}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={
                  user.avatar_url ||
                  "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg"
                }
                className="img-fluid rounded-start rounded"
                alt={user.name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title text-danger">
                  {user.login || "No user found"}
                </h3>
                <h5 className="card-text">{user.name || "No name found"}</h5>
                <h5 className="card-text">
                  <i>{user.bio || "No bio found"}</i>
                </h5>
                <h6 className="card-text">
                  Public Repositories: {user.public_repos || 0}
                </h6>
                <h6 className="card-text">Followers: {user.followers || 0}</h6>
                <h6 className="card-text mb-4">
                  Following: {user.following || 0}
                </h6>

                <a href={user.html_url} className="btn btn-dark border">
                  Profile
                </a>
                <a
                  href={`https://github.com/${user.login}?tab=repositories`}
                  className="btn btn-dark border"
                >
                  Repositories
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
