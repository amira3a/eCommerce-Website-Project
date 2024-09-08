# E-Commerce React Application

This is a full-featured e-commerce web application built using React, React Router, and Context API. The application includes product listing, cart management, and various UI components designed to enhance the shopping experience.

## Project Structure

The project is organized as follows:

├── public │ ├── index.html ├── src │ ├── assets │ │ └── Images # Contains static images for the website (logo, cart, etc.) │ ├── components │ │ ├── BannerText # Displays banner text with a breadcrumb │ │ ├── CartItems # Displays items in the shopping cart │ │ ├── CartSidebar # A collapsible sidebar for shopping cart summary │ │ ├── Footer # Footer component with links, newsletter, etc. │ │ ├── Features # Showcases key product features │ │ ├── Item # Represents individual product items in a list │ │ ├── Navbar # Navigation bar with links and cart icon │ │ ├── ProductDisplay # Product detail page, shows product info, add to cart │ ├── Context │ │ ├── ShopContext.js # Manages global state for products, cart, and totals │ │ ├── VisibilityContext.js # Handles visibility states (like showing/hiding the cart sidebar) │ ├── pages │ │ ├── Layout # General layout for wrapping pages │ │ ├── Home # Main landing page with category links │ │ ├── Shop # Product listing page with category filter │ │ ├── Cart # Shopping cart page │ │ ├── Contact # Contact page with a form to submit inquiries │ │ ├── Product # Product detail page │ ├── App.css # Global styles for the app │ ├── App.js # Main React app entry point │ ├── index.js # Entry point for React DOM rendering │ ├── style.module.css # Modular CSS styles for components └── package.json

## Key Features

### 1. Navbar
- **Path**: `src/components/Navbar/Navbar.js`
- **Description**: Contains navigation links (Home, Shop, Contact) and a shopping cart icon with item count. The cart icon opens a sidebar showing the cart summary.

### 2. BannerText
- **Path**: `src/components/BannerText/BannerText.js`
- **Description**: Displays a title banner with breadcrumb navigation. This is useful for showing the user’s current location within the application (e.g., Home > Shop).

### 3. CartItems
- **Path**: `src/components/CartItems/CartItems.js`
- **Description**: Lists all items currently in the shopping cart, allowing users to adjust quantities, view total costs, and remove items from the cart.

### 4. CartSidebar
- **Path**: `src/components/CartSidebar/CartSidebar.js`
- **Description**: A collapsible sidebar that displays the shopping cart summary, including the total price and quantity of items. Can navigate to the main cart page.

### 5. Features
- **Path**: `src/components/Features/Features.js`
- **Description**: Displays product features such as high quality, warranty protection, free shipping, and customer support.

### 6. Footer
- **Path**: `src/components/Footer/Footer.js`
- **Description**: Contains links to different pages, a newsletter subscription form, and social/contact details. Includes basic form validation for the newsletter signup.

### 7. Item
- **Path**: `src/components/Item/Item.js`
- **Description**: Displays a single product item with an image, price, and a button to add the product to the cart. Clicking on the item navigates to the product details page.

### 8. ProductDisplay
- **Path**: `src/components/ProductDisplay/ProductDisplay.js`
- **Description**: Displays product details such as title, price, description, and rating. Includes quantity adjustment and an "Add to Cart" button.

### 9. Shop Page
- **Path**: `src/pages/Shop/Shop.js`
- **Description**: Displays a list of products filtered by category, paginated if necessary. Fetches data from `ShopContext`.

### 10. Contact Page
- **Path**: `src/pages/Contact/Contact.js`
- **Description**: Provides a form for customers to contact the business. Includes form validation for name, email, and message fields.

### 11. Product Page
- **Path**: `src/pages/Product/Product.js`
- **Description**: Displays the details of a single product, including images, price, description, and reviews.

### 12. Home Page
- **Path**: `src/pages/Home/Home.js`
- **Description**: Displays product categories with links to shop pages for each category.

### 13. Cart Page
- **Path**: `src/pages/Cart/Cart.js`
- **Description**: Displays the contents of the shopping cart, subtotal, and allows users to proceed to checkout.

## Context Management

### 1. ShopContext
- **Path**: `src/Context/ShopContext.js`
- **Description**: Manages global state related to products and cart functionality. Provides methods like:
  - `addToCart`: Add a product to the cart.
  - `removeFromCart`: Remove a product from the cart.
  - `getTotalCartItems`: Get the total count of items in the cart.
  - `getTotalCartAmount`: Calculate the total value of the cart.

### 2. VisibilityContext
- **Path**: `src/Context/VisibilityContext.js`
- **Description**: Manages the visibility of elements like the cart sidebar. Provides a method to toggle visibility.
