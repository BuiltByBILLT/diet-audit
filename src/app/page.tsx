import Image from "next/image"
import styles from "./page.module.css"
import SearchBar from "@/components/SearchBar"

export default function Home() {
	return (
		<main className={styles.main}>
			<Heading />
			<SearchBar />
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
