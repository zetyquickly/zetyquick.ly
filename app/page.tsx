import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Emil Bogomolov
      </h1>
      <p className="mb-8 text-neutral-800 dark:text-neutral-200">
        Internet and world explorer. Passionate about beautiful graphics, mathematical models of reality, and teaching machines to learn.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
