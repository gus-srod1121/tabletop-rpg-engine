import Link from "next/link"

export default function Character() {
    return <nav>
        <h1>Character</h1>
        <Link href="/list">
        <button>
            Back to List
        </button>    
        </Link>
    </nav>
}