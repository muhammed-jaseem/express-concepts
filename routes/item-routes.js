const { asyncHandler } = require("../middleware/errorHandler");

const router = require("express").Router();

const items = [
  {
    id: "1",
    name: "Item 1",
  },
  {
    id: "2",
    name: "Item 2",
  },
  {
    id: "3",
    name: "Item 3",
  },
  {
    id: "4",
    name: "Item 4",
  },
];

router.get(
  "/items",
  asyncHandler(async (req, res) => {
    console.log("🔥 ITEMS ROUTE HIT");

    res.status(200).json(items);
  }),
);

module.exports = router;
