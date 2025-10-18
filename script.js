console.log("Script conectado correctamente");

fetch("https://fakestoreapi.com/products/1")
  .then(res => {
    console.log("Estado del fetch:", res.status);
    return res.json();
  })
  .then(data => {
    console.log("Datos recibidos:", data);
    document.getElementById("product").innerHTML = `
      <img src="${data.image}" alt="${data.title}" style="width:200px; border-radius:8px;">
      <h2>${data.title}</h2>
      <p><strong>Precio:</strong> $${data.price}</p>
      <p><strong>Categoría:</strong> ${data.category}</p>
      <p>${data.description}</p>
      <p><strong>Rating:</strong> ${data.rating.rate} (${data.rating.count} votos)</p>
    `;
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("product").innerHTML = "Error al cargar el producto";
  });
