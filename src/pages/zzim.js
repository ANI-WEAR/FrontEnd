export default function Zzim() {
    return (
        <body class="bg-gray-100">
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">My Wishlist</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
      <!-- Product 1 -->
      <div class="bg-white rounded shadow-md p-4">
        <img src="https://via.placeholder.com/150" alt="Product 1" class="w-full h-40 object-contain mb-4">
        <div class="font-bold mb-2">Product 1</div>
        <div class="text-sm mb-1">Size: <select class="border rounded p-1"></select></div>
        <div class="text-right font-bold">Price: N/A</div>
        <button class="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
      </div>

      <!-- Product 2 -->
      <div class="bg-white rounded shadow-md p-4">
        <img src="https://via.placeholder.com/150" alt="Product 2" class="w-full h-40 object-contain mb-4">
        <div class="font-bold mb-2">Product 2</div>
        <div class="text-sm mb-1">Size: <select class="border rounded p-1"></select></div>
        <div class="text-right font-bold">Price: N/A</div>
        <button class="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
      </div>

      <!-- Product 3 -->
      <div class="bg-white rounded shadow-md p-4">
        <img src="https://via.placeholder.com/150" alt="Product 3" class="w-full h-40 object-contain mb-4">
        <div class="font-bold mb-2">Product 3</div>
        <div class="text-sm mb-1">Size: <select class="border rounded p-1"></select></div>
        <div class="text-right font-bold">Price: N/A</div>
        <button class="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
      </div>

      <!-- Product 4 -->
      <div class="bg-white rounded shadow-md p-4">
        <img src="https://via.placeholder.com/150" alt="Product 4" class="w-full h-40 object-contain mb-4">
        <div class="font-bold mb-2">Product 4</div>
        <div class="text-sm mb-1">Size: <select class="border rounded p-1"></select></div>
        <div class="text-right font-bold">Price: N/A</div>
        <button class="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
      </div>

      <!-- Product 5 -->
      <div class="bg-white rounded shadow-md p-4">
        <img src="https://via.placeholder.com/150" alt="Product 5" class="w-full h-40 object-contain mb-4">
        <div class="font-bold mb-2">Product 5</div>
        <div class="text-sm mb-1">Size: <select class="border rounded p-1"></select></div>
        <div class="text-right font-bold">Price: N/A</div>
        <button class="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
      </div>

      <!-- Add more products as needed... -->
    </div>
  </div>

  <script>
    // JavaScript code for managing wishlist
    const sizes = ["S", "M", "L", "XL"]; // Sample size options

    function createSizeOptions(selectElement) {
      sizes.forEach((size) => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        selectElement.appendChild(option);
      });
    }

    function createProductCard(productName) {
      const card = document.createElement("div");
      card.classList.add("bg-white", "rounded", "shadow-md", "p-4");

      const image = document.createElement("img");
      image.src = "https://via.placeholder.com/150";
      image.alt = productName;
      image.classList.add("w-full", "h-40", "object-contain", "mb-4");
      card.appendChild(image);

      const productNameElement = document.createElement("div");
      productNameElement.textContent = productName;
      productNameElement.classList.add("font-bold", "mb-2");
      card.appendChild(productNameElement);

      const sizeText = document.createElement("div");
      sizeText.textContent = "Size: ";
      sizeText.classList.add("text-sm", "mb-1");
      card.appendChild(sizeText);

      const sizeSelect = document.createElement("select");
      sizeSelect.classList.add("border", "rounded", "p-1");
      createSizeOptions(sizeSelect);
      sizeText.appendChild(sizeSelect);

      const priceElement = document.createElement("div");
      priceElement.textContent = "Price: N/A";
      priceElement.classList.add("text-right", "font-bold");
      card.appendChild(priceElement);

      const addToCartButton = document.createElement("button");
      addToCartButton.textContent = "Add to Cart";
      addToCartButton.classList.add("mt-2", "w-full", "bg-blue-500", "text-white", "py-2", "px-4", "rounded");
      card.appendChild(addToCartButton);

      return card;
    }

    const wishlistContainer = document.querySelector(".grid");
    wishlistContainer.innerHTML = ""; // Clearing the hardcoded content

    const wishlistProducts = [
      "Product 1",
      "Product 2",
      "Product 3",
      "Product 4",
      "Product 5",
      // Add more products as needed...
    ]; // Sample wishlist products

    wishlistProducts.forEach((product) => {
      const productCard = createProductCard(product);
      wishlistContainer.appendChild(productCard);
    });
  </script>
</body>
    )
}