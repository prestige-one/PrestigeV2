"use client";

import { useState } from "react";
import type { BrokerRegistrationSlug } from "@/data/broker-registration";
import {
  BROKER_REGISTRATION_FORMS,
  type BrokerFormField,
} from "@/data/broker-registration-forms";

type BrokerRegistrationFormProps = {
  slug: BrokerRegistrationSlug;
};

function fieldId(slug: string, name: string) {
  return `po-broker-form-${slug}-${name}`;
}

function BrokerField({
  slug,
  field,
  error,
}: {
  slug: BrokerRegistrationSlug;
  field: BrokerFormField;
  error?: string;
}) {
  const id = fieldId(slug, field.name);
  const labelSuffix = field.required ? " *" : "";
  const describedBy = error ? `${id}-error` : undefined;
  const invalid = Boolean(error);

  if (field.kind === "checkbox") {
    return (
      <div className="po-broker-reg-form-cell po-broker-reg-form-cell--full po-broker-reg-form-checkbox-wrap" key={field.name}>
        <label className="po-broker-reg-form-checkbox-label">
          <input
            type="checkbox"
            id={id}
            name={field.name}
            required={field.required}
            className="po-broker-reg-form-checkbox"
            aria-invalid={invalid}
            aria-describedby={describedBy}
          />
          <span>
            {field.label}
            {labelSuffix}
          </span>
        </label>
        {error ? (
          <p id={`${id}-error`} className="po-broker-reg-form-error" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  }

  if (field.kind === "textarea") {
    return (
      <div className="po-broker-reg-form-cell po-broker-reg-form-cell--full" key={field.name}>
        <label htmlFor={id}>
          {field.label}
          {labelSuffix}
        </label>
        <textarea
          id={id}
          name={field.name}
          required={field.required}
          rows={field.rows ?? 4}
          placeholder={field.placeholder}
          className="po-broker-reg-form-control"
          aria-invalid={invalid}
          aria-describedby={describedBy}
        />
        {error ? (
          <p id={`${id}-error`} className="po-broker-reg-form-error" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  }

  if (field.kind === "select") {
    const opts = field.options.filter((o) => o.value !== "");
    const placeholder = field.placeholderOption ?? "Select…";
    return (
      <div className="po-broker-reg-form-cell" key={field.name}>
        <label htmlFor={id}>
          {field.label}
          {labelSuffix}
        </label>
        <select
          id={id}
          name={field.name}
          required={field.required}
          className="po-broker-reg-form-control"
          defaultValue=""
          aria-invalid={invalid}
          aria-describedby={describedBy}
        >
          {field.required ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : (
            <option value="">{placeholder}</option>
          )}
          {opts.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error ? (
          <p id={`${id}-error`} className="po-broker-reg-form-error" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  }

  if (field.kind === "file") {
    return (
      <div className="po-broker-reg-form-cell po-broker-reg-form-cell--full" key={field.name}>
        <label htmlFor={id}>
          {field.label}
          {labelSuffix}
        </label>
        <input
          id={id}
          name={field.name}
          type="file"
          required={field.required}
          accept={field.accept}
          className="po-broker-reg-form-file"
          aria-invalid={invalid}
          aria-describedby={describedBy}
        />
        {error ? (
          <p id={`${id}-error`} className="po-broker-reg-form-error" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  }

  const inputType = field.kind;
  const cellClass =
    "wide" in field && field.wide ? "po-broker-reg-form-cell po-broker-reg-form-cell--full" : "po-broker-reg-form-cell";

  return (
    <div className={cellClass} key={field.name}>
      <label htmlFor={id}>
        {field.label}
        {labelSuffix}
      </label>
      <input
        id={id}
        name={field.name}
        type={inputType}
        required={field.required}
        placeholder={field.placeholder}
        className="po-broker-reg-form-control"
        aria-invalid={invalid}
        aria-describedby={describedBy}
      />
      {error ? (
        <p id={`${id}-error`} className="po-broker-reg-form-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function BrokerRegistrationForm({ slug }: BrokerRegistrationFormProps) {
  const def = BROKER_REGISTRATION_FORMS[slug];
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string>("");

  const validateForm = (form: HTMLFormElement) => {
    const errors: Record<string, string> = {};
    const controls = Array.from(form.elements).filter(
      (el): el is HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement =>
        el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement,
    );

    controls.forEach((control) => {
      const fieldName = control.name;
      if (!fieldName) return;
      const validity = control.validity;
      if (validity.valid) return;

      if (control instanceof HTMLInputElement && control.type === "checkbox" && validity.valueMissing) {
        errors[fieldName] = "This confirmation is required.";
        return;
      }
      if (control instanceof HTMLInputElement && control.type === "file" && validity.valueMissing) {
        errors[fieldName] = "Please upload the required file.";
        return;
      }
      if (validity.valueMissing) {
        errors[fieldName] = "This field is required.";
        return;
      }
      if (validity.typeMismatch) {
        errors[fieldName] = "Please enter a valid value.";
        return;
      }
      if (validity.patternMismatch) {
        errors[fieldName] = "Please match the requested format.";
        return;
      }
      if (validity.badInput) {
        errors[fieldName] = "Please enter a valid value.";
        return;
      }

      errors[fieldName] = control.validationMessage || "Please review this field.";
    });

    return errors;
  };

  return (
    <form
      className="po-broker-reg-form"
      encType="multipart/form-data"
      noValidate
      onChange={(e) => {
        const target = e.target;
        if (
          target instanceof HTMLInputElement ||
          target instanceof HTMLSelectElement ||
          target instanceof HTMLTextAreaElement
        ) {
          if (!target.name || !fieldErrors[target.name]) return;
          setFieldErrors((prev) => {
            const next = { ...prev };
            delete next[target.name];
            return next;
          });
        }
      }}
      onSubmit={(e) => {
        const form = e.currentTarget;
        const errors = validateForm(form);
        const firstFieldWithError = Object.keys(errors)[0];

        if (firstFieldWithError) {
          e.preventDefault();
          setFieldErrors(errors);
          setSubmitError("Please complete all required fields before submitting the form.");
          const firstInvalid = form.elements.namedItem(firstFieldWithError);
          if (
            firstInvalid instanceof HTMLInputElement ||
            firstInvalid instanceof HTMLSelectElement ||
            firstInvalid instanceof HTMLTextAreaElement
          ) {
            firstInvalid.focus();
          }
          return;
        }

        // Valid form: let browser submit to the configured form action.
        setFieldErrors({});
        setSubmitError("");
      }}
    >
      {submitError ? (
        <p className="po-broker-reg-form-submit-error" role="alert">
          {submitError}
        </p>
      ) : null}
      {def.blocks.map((block) => (
        <fieldset key={block.title} className="po-broker-reg-form-fieldset po-broker-reg-form-panel">
          <legend className="po-broker-reg-form-legend">{block.title}</legend>
          <div className="po-broker-reg-form-panel-body">
            <div className="po-broker-reg-form-grid">
              {block.fields.map((field) => (
                <BrokerField key={field.name} slug={slug} field={field} error={fieldErrors[field.name]} />
              ))}
            </div>
          </div>
        </fieldset>
      ))}

      <div className="po-broker-reg-form-actions po-broker-reg-detail-panel po-broker-reg-form-actions-panel">
        <button type="submit" className="btn po-broker-reg-form-submit">
          <span>{def.submitLabel}</span>
          <span>{def.submitLabel}</span>
        </button>
      </div>
    </form>
  );
}
