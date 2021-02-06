class IndexController {
    homePage(req, res) {
        res.render("index");
    }
}
module.exports = new IndexController();