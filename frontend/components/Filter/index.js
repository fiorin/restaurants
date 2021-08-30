import { useRouter } from 'next/router'

const Filter = () => {

    const router = useRouter()

    const search = async event => {
        event.preventDefault()
        const name = event.target.restaurantName.value
        router.push(`http://localhost:3001/?name=${name}`)
    }

    return (
        <form onSubmit={search}>
            <input id="name" name="restaurantName" type="text" autoComplete="name" required placeholder="Name"/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Filter;