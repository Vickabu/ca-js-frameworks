# ca-js-frameworks

# ca-js-frameworks

#Lazy Sales - eCommerce Store

[Live Demo](https://lazysales.netlify.app/)

## Overview

Lazy Sales is an eCommerce store built as part of a school assignment to apply React knowledge. The project uses the Noroff API to fetch product data and features multiple pages including a homepage, individual product page, cart page, checkout success page, and a contact page.

## Assignment Brief

**API:**  
[https://v2.api.noroff.dev/online-shop](https://v2.api.noroff.dev/online-shop)

**Task:**

- **Homepage:**
  - Displays a list of all products.
  - Includes a look-ahead search bar that filters products as the user types.
  - Clicking on a product navigates the user to the individual product page.
- **Individual Product Page:**
  - Displays detailed data for a single product including title, description, image, and reviews (if any).
  - Uses the `discountedPrice` property to show the price and calculates the discount if applicable.
  - Contains an "Add to cart" button that adds the product to the cart.
- **Cart Page:**
  - Displays all products added to the cart along with a total.
  - Includes a Checkout button.
  - The Cart icon in the header shows the current number of items in the cart.
- **Checkout Success Page:**
  - Displays a confirmation message that the order was successful.
  - Provides a link to return to the store.
  - Clears the cart upon visiting this page.
- **Contact Page:**
  - Contains a contact form with the following required fields:
    - Full name (minimum 3 characters)
    - Subject (minimum 3 characters)
    - Email (must be a valid email address)
    - Body (minimum 3 characters)
  - The form validates the input and logs the data once validation passes.

Additional requirements include:

- Using a `<Layout>` component that wraps all pages with a header and footer.
- Implementing responsive design, including a hamburger menu for mobile navigation.
- Using React Router for page navigation.
- Code must be clean, well-formatted, and deployable on Netlify.

## Project Structure

├── public
│ └── …
├── src
│ ├── assets
│ │ └── lazySalesLogo.png
│ ├── components
├── Button.jsx
│ │ ├── CartContext.jsx
│ │ ├── CartOverlay.jsx
│ │ ├── ContactForm.jsx
│ │ ├── CustomerForm.jsx
│ │ ├── ErrorMessage.jsx
│ │ ├── Footer.jsx
│ │ └── Header.jsx
│ │ ├── Layout.jsx
│ │ ├── Loader.jsx
│ │ ├── PaymentForm.jsx
│ │ ├── ProductDetails.jsx
│ │ ├── ProductList.jsx
│ │ ├── ProductListCard.jsx
│ │ ├── Ratings.jsx
│ │ ├── Reviews.jsx
│ │ ├── SearchBar.jsx
│ ├── pages
│ │ ├── HomePage.jsx
│ │ ├── ProductPage.jsx
│ │ ├── CartPage.jsx
│ │ ├── CheckoutPage.jsx
│ │ ├── CheckoutSuccessPage.jsx
│ │ └── ContactPage.jsx
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
└── package.json

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone <YOUR_REPOSITORY_URL>

   ```

2. **Navigate to the project folder:**
   cd lazy-sales

3. **Install dependencies:**
   npm install

# or

yarn install

**Running Locally**

Start the project in development mode:
npm run dev

# or

yarn dev

Then open http://localhost:3000 in your browser.

**Deployment**

The project is deployed on Netlify and can be viewed here:
https://lazysales.netlify.app/

Features
• Responsive Design:
Uses a responsive layout with a hamburger menu for mobile devices.
• Dynamic Routing:
Uses React Router for navigation between pages, including dynamic product pages.
• Search Functionality:
The homepage includes an auto-complete search bar that filters products by title.
• Shopping Cart:
Users can add products to the cart, view cart items via an overlay, remove items, and proceed to checkout.
• Checkout Flow:
Upon checkout, the user is directed to a success page and the cart is cleared.
• Contact Form:
A contact page with form validation for full name, subject, email, and message.

Technologies Used
• React with Vite
• React Router for navigation
• Tailwind CSS for styling and responsive design
• LocalStorage for persisting cart data

Contributors
• Andreas Solsem Joakimsen
• Victoria Bure
• Anne Cathrine Hauge
• Andreas Abrahamsen

Future Improvements
• Integration with additional API endpoints for order processing.
• Enhanced form validation and error handling.
• Further UI/UX improvements and performance optimizations.

---

This README.md provides a detailed overview of your project, instructions for setup, features, and contributor credits. You can update the repository URL, tweak the descriptions, or add further sections as needed.
