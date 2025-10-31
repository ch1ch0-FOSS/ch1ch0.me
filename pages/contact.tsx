"use client";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID"); // Replace with your Formspree form ID
  return (
    <main className="mx-auto p-10 max-w-md">
      <h1 className="font-bold text-3xl mb-4">Contact</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" className="w-full border p-2 rounded" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" className="w-full border p-2 rounded" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting} className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
      {state.succeeded && <p className="text-green-600 mt-5">Thanks for your submission!</p>}
    </main>
  );
}

