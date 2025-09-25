let tarjetas
let contenedores
let botones

let artes
let formsAnteriores
let image
let valorClase

let num,
    orden

posibles = []

//arrays que van a contener a los distintos artistas
let fotografos = [],
    pintores = [],
    musicos = [],
    escultores = [],
    escritores = [],
    actores = [],
    directores = [],
    artistas = [fotografos, pintores, musicos, escultores, escritores, actores, directores]

//Meto la info que tenían los storages en los arrays
fotografos.push(localStorage.getItem("Fotógrafo"))
pintores.push(localStorage.getItem("Pintor"))
musicos.push(localStorage.getItem("Músico"))
escultores.push(localStorage.getItem("Escultor"))
escritores.push(localStorage.getItem("Escritor"))
actores.push(localStorage.getItem("Actor"))
directores.push(localStorage.getItem("Director"))


//Si no tenían información me aseguro de que los array estén vacíos
for (i = 0; i < artistas.length; i++) {
    for (j = 0; j < artistas[i].length; j++) {
        if (artistas[i][j] === null) {
            artistas[i] = []
        }
    }
}



//Clase principal y sus distintas instancias
class artista {

    #nombreMuestra;
    #nombreCompleto;
    #edad;
    #genero;
    #img;
    #biografia;
    #rubro;

    constructor(nombreMuestra, nombreCompleto, edad, genero, img, biografia, rubro) {
        this.#nombreMuestra = nombreMuestra;
        this.#nombreCompleto = nombreCompleto;
        this.#edad = edad;
        this.#genero = genero;
        this.#img = img;
        this.#biografia = biografia;
        this.#rubro = rubro;
    }

    get nombreMuestra() {
        return this.#nombreMuestra
    }
    get nombreCompleto() {
        return this.#nombreCompleto
    }
    get edad() {
        return this.#edad
    }
    get genero() {
        return this.#genero
    }
    get img() {
        return this.#img
    }
    get biografia() {
        return this.#biografia
    }
    get rubro() {
        return this.#rubro
    }


    presentarse() {
        return (`Hola, soy ${this.nombreCompleto}, tengo ${this.edad} años, me identifico como ${this.genero} y soy ${this.rubro}.`)
    }

    //un parámetro para que se guerden los datos correctamente cuando los convierta en string
    get doJson() {
        return {
            nombreMuestra: this.nombreMuestra,
            nombreCompleto: this.nombreCompleto,
            edad: this.edad,
            genero: this.genero,
            img: this.img,
            biografia: this.biografia,
            rubro: this.rubro,
            presentarse: this.presentarse()
        }
    }
}
class Fotógrafo extends artista {
    #camara;

    constructor(nombreMuestra, nombreCompleto, edad, genero, img, biografia, camara) {
        super(nombreMuestra, nombreCompleto, edad, genero, img, biografia, "Fotógrafo");
        this.#camara = camara;
    }

    get camara() {
        return this.#camara
    }

    presentarse() {
        return (`Hola, soy ${this.nombreCompleto}, tengo ${this.edad} años, me identifico como ${this.genero} y soy ${this.rubro}. Utilizo una cámara ${this.camara}`)
    }
    get doJson() {
        return {
            nombreMuestra: this.nombreMuestra,
            nombreCompleto: this.nombreCompleto,
            edad: this.edad,
            genero: this.genero,
            img: this.img,
            biografia: this.biografia,
            rubro: this.rubro,
            camara: this.camara,
            presentarse: this.presentarse()
        }
    }
}
class Pintor extends artista {
    #pinturas;
    #superficie

    constructor(nombreMuestra, nombreCompleto, edad, genero, img, biografia, pinturas, superficie) {
        super(nombreMuestra, nombreCompleto, edad, genero, img, biografia, "Pintor");
        this.#pinturas = pinturas;
        this.#superficie = superficie;
    }

    get pinturas() {
        return this.#pinturas
    }
    get superficie() {
        return this.#superficie
    }

    presentarse() {
        return (`Hola, soy ${this.nombreCompleto}, tengo ${this.edad} años, me identifico como ${this.genero} y soy ${this.rubro}. Me dedico a pintar ${this.superficie} y uso pinturas ${this.pinturas}`)
    }
    get doJson() {
        return {
            nombreMuestra: this.nombreMuestra,
            nombreCompleto: this.nombreCompleto,
            edad: this.edad,
            genero: this.genero,
            img: this.img,
            biografia: this.biografia,
            rubro: this.rubro,
            pinturas: this.pinturas,
            superficie: this.superficie,
            presentarse: this.presentarse()
        }
    }
}
class Músico extends artista {
    #instrumentos;

    constructor(nombreMuestra, nombreCompleto, edad, genero, img, biografia, instrumentos) {
        super(nombreMuestra, nombreCompleto, edad, genero, img, biografia, "Músico");
        this.#instrumentos = instrumentos;
    }

    get instrumentos() {
        return this.#instrumentos
    }
    presentarse() {
        return (`Hola, soy ${this.nombreCompleto}, tengo ${this.edad} años, me identifico como ${this.genero} y soy ${this.rubro}. Sé tocar ${this.instrumentos}`)
    }
    get doJson() {
        return {
            nombreMuestra: this.nombreMuestra,
            nombreCompleto: this.nombreCompleto,
            edad: this.edad,
            genero: this.genero,
            img: this.img,
            biografia: this.biografia,
            rubro: this.rubro,
            instrumentos: this.instrumentos,
            presentarse: this.presentarse()
        }
    }
}
class Escultor extends artista {
    #material;

    constructor(nombreMuestra, nombreCompleto, edad, genero, img, biografia, material) {
        super(nombreMuestra, nombreCompleto, edad, genero, img, biografia, "Escultor");
        this.#material = material;
    }

    get material() {
        return this.#material
    }
    presentarse() {
        return (`Hola, soy ${this.nombreCompleto}, tengo ${this.edad} años, me identifico como ${this.genero} y soy ${this.rubro}. Suelo esculpir en ${this.material}`)
    }
    get doJson() {
        return {
            nombreMuestra: this.nombreMuestra,
            nombreCompleto: this.nombreCompleto,
            edad: this.edad,
            genero: this.genero,
            img: this.img,
            biografia: this.biografia,
            rubro: this.rubro,
            material: this.material,
            presentarse: this.presentarse()
        }
    }
}
class Escritor extends artista {
    #generoEsc;
    #tipo

    constructor(nombreMuestra, nombreCompleto, edad, genero, img, biografia, generoEsc, tipo) {
        super(nombreMuestra, nombreCompleto, edad, genero, img, biografia, "Escritor");
        this.#generoEsc = generoEsc;
        this.#tipo = tipo;
    }

    get generoEsc() {
        return this.#generoEsc
    }
    get tipo() {
        return this.#tipo
    }
    presentarse() {
        return (`Hola, soy ${this.nombreCompleto}, tengo ${this.edad} años, me identifico como ${this.genero} y soy ${this.rubro}. Suelo escribir ${this.tipo} de ${this.generoEsc}`)
    }
    get doJson() {
        return {
            nombreMuestra: this.nombreMuestra,
            nombreCompleto: this.nombreCompleto,
            edad: this.edad,
            genero: this.genero,
            img: this.img,
            biografia: this.biografia,
            rubro: this.rubro,
            generoEsc: this.generoEsc,
            tipo: this.tipo,
            presentarse: this.presentarse()
        }
    }
}
class Actor extends artista {
    #obras;
    #personajes;
    #generoActoral

    constructor(nombreMuestra, nombreCompleto, edad, genero, img, biografia, obras, personajes, generoActoral) {
        super(nombreMuestra, nombreCompleto, edad, genero, img, biografia, "Actor");
        this.#obras = obras;
        this.#personajes = personajes;
        this.#generoActoral = generoActoral;
    }

    get obras() {
        return this.#obras
    }
    get personajes() {
        return this.#personajes
    }

    get generoActoral() {
        return this.#generoActoral
    }
    presentarse() {
        return (`Hola, soy ${this.nombreCompleto}, tengo ${this.edad} años, me identifico como ${this.genero} y soy ${this.rubro} de ${this.generoActoral}. Actué en ${this.obras} haciendo de ${this.personajes}`)
    }
    get doJson() {
        return {
            nombreMuestra: this.nombreMuestra,
            nombreCompleto: this.nombreCompleto,
            edad: this.edad,
            genero: this.genero,
            img: this.img,
            biografia: this.biografia,
            rubro: this.rubro,
            obras: this.obras,
            personajes: this.personajes,
            generoActoral: this.generoActoral,
            presentarse: this.presentarse()
        }
    }
}
class Director extends artista {
    #obras;
    #generoDir

    constructor(nombreMuestra, nombreCompleto, edad, genero, img, biografia, obras, generoDir) {
        super(nombreMuestra, nombreCompleto, edad, genero, img, biografia, "Director");
        this.#obras = obras;
        this.#generoDir = generoDir;
    }

    get obras() {
        return this.#obras
    }
    get generoDir() {
        return this.#generoDir
    }
    presentarse() {
        return (`Hola, soy ${this.nombreCompleto}, tengo ${this.edad} años, me identifico como ${this.genero} y soy ${this.rubro} de ${this.generoDir}. Dirigí ${this.obras}`)
    }
    get doJson() {
        return {
            nombreMuestra: this.nombreMuestra,
            nombreCompleto: this.nombreCompleto,
            edad: this.edad,
            genero: this.genero,
            img: this.img,
            biografia: this.biografia,
            rubro: this.rubro,
            obras: this.obras,
            generoDir: this.generoDir,
            presentarse: this.presentarse()
        }
    }
}
let clases = [Fotógrafo, Pintor, Músico, Escultor, Escritor, Actor, Director]
//Funciones de index
if (document.title === "Foro de Artistas") {
    tarjetas = document.getElementById("tarjetas")
    contenedores = tarjetas.getElementsByTagName("li");
    botones = tarjetas.getElementsByTagName("button");

    let criterio
    let valor

    //Función para desplegar las tarjetas de los artistas
    function desglozar(event) {
        let button = event.currentTarget;
        let valor;
        for (let i = 0; i < botones.length; i++) {
            if (button === botones[i]) {
                valor = i;
            }
        }
        let icono = contenedores[valor].getElementsByClassName("fa-solid fa-angle-down")[0];
        let parrafo = contenedores[valor].getElementsByTagName("p")[0];

        // Cierra todas las demás tarjetas
        for (let i = 0; i < contenedores.length; i++) {
            let otroIcono = contenedores[i].getElementsByClassName("fa-solid fa-angle-down")[0];
            let otroParrafo = contenedores[i].getElementsByTagName("p")[0];
            if (i !== valor) {
                otroIcono.style.transform = "rotate(0deg)";
                otroParrafo.classList.remove("show");
            }
        }

        // Alterna la seleccionada
        if (!parrafo.classList.contains("show")) {
            icono.style.transform = "rotate(180deg)";
            parrafo.classList.add("show");
        } else {
            icono.style.transform = "rotate(0deg)";
            parrafo.classList.remove("show");
        }
    }

    //Enlistar todos los artistas ingresados
    function listado() {
        criterio = document.getElementById("rubro").value //Miro qué clase de artistas quiere ver el usuario
        tarjetas.innerHTML = ""
        orden = parseInt(document.getElementById("orden").value)//Miro el orden en que los quiere ver

        let li,
            button,
            figure,
            img,
            figcaption,
            icon,
            p,
            a,
            h3,
            h4
        let campo = []

        posibles = []
        let posiblesCopia = []

        //Función para sacar index porque indexOf() no funcionaba
        function findIndex(array, item) {
            return array.findIndex(posible => JSON.stringify(posible) === JSON.stringify(item));
        }
        for (let i = 0; i < artistas.length; i++) {

            if (artistas[i].length !== 0) {
                const parsedArtista = JSON.parse(artistas[i]);
                for (let j = 0; j < parsedArtista.length; j++) {
                    const item = parsedArtista[j];
                    posibles.push(item);
                    const index = findIndex(posibles, item);
                }
            }
        }

        //Cambia según el orden seleccionado
        if (orden === 0) {
            //Modifico una copia del array mientras mantengo orden original
            posiblesCopia = posibles
        } else {
            if (orden === 1) {
                posiblesCopia = posibles.sort((a, b) => JSON.parse(a).nombreMuestra.localeCompare(JSON.parse(b).nombreMuestra))
            } else {
                if (orden === 2) {
                    posiblesCopia = posibles.sort((a, b) => JSON.parse(a).nombreMuestra.localeCompare(JSON.parse(b).nombreMuestra))
                    posiblesCopia = posiblesCopia.reverse()
                } else {
                    if (orden === 3) {
                        posiblesCopia = posibles.sort((a, b) => JSON.parse(a).nombreCompleto.localeCompare(JSON.parse(b).nombreCompleto))
                    } else {
                        if (orden === 4) {
                            posiblesCopia = posibles.sort((a, b) => JSON.parse(a).nombreCompleto.localeCompare(JSON.parse(b).nombreCompleto))
                            posiblesCopia = posiblesCopia.reverse()
                        } else {
                            if (orden === 5) {
                                posiblesCopia = posibles.sort((a, b) => JSON.parse(a).edad - JSON.parse(b).edad)
                            } else {
                                if (orden === 6) {
                                    posiblesCopia = posibles.sort((a, b) => JSON.parse(a).edad - JSON.parse(b).edad)
                                    posiblesCopia = posiblesCopia.reverse()
                                }

                            }
                        }
                    }

                }
            }

        }


        if (criterio === "all") {
            //quiere ver a todos
            campo = posiblesCopia

        } else {
            //reviso cuales quiere ver si no es a todos
            let clasesImprov = ["Fotógrafo", "Pintor", "Músico", "Escultor", "Escritor", "Actor", "Director"]
            for (i = 0; i < posiblesCopia.length; i++) {

                if (JSON.parse(posiblesCopia[i]).rubro === clasesImprov[parseInt(criterio)]) {
                    campo.push(posiblesCopia[i])
                }

            }

        }

        //muestro todos los artistas que encajan con lo que quiere el usuario
        for (i = 0; i < campo.length; i++) {

            if (campo.length !== 0) {

                // Crear elementos
                li = document.createElement("li")
                button = document.createElement("button")
                figure = document.createElement("figure")
                img = document.createElement("img")
                figcaption = document.createElement("figcaption")
                h3 = document.createElement("h3")
                h4 = document.createElement("h4")
                icon = document.createElement("i")
                p = document.createElement("p")
                a = document.createElement("a")

                li.className = 'col-md-4 mb-4 d-flex';

                let card = document.createElement('div');
                card.className = 'card h-100 bg-transparent border-light text-light shadow-lg w-100'; // ampliada y con sombra

                // Imagen horizontal arriba de la card
                img.className = 'card-img-top img-fluid';
                img.style = "height: 180px; object-fit: cover; background: #fff;";
                img.src = JSON.parse(campo[i]).img;
                img.alt = JSON.parse(campo[i]).nombreMuestra;

                // El resto del contenido
                button.className = 'btn w-100 text-start d-flex align-items-center bg-transparent border-0 p-0';
                figure.className = 'd-flex align-items-center w-100 m-0';
                figcaption.className = 'd-flex flex-column text-light ps-3 pt-3';
                h3.className = 'mb-1 text-light fs-5';
                h4.className = 'mb-0 text-light fs-6';
                icon.className = "fa-solid fa-angle-down ms-auto";
                icon.setAttribute("aria-hidden", "true");
                p.className = 'card-text mt-3 text-light collapse ps-4 pt-3';
                a.className = 'btn btn-info btn-sm mt-3'; // botón debajo del texto ampliado


                li.setAttribute("aria-expanded", "false")

                h3.innerText = JSON.parse(campo[i]).nombreMuestra
                h4.innerText = JSON.parse(campo[i]).rubro
                icon.className = "fa-solid fa-angle-down"
                icon.setAttribute("aria-hidden", "true")
                p.innerText = JSON.parse(campo[i]).presentarse
                a.innerHTML = "<br>Más información sobre el artista"
                const index = findIndex(posiblesCopia, campo[i])
                //Al ingresar a la página personal cambio la url y meto en un storage los datos que deberá mostrar la página
                a.addEventListener("click", () => {

                    localStorage.setItem("posibles", JSON.stringify(posiblesCopia))
                    window.location.assign("area-personal.html?id=" + index)
                })

                //Les añado la función de desglozar
                button.addEventListener("click", desglozar)

                //Hago aparecer los elementos
                tarjetas.appendChild(li)
                li.appendChild(card);
                card.appendChild(img); // Imagen horizontal arriba
                card.appendChild(button);
                button.appendChild(figure)
                figure.appendChild(figcaption)
                figcaption.appendChild(h3)
                figcaption.appendChild(h4)
                button.appendChild(icon)
                card.appendChild(p)
                card.appendChild(a)

            }
        }
    }
    //el listado vuelve a aparecer cuando el usuario quiera otro orden u otros artistas
    document.getElementById("rubro").addEventListener("change", listado)
    document.getElementById("orden").addEventListener("change", listado)
    //el listado aparece al abrir la página
    listado()
}

//Funciones de formulario
if (document.title === "Admin") {

    let clave

    //Una contraseña que, en la práctica, solo conocerá el/los admin/s de la página
    while (clave !== "123456") {
        clave = prompt("Ingrese la clave de root (clave: 123456)")
    }
    tarjetas = document.getElementById("lista")
    artes = document.getElementsByName("arte")

    //lista de todos los artistas que el admin podrá eliminar
    function listadoAdmin() {

        tarjetas.innerHTML = ""

        let campo,
            li,
            button,
            figure,
            img,
            figcaption,
            h4,
            h5,
            icon
        posibles = []
        campo = artistas

        //proceso similar al listado de index
        for (i = 0; i < campo.length; i++) {
            if (campo[i].length !== 0) {

                for (j = 0; j < JSON.parse(campo[i]).length; j++) {

                     li = document.createElement("li")
                li.className = "col-md-4 mb-4 d-flex"; // 3 por fila, con separación

                card = document.createElement("div")
                card.className = "card h-100 bg-transparent border-light text-light shadow-lg w-100"

                figure = document.createElement("figure")
                figure.className = "d-flex align-items-center w-100 m-0"

                img = document.createElement("img")
                img.className = "img-fluid rounded me-3"
                img.style = "width: 80px; height: 80px; object-fit: cover; background: #fff;"

                figcaption = document.createElement("figcaption")
                figcaption.className = "d-flex flex-column text-light"

                h4 = document.createElement("h4")
                h4.className = "mb-1 text-light fs-5"

                h5 = document.createElement("h5")
                h5.className = "mb-0 text-light fs-6"

                button = document.createElement("button")
                button.className = "btn btn-danger btn-sm mt-3 w-100"
                button.innerText = "Eliminar"
                button.id = j
                button.rubro = JSON.parse(JSON.parse(campo[i])[j]).rubro

                img.src = JSON.parse(JSON.parse(campo[i])[j]).img
                img.alt = JSON.parse(JSON.parse(campo[i])[j]).nombreMuestra
                h4.innerText = JSON.parse(JSON.parse(campo[i])[j]).nombreMuestra
                h5.innerText = JSON.parse(JSON.parse(campo[i])[j]).rubro

                posibles.push(JSON.parse(JSON.parse(campo[i])[j]))

                //añado un botón que pueda eliminar artistas de la página
                button.addEventListener("click", borrar)

                //armo la estructura
                tarjetas.appendChild(li)
                li.appendChild(card)
                card.appendChild(figure)
                figure.appendChild(img)
                figure.appendChild(figcaption)
                figcaption.appendChild(h4)
                figcaption.appendChild(h5)
                card.appendChild(button)
            }
        }
    }
}

    //función para borrar artistas de la página
    function borrar() {
        let botonId = parseInt(event.currentTarget.id),
            botonRubro = event.currentTarget.rubro,
            clasesImprov = ["Fotógrafo", "Pintor", "Músico", "Escultor", "Escritor", "Actor", "Director"]


        artistas[clasesImprov.indexOf(botonRubro)] = JSON.parse(artistas[clasesImprov.indexOf(botonRubro)])

        //reviso cuál fue el boton que se tocó y borro al artista dueño de dicho botón
        artistas[clasesImprov.indexOf(botonRubro)].splice(botonId, 1)

        artistas[clasesImprov.indexOf(botonRubro)] = JSON.stringify(artistas[clasesImprov.indexOf(botonRubro)])
        localStorage.setItem(botonRubro, artistas[clasesImprov.indexOf(botonRubro)])

        //luego de borrarlo actualizo la lista visible
        listadoAdmin()
    }

    //función para modificar el form visible en función al tipo de artista que se desea ingresar
    function cambiarForm(event) {

        let especifico = document.getElementById("especifico")
        let form

        event.currentTarget.setAttribute("checked", "")
        event.currentTarget.className = "necesario"
        //luego de que se seleccione un tipo de artista, reviso cuál se seleccionó
        for (i = 0; i < artes.length; i++) {

            if (artes[i] === event.currentTarget) {
                valorClase = artes[i].value
                num = i
            } else {
                artes[i].removeAttribute("class")
                artes[i].removeAttribute("checked")
            }
        }

        //si ya se había seleccionado un tipo antes pero cambió, borro lo que se había mostrado antes
        if (formsAnteriores !== undefined) {
            for (i = 0; i < formsAnteriores.length; i++) {
                formsAnteriores[i].style.display = "none"
                formsAnteriores[i].removeAttribute("class")
            }
        }

        //Una vez determinado el tipo muestro sus respectivas forms
        form = document.getElementsByName(valorClase)
        formsAnteriores = form

        for (i = 0; i < form.length; i++) {
            form[i].style.display = "block"
            if (form[i].hasAttribute("type")) {
                form[i].className = "necesario"
                form[i].style.borderColor = "rgba(90, 84, 255, .85)"
            }
            if (form[i].hasAttribute("role")) {
                form[i].style.display = "none"
            }
        }
        especifico.style.display = "block"

    }

    //guardar imagenes que el usuario ingresó
    let images = []
    document.getElementById("imagen").addEventListener("change", e => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                image = reader.result
                images.push(image)

            })
            reader.readAsDataURL(file)
        }


    })
    let serializado

    let alertas = document.getElementsByClassName("alerta")
    //función para guardar un nuevo artista en la base de datos
    function form() {
        let serializar,
            allForms = document.getElementsByClassName("necesario")
        comprobar = true

        //compruebo si se seleccionó un tipo de artista
        for (i = 0; i < alertas.length; i++) {

            alertas[i].style.display = "none"

        }
        for (i = 0; i < artes.length; i++) {
            if (artes[i].hasAttribute("checked") === true) {
                comprobar = false
            }
        }

        if (comprobar === false) {
            //reviso si todos los campos están completos
            for (i = 0; i < allForms.length; i++) {
                allForms[i].style.borderColor = "rgba(90, 84, 255, .85)"

                if (allForms[i].value === "" || allForms[i].value === "null" || allForms[i].value === null || allForms[i].value === undefined) {
                    comprobar = true
                    allForms[i].style.borderColor = "red"
                    document.getElementById(allForms[i].attributes[0].value).className = "alerta"
                    document.getElementById(allForms[i].attributes[0].value).style.display = "inline-block"

                }
            }
        } else {
            alertas[6].style.display = "inline-block"
        }

        //en caso de que todo esté completo guardo los datos ingresados
        if (comprobar === false) {

            let nM = document.getElementById("nombreMuestra").value,
                nC = document.getElementById("nombreComp").value,
                age = document.getElementById("edad").value,
                gender = document.getElementById("genero").value,
                bio = document.getElementById("biografia").value,

                info = []

            let elementos = document.getElementsByName(valorClase)
            for (i = 0; i < elementos.length; i++) {
                if (elementos[i].hasAttribute("id")) {

                    info.push(elementos[i].value)
                }
            }

            //si ya habían cosas en el array me aseguro volverlas objeto de nuevo
            console.log(num)
            if (artistas[num].length === 1) {
                artistas[num] = JSON.parse(artistas[num])
            }

            //reviso cuantos objetos extra tiene el tipo de artista
            //una vez determinado esto, convierto los objetos en string y los guardo en el array
            if (info.length === 1) {

                serializar = new clases[num](nM, nC, age, gender, image, bio, info[0])

                artistas[num].push(JSON.stringify(serializar.doJson))
            } else {
                if (info.length === 2) {
                    serializar = new clases[num](nM, nC, age, gender, image, bio, info[0], info[1])

                    artistas[num].push(JSON.stringify(serializar.doJson))
                } else {
                    if (info.length === 3) {
                        serializar = new clases[num](nM, nC, age, gender, image, bio, info[0], info[1], info[2])

                        artistas[num].push(JSON.stringify(serializar.doJson))
                    } else {
                        alert("Nyokki la cagó")
                    }
                }
            }

            //hecho esto convierto el array en string para guardarlo en el storage
            serializado = JSON.stringify(artistas[num])
            localStorage.setItem(valorClase, serializado)

            location.reload(true);
        }

    }

    //hago que al seleccionar cualquier tipo de artista se cambie el form
    for (i = 0; i < artes.length; i++) {
        artes[i].addEventListener("change", cambiarForm)
    }
    document.getElementById("enviar").addEventListener("click", form)

    //aparece la lista al cargar la página
    listadoAdmin()
}

//Funciones de area-personal
if (document.title === "Área del Artista") {

    let objeto
    let numero = parseInt(new URLSearchParams(window.location.search).get("id")) //clase de js, devuelve un string, que con el parseInt lo hace número

    //reviso los datos que le ingresé al storage cuando toqué el link
    objeto = JSON.parse(JSON.parse(localStorage.getItem("posibles"))[numero])

    document.getElementById("prueba").innerText = objeto.nombreCompleto
    document.getElementById("foto").src = objeto.img
    document.getElementById("foto").alt = objeto.nombreMuestra
    document.getElementById("rubro").innerText = objeto.rubro
    document.getElementById("edad").innerText = "Edad: " + objeto.edad
    document.getElementById("genero").innerText = "Genero: " + objeto.genero
    document.getElementById("biografia").innerText = "Biografía: " + objeto.biografia

}