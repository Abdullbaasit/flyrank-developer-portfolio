
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type Fields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FieldName = keyof Fields;
type Errors = Partial<Record<FieldName, string>>;

const initialFields: Fields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(fields: Fields): Errors {
  const errors: Errors = {};

  if (!fields.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!fields.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!fields.subject.trim()) {
    errors.subject = "Please enter a subject.";
  }

  if (!fields.message.trim()) {
    errors.message = "Please enter your message.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Your message must contain at least 10 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const field = event.target.name as FieldName;
    const value = event.target.value;

    setFields((previous) => ({ ...previous, [field]: value }));
    setSubmitted(false);

    if (errors[field]) {
      setErrors((previous) => {
        const updated = { ...previous };
        delete updated[field];
        return updated;
      });
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(fields);
    setErrors(nextErrors);
    setSubmitted(false);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = Object.keys(nextErrors)[0];
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    // Demo only: no email service is connected.
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition focus-visible:border-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-400";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full max-w-2xl"
    >
      <h2
        id="contact-heading"
        className="text-3xl font-bold tracking-tight text-zinc-900"
      >
        Get in touch
      </h2>

      <p className="mt-3 text-zinc-600">
        Interested in collaborating or discussing an opportunity?
        Fill out the form below.
      </p>

      <p className="mt-2 text-sm text-amber-800">
        Demo form: submissions are validated locally but are not emailed.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
        {(
          [
            { name: "name", label: "Full name", type: "text" },
            { name: "email", label: "Email address", type: "email" },
            { name: "subject", label: "Subject", type: "text" },
          ] as const
        ).map(({ name, label, type }) => (
          <div key={name}>
            <label
              htmlFor={name}
              className="mb-2 block text-sm font-semibold text-zinc-800"
            >
              {label}
            </label>

            <input
              id={name}
              name={name}
              type={type}
              value={fields[name]}
              onChange={handleChange}
              aria-invalid={Boolean(errors[name])}
              aria-describedby={errors[name] ? `${name}-error` : undefined}
              autoComplete={
                name === "name"
                  ? "name"
                  : name === "email"
                    ? "email"
                    : "off"
              }
              className={inputClass}
            />

            {errors[name] && (
              <p
                id={`${name}-error`}
                className="mt-1 text-sm text-red-700"
              >
                {errors[name]}
              </p>
            )}
          </div>
        ))}

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-zinc-800"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            value={fields.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "message-error" : undefined
            }
            className={inputClass}
          />

          {errors.message && (
            <p
              id="message-error"
              className="mt-1 text-sm text-red-700"
            >
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-zinc-900 px-6 py-3 font-semibold text-white transition hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 sm:w-auto"
        >
          Validate message
        </button>

        {submitted && (
          <p role="status" className="text-sm font-medium text-green-800">
            Your message passed validation. This is a demo;
            no message has been sent.
          </p>
        )}
      </form>
    </section>
  );
}
