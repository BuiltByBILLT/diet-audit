import styles from "./page.module.css"
import SearchBar from "@/components/SearchBar"
import data from "../data/ingredients.json"

// Define the type for the ingredients data
type IngredientData = {
	ingredients: string[]
}

export default function Home() {
	// Explicitly type the data variable as IngredientData
	const ingredientsData: IngredientData = data
	return (
		<main className={styles.main}>
			<Heading />
			<SearchBar ingredients={ingredientsData.ingredients} />
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
