# TACT Consulting Website

**Civil Engineering Consulting Excellence.** A modern, production-ready web presence built to streamline client inquiries, replace legacy systems, and showcase professional services for a family-owned engineering consultancy.

---

## The Stack

| Layer             | Technology                                                                                               |
| :---------------- | :------------------------------------------------------------------------------------------------------- |
| **Frontend**      | [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) + [React Router 7](https://reactrouter.com/) |
| **Styling**       | [Tailwind CSS](https://tailwindcss.com/) + [Lucide Icons](https://lucide.dev/)                           |
| **Backend API**   | [Netlify Functions](https://www.netlify.com/products/functions/) (Serverless)                            |
| **Email Routing** | [Resend API](https://resend.com/)                                                                        |
| **Hosting & DNS** | [Netlify](https://www.netlify.com/) + [VentraIP](https://ventraip.com.au/)                               |
| **Notifications** | [React Hot Toast](https://react-hot-toast.com/)                                                          |

---

## Features

- **Serverless Contact Pipeline:** Securely processes client inquiries using Netlify Functions without exposing API credentials to the client.
- **Automated Confirmations:** Utilizes asynchronous processing (`Promise.all`) to instantly notify admins of new leads while simultaneously delivering a branded confirmation receipt to the client.
- **Authenticated Email Delivery:** Fully configured production DNS records (SPF, DKIM, DMARC) to authenticate subdomains, ensuring high deliverability and bypassing automated spam filters.
- **Dynamic Client-Side Routing:** Built on modern React Router architecture, managing Server-Side Rendering (SSR) and client-side hydration.
- **Polished UI/UX:** Fully mobile-responsive layout featuring non-blocking toast notifications for highly accessible user feedback.

---

## Known issues

- Strict rate-limiting and invisible honeypot fields are pending implementation to prevent automated bot spam on the contact form.
- The first email sent after a long period of inactivity may experience a slight delay (~1-2 seconds) due to Netlify's serverless function "cold starts."
