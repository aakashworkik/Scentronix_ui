import { useRouter } from 'next/router'
import RecipeDtails from 'components/recipe';



const Recipe = (props) => {
  const { data } = props
  const router = useRouter()
  const { recipeSlug } = router.query
  return (
    <div>
      <RecipeDtails recipeData={data} />
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps(context) {
  const { req, params } = context
  // Fetch data from API
  const host = req.headers.host
  const res = await fetch(`http://${host}/api/recipe/${params.recipeSlug}`)
  const responseData = await res.json()
  // Pass data to the page via props
  return { props: { data: responseData.data } }
}

// TODO: We can also static render pages for faster load

export default Recipe
