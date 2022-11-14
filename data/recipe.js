export const storageData = {
  'whole-grain-banana-bread': {
    title: 'Whole-Grain Banana Bread',
    description:
      "This one-bowl banana bread — our 2018 Recipe of the Year — uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious — it's versatile.",
    image: 'bread',
    // Note: We can break the data below from simple strings to config based values (10 mins = (Int:10) + (Time Type: Mins/Hours)).
    prepTime: '10 mins',
    bakeTime: '1 hr to 1 hr 15 mins',
    totalTime: '1hr 10 mins',
    yield: '1loaf, 12 generous servings',
    category: 'bread',
    subCategory: 'quick break',
    path: [
        {
            label: "recipe",
            slug: "/recipe"
        },
        {
            label: "bread",
            slug: "/bread"
        },
        {
            label: "quick break",
            slug: "/quick bread"
        }
    ]
  },
  'cheesy-vegetable-lasagna-in-a-skillet': {
    title: 'Cheesy Vegetable Lasagna In A Skillet',
    description: (
      "Lasagna is a mouth-watering Italian dish loved and appreciated globally. It is made with stacked layers of pasta, sauces, any type of meat, vegetables and cheese. The cooked pasta is assembled with other ingredients and baked. This scrumptious Lasagna casserole is then cut into single-serving square portions and enjoyed by all."
    ),
    image: 'lazania',
    prepTime: '15 mins',
    bakeTime: '2 hr to 2 hr 15 mins',
    totalTime: '2hr 40 mins',
    yield: '4loaf, 15 generous servings',
    category: 'bread',
    subCategory: 'quick break',
    path: [
        {
            label: "recipe",
            slug: "/recipe"
        },
        {
            label: "bread",
            slug: "/bread"
        },
        {
            label: "quick break",
            slug: "/quick bread"
        }
    ]
  },
}
