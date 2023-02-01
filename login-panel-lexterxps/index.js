addEventListener('DOMContentLoaded', () => {
    const form_login = document.querySelector('#form_login');
    const login_span = form_login.querySelector('.titulo_boton');
    const loader = form_login.querySelector('#loader');
    const mensaje_error = document.querySelector('.contenedor_error');

    if(form_login) {
        form_login.addEventListener('submit', event => {
            event.preventDefault();

            const usuario = form_login.querySelector('.usuario').value;
            const contrasenia = form_login.querySelector('.contrasenia').value;

            login_span.style.display = 'none';
            loader.style.display = 'inline';

            setTimeout(() => {
                if (usuario == 'joty' && contrasenia == '12345') {
                    alert('¡Has ingresado con éxito!');
                    login_span.style.display = 'inline';
                    loader.style.display = 'none';
                } else {
                    mensaje_error.classList.add('mostrar_error');
                    login_span.style.display = 'inline';
                    loader.style.display = 'none';

                    setTimeout(() => {
                        mensaje_error.classList.remove('mostrar_error');
                    }, 5000);
                }
            }, 2500);
        });
    }
});