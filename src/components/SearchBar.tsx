"use client"
import React, { useState } from "react"
import styles from "./SearchBar.module.css"

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("")
	const [suggestions, setSuggestions] = useState([])

	const foodList = [
		"Water",
		"Flour",
		"Sugar",
		"Salt",
		"Butter",
		"Milk",
		"Eggs",
		"Baking Powder",
		"Baking Soda",
		"Oil",
		"Vinegar",
		"Tomato Sauce",
		"Cheese",
		"Onions",
		"Garlic",
		"Potatoes",
		"Carrots",
		"Celery",
		"Broccoli",
		"Chicken",
	]

	const handleChange = e => {
		setSearchTerm(e.target.value)
		const matchingSuggestions = foodList.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
		setSuggestions(matchingSuggestions)
	}

	const handleSuggestionClick = suggestion => {
		setSearchTerm(suggestion)
		setSuggestions([])
	}

	return (
		<div className={styles.searchBar}>
			<input type="text" value={searchTerm} onChange={handleChange} placeholder="Type in a food to see its nutrition" />
			<div className={styles.suggestions}>
				{suggestions.map((suggestion, index) => (
					<div key={index} className={styles.suggestion} onClick={() => handleSuggestionClick(suggestion)}>
						{suggestion}
					</div>
				))}
			</div>
		</div>
	)
}

export default SearchBar
