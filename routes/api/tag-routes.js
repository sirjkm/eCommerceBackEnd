const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
    try {
    const findTags = await Tag.findAll({
      include: [{ model: Product}, { model: ProductTag}],
    });
    res.status(200).json(findTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
    try {
      const findTag = await Tag.findByPk(req.params.id, {
        include: [{ model: Product }, { model: ProductTag }],
      });
      if (!findTag) {
        res.status(404).json({ message: "No tag found with that id" });
        return;
      }
      res.status(200).json(findTag);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
