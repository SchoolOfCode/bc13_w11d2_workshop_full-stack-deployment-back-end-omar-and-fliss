import express from "express";
import { getShoppingList, postListItem, patchListItem } from "../models/shoppingList.js";

const router = express.Router();

/* GET shopping list. */
router.get("/", async (req, res) => {
  const data = await getShoppingList();
  res.json({ success: true, payload: data });
});

router.post("/", async (req, res) => {
  const { listItem } = req.body;
  const result = await postListItem(listItem);
  res.status(201).json({ success: true, payload: result });
});

router.patch("/:id", async (req, res) => {
  // const { listItem } = req.body.;
  // const listItemId = req.params.id;
  const result = await patchListItem(req.params.id, req.body);
  res.status(200).json({success: true, payload: result });
});
// linksRouter.patch("/:id", async function (req, res){
//   const updatedLikes = await linksModel.countLikes(req.params.id,req.body);
//   console.log(updatedLikes)
//     res.status(200).json({
//     success: true,
//     payload: updatedLikes,
//   })
// });

export default router;
