const baseUrlApi = "http://localhost:3001";

const GetAPI = (path) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${baseUrlApi}/${path}`)
      .then((response) => response.json())
      .then(
        (result) => {
          resolve(result);
        },
        (err) => {
          reject(err);
        }
      );
  });
  return promise;
};

const PostAPI = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${baseUrlApi}/${path}`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(
      (result) => {
        resolve(result);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

const postNewsBlog = (dataYgDikirim) => PostAPI("posts", dataYgDikirim);

const getNewsBlog = () => GetAPI("posts?_sort=id&_order=desc");

const API = {
  getNewsBlog,
  postNewsBlog,
};

export default API;
