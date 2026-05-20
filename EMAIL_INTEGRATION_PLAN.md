## Email Integration Plan

This document outlines how to wire the contact form on GitHub Pages to send submissions to `kyree.hawkins97@gmail.com` using Formspree's free tier. No backend code is required—just simple HTML and JavaScript changes.

### 1. Create Formspree Endpoint
1. Sign up at https://formspree.io/ and create a new form.
2. Set the recipient email to `kyree.hawkins97@gmail.com`.
3. Copy your form's **endpoint URL**, e.g. `https://formspree.io/f/yourFormID`.

### 2. Update the HTML Form (`index.html`)
Replace your existing contact `<form>` tag with:
```html
<form
  id="contact-form"
  action="https://formspree.io/f/yourFormID"
  method="POST"
  novalidate
>
  <input type="hidden" name="_subject" value="New inquiry from website">
  <!-- existing inputs: name, email, phone, message -->
</form>
```

### 3. Update the JavaScript Submit Handler (`js/main.js`)
Replace the contact-form submission code with:
```js
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  // run existing validation...
  if (!valid) return;
  try {
    const res = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    });
    if (res.ok) {
      document.querySelector('.contact-form__success').hidden = false;
      form.reset();
    } else {
      alert('Sorry—there was an error sending your message.');
    }
  } catch {
    alert('Network error—please try again later.');
  }
});
```

### 4. Testing
- Submit test inquiries locally and on GitHub Pages.
- Confirm receipt at `kyree.hawkins97@gmail.com`.
- Verify subject: `New inquiry from website` and body includes all form fields.

### 5. Deploy
- Push changes to GitHub; GitHub Pages will publish the updated workflow.
- In Formspree dashboard, whitelist your GitHub Pages domain if needed.
