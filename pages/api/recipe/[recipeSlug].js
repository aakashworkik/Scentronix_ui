import { storageData } from 'data/recipe';

export default function handler(req, res) {
    const { recipeSlug } = req.query
    if(storageData[recipeSlug]) {
        res.status(200).json({ data: storageData[recipeSlug] })
    } else {
        res.status(404).json({data: "Data Unavailable"});
    }
  }