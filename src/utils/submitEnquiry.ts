export const submitEnquiry = async (form: HTMLFormElement, formType: 'contact' | 'quote') => {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT?.trim();
  if (!endpoint) {
    throw new Error('Enquiry delivery is not configured. Please contact HBC directly by email or phone while the form is being connected.');
  }

  const data = new FormData(form);
  data.set('form_type', formType);

  let response: Response;
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      body: data
    });
  } catch {
    throw new Error('The enquiry could not be sent. Please check your connection and try again, or contact HBC directly by email or phone.');
  }

  if (!response.ok) {
    throw new Error('The enquiry service could not accept your submission. Please try again later or contact HBC directly by email or phone.');
  }
};
