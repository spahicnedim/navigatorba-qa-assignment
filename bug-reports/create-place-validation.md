# 🐞 Missing Field Highlights During Place Creation

## Summary
Error message appears when required fields are missing, but it does not indicate which fields are incomplete.

## Steps to Reproduce
1. Go to Create New Place form.
2. Leave one or more fields empty.
3. Submit the form.

## Expected Result
Highlight missing fields with error messages.

## Actual Result
Generic message appears: "Form contains invalid data. Please correct and try again."

## Severity
🟡 Medium – Form UX

## Suggestion
Add visual field validation and messages.

## Environment
- Arc V1.50.1
- macOS 15.4.1