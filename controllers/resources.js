const Resource = require("../models/Resource");
const Comment = require("../models/Comment");

module.exports = {
  getDashboard: async (req, res) => {
    try {
      const resources = await Resource.find({ user: req.user.id });
      res.render("dashboard.ejs", { resources: resources, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const resources = await Resource.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { resources: resources, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getResource: async (req, res) => {
    try {
      const resource = await Resource.findById(req.params.id);
      const comments = await Comment.find({ post: req.params.id }).sort({ createdAt: "desc" }).lean();
      res.render("resource.ejs", { resource: resource, user: req.user, comments: comments });
    } catch (err) {
      console.log(err);
    }
  },
  createResource: async (req, res) => {
    try {

      await Resource.create({
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        subject: req.body.subject,
        likes: 0,
        user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/dashboard");
    } catch (err) {
      console.log(err);
    }
  },
  likeResource: async (req, res) => {
    try {
      await Resource.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/resource/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteResource: async (req, res) => {
    try {
      // Delete post from db
      await Resource.remove({ _id: req.params.id });
      console.log("Deleted Resource");
      res.redirect("/dashboard");
    } catch (err) {
      res.redirect("/dashboard");
    }
  },
};
