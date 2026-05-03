import Link from "next/link";

export default function List() {
    return <main>
        <h1>Your Characters</h1>
        <ul>
            <li>
                <Link href="/character">
                    <div>
                        <div><img src="none"></img></div>
                        <div><h3>[character name]</h3></div>
                    </div>
                </Link>
            </li>
        </ul>
    </main>
}