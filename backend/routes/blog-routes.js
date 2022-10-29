import  express  from "express";
import { deleteBlog, getAllBlog, getByUserId } from "../controllers/blog-controllers";
import { addBlog,updateBlog,getById } from "../controllers/blog-controllers";
const blogRouter = express.Router()
blogRouter.get('/',getAllBlog)
// adding the blog 
blogRouter.post("/add",addBlog)
blogRouter.put("/update/:id",updateBlog)
blogRouter.get('/:id',getById)
blogRouter.delete("/:id",deleteBlog)
blogRouter.get('/user/:id',getByUserId)
export default blogRouter