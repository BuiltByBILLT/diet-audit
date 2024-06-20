"use client"
import { useState } from "react"
import styles from "./SearchBar.module.css"

type SearchBarProps = {
	ingredients: string[]
}

const SearchBar: React.FC<SearchBarProps> = ({ ingredients }) => {
	const [searchTerm, setSearchTerm] = useState<string>("")
	const [suggestions, setSuggestions] = useState<string[]>([])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
		const matchingSuggestions = ingredients.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
		setSuggestions(matchingSuggestions)
	}

	const handleSuggestionClick = (suggestion: string) => {
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
