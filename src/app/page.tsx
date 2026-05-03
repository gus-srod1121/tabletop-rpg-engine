import { createClient } from './utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function Home() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: todos } = await supabase.from('todos').select();

  return (
    <main>
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>{todo.name}</li>
          ))}
        </ul>
        <h1>App</h1>
        <Link href="/list">
            <button>Go to your character list</button>
        </Link>
    </main>
  );
}