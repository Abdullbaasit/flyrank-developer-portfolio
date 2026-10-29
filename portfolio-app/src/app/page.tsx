
import ContactForm from "../../components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Developer Portfolio
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Building useful digital experiences.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            I am a full-stack developer working with React,
            Next.js, TypeScript, and Node.js.
            I enjoy building accessible interfaces and
            practical web applications.
          </p>
        </header>

        <ContactForm />
      </div>
    </main>
  );
}
