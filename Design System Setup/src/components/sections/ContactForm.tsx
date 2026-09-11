import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .nonempty({ message: "Email is required" })
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  subject: z.string().trim().nonempty({ message: "Please choose a subject" }),
  message: z
    .string()
    .trim()
    .nonempty({ message: "Message is required" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;
type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

const SUBJECTS = [
  "General enquiry",
  "Service enquiry",
  "Partnership",
  "Careers",
  "Other",
];

// TODO: replace with real email delivery (e.g. a server function).
async function submitContactForm(_values: ContactFormValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1200));
}

const inputClasses = (hasError: boolean) =>
  cn(
    "w-full rounded-lg border bg-surface px-4 py-3 text-base text-neutral-dark shadow-sm transition-colors",
    "placeholder:text-neutral-mid",
    "focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary",
    hasError ? "border-error" : "border-neutral-light"
  );

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const update =
    (field: keyof ContactFormValues) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setStatus("submitting");
    try {
      await submitContactForm(result.data);
      setStatus("success");
    } catch {
      setStatus("idle");
      setErrors({ message: "Something went wrong — please try again." });
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center gap-4 rounded-lg bg-surface p-8 text-center shadow-sm"
      >
        <CheckCircle2 className="size-12 text-success" />
        <h2 className="text-2xl font-semibold text-neutral-dark">
          Thank you, {values.name.split(" ")[0]}!
        </h2>
        <p className="text-base text-neutral-mid">
          Your message has been sent. We'll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-lg bg-surface p-8 shadow-sm"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-name"
          className="text-sm font-medium text-neutral-dark"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={update("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={inputClasses(!!errors.name)}
          placeholder="Your full name"
        />
        {errors.name && (
          <p id="contact-name-error" className="text-sm text-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-email"
          className="text-sm font-medium text-neutral-dark"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={update("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={inputClasses(!!errors.email)}
          placeholder="you@company.com"
        />
        {errors.email && (
          <p id="contact-email-error" className="text-sm text-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-subject"
          className="text-sm font-medium text-neutral-dark"
        >
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={values.subject}
          onChange={update("subject")}
          aria-invalid={!!errors.subject}
          aria-describedby={
            errors.subject ? "contact-subject-error" : undefined
          }
          className={cn(
            inputClasses(!!errors.subject),
            !values.subject && "text-neutral-mid"
          )}
        >
          <option value="" disabled>
            Choose a subject…
          </option>
          {SUBJECTS.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p id="contact-subject-error" className="text-sm text-error">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-neutral-dark"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={update("message")}
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          className={cn(inputClasses(!!errors.message), "resize-y")}
          placeholder="How can we help?"
        />
        {errors.message && (
          <p id="contact-message-error" className="text-sm text-error">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "submitting"}
        className="self-start"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
