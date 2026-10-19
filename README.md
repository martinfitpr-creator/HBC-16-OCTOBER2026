<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/cd14de70-37ae-4cf6-a63e-c03ce72b0dbd

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Enquiry Forms

Both the contact and quote forms submit `multipart/form-data` to the public `VITE_FORM_ENDPOINT` URL. Copy `.env.example` to `.env.local`, set that variable to the endpoint URL from your form provider, and rebuild/redeploy the site. The endpoint must accept browser requests (including CORS when hosted on a different domain), accept multipart submissions, store or forward uploaded files, and return a successful 2xx response.

Submissions include `form_type` (`contact` or `quote`), the named form fields, and zero or more `attachments` files. Visitors can attach up to five PDF, Word, Excel, or image files, each no larger than 10 MB. Keep endpoint credentials and provider secrets on the server; `VITE_` values are public in the built website. Without an endpoint configured, the forms show an explicit error and do not report a false success.
