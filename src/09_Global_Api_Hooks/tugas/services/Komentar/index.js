import GetAPI from "../API/Get";
import PostAPI from "../API/Post";
import DeleteAPI from "../API/Delete";

const getNewsComment = () => GetAPI("comment?_sort=id&_order=desc");
const postNewsComment = (dataYgDikirim) => PostAPI("comment", dataYgDikirim);
const deleteNewsComment = (dataYgDihapus) =>
  DeleteAPI("comment", dataYgDihapus);

const API = {
  getNewsComment,
  postNewsComment,
  deleteNewsComment,
};

export default API;
