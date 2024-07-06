import styles from "./page.module.css"
import SearchBar from "@/components/SearchBar"
import data from "../data/info.json"

// Updated IngredientData type to match the new data structure
type IngredientData = {
	ingredients: { name: string; info: Record<string, string> }[]
}

export default function Home() {
	const ingredientsData: IngredientData = data

	// Extracting only an array of ingredient names
	const ingredientNames = ingredientsData.ingredients.map(({ name }) => name)

	return (
		<main className={styles.main}>
			<Heading />
			<SearchBar ingredients={ingredientNames} />
		</main>
	)
}

const Heading = () => {
	return (
		<div className={styles.heading}>
			<h1>Find out what you're missing</h1>
			<h2>Type in a food to see its nutrition</h2>
		</div>
	)
}
