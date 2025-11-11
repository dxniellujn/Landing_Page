//VALIDACION DE FORMULARIO
const form = document.querySelector('form[name="frm"]');
form.addEventListener("submit", (event) => {
  const fname = form.elements["fname"].value;
  const flastname = form.elements["flastname"].value;
  const femail = form.elements["femail"].value;
  const fphone = form.elements["fphone"].value;

  if (!fname || !flastname || !femail || !fphone) {
    event.preventDefault();
    alert("Por favor, complete los campos requeridos");
  } else if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo valido");
  }
});
function validateEmail(femail) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
  return re.test(String(femail).toLowerCase());
}
