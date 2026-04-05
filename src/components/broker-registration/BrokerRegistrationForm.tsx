"use client";

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
}: {
  slug: BrokerRegistrationSlug;
  field: BrokerFormField;
}) {
  const id = fieldId(slug, field.name);
  const labelSuffix = field.required ? " *" : "";

  if (field.kind === "checkbox") {
    return (
      <div className="po-broker-reg-form-cell po-broker-reg-form-cell--full po-broker-reg-form-checkbox-wrap" key={field.name}>
        <label className="po-broker-reg-form-checkbox-label">
          <input type="checkbox" id={id} name={field.name} required={field.required} className="po-broker-reg-form-checkbox" />
          <span>
            {field.label}
            {labelSuffix}
          </span>
        </label>
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
        />
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
        />
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
      />
    </div>
  );
}

export default function BrokerRegistrationForm({ slug }: BrokerRegistrationFormProps) {
  const def = BROKER_REGISTRATION_FORMS[slug];

  return (
    <form
      className="po-broker-reg-form"
      encType="multipart/form-data"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        // Wire to your API or email service when ready.
        const fd = new FormData(e.currentTarget);
        console.info("[broker-registration]", slug, Object.fromEntries(fd.entries()));
        window.alert("Thank you. Your registration details have been captured — our team will contact you shortly.");
      }}
    >
      {def.blocks.map((block) => (
        <fieldset key={block.title} className="po-broker-reg-form-fieldset po-broker-reg-form-panel">
          <legend className="po-broker-reg-form-legend">{block.title}</legend>
          <div className="po-broker-reg-form-panel-body">
            <div className="po-broker-reg-form-grid">
              {block.fields.map((field) => (
                <BrokerField key={field.name} slug={slug} field={field} />
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
