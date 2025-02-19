# Email System

This document explains the email system structure in this project.

## File Structure

```
├── email/                              # Email templates
│   └── contact-form-email.tsx         # Contact form email template
│
├── app/api/sendEmail/                  # API endpoint
│   └── route.ts                       # Email sending logic
│
└── lib/validations/                    # Validation schemas
    └── contact.ts                     # Contact form validation
```

## How it Works

1. **Frontend**: Contact form in `components/common/contact-form.tsx`

   - Handles form submission
   - Validates input using Zod schema
   - Sends data to API endpoint

2. **Validation**: Schema in `lib/validations/contact.ts`

   - Defines required fields
   - Sets validation rules
   - Used both client and server-side

3. **API Endpoint**: `app/api/sendEmail/route.ts`

   - Receives form data
   - Validates using the same schema
   - Uses Resend to send email

4. **Email Template**: `email/contact-form-email.tsx`
   - React Email template
   - Defines email layout and styling
   - Used by the API to generate email

## Environment Variables

Required in `.env.local`:

- `RESEND_API_KEY`: API key for Resend email service
