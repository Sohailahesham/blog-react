export function validate(schema, form, setErrors) {
  const result = schema.safeParse(form);
  if (!result.success) {
    const fieldErrors = {};
    result.error.issues.forEach((issue) => {
      const key = String(issue.path[0]);
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    });
    setErrors(fieldErrors);
    return false;
  }
  setErrors({});
  return true;
}
