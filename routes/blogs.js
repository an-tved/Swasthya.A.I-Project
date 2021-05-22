const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

//GET BACK ALL THE BLOGS
router.get('/', async (req,res) => {
    try{
        const blogs = await Blog.find();
        res.json(blogs);
    }catch(err) {
            res.json({ message: err });
    }
});

//SUBMITS A BLOGS
router.post('/', async (req,res) => {
    const blog = new Blog({
        title: req.body.title,
        description: req.body.description
    });
    try{
    const savedBlog = await blog.save()
    res.json(savedBlog);
    }catch(err) {
        res.json({ message: err });
    }
});

//SPECIFIC BLOGS
router.get('/:blogId', async (req,res) => {
    try{
        const blog = await Blog.findById(req.params.blogId);
        res.json(blog);
    } catch (err) {
        res.json({message: err});
    }  
});

//Delete Blog
router.delete('/:blogId', async (req,res) => {
    try {
        const removeBlog = await Blog.remove({_id: req.params.blogId});
        res.json(removeBlog);
    } catch (err) {
        res.json({ message: err });
    }
});

//Update a blog
router.patch('/:blogId', async (req,res) => {
    try{
        const updateBlog = await Blog.updateOne(
            { _id: req.params.blogId },
            { $set: { discription: req.body.title } }
        );
        res.json(updateBlog);
    } catch (err) {
        res.json({ message: err});
    }
});


module.exports = router;