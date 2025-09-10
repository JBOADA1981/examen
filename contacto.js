function preguntar() {
  Swal.fire({
    title: "¿Estás seguro de enviar el formulario?",
    text: "¡No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, enviar",
    cancelButtonText: "Cancelar",
  });
}

document.getElementById("envia").addEventListener("click",preguntar );