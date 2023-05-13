const links = document.querySelectorAll('.galeria a')
.forEach(link => {
    link.addEventListener("click", function(event){
        event.preventDefault();
        // console.log(this);
        // alert('Clicou');
        // Pegar os elementos
        const modal = document.querySelector('.modal');
        const modalBody = document.querySelector('.modal-body');
        // Modificou style
        modal.style.display = 'flex';

        console.log(this.href);

        // Criar Nós
        const img = document.createElement('img');
        const titulo = document.createElement('h1');
        const descricao = document.createElement('p');

        //  pegar o alt da miniatura e colocar no título

        // const tituloImg = this.querySelector(img).alt;
        // console.log(miniatura);
        titulo.innerHTML = this.children[0].alt;
        descricao.innerHTML = this.children[0].dataset.desc;  

        // Transferimos o href de this para a img criada
        img.src = this.href;
        

        // // limpar o modal
        modalBody.innerHTML= '';


        // adicionar a img criada no modal_body 
        
        modalBody.appendChild(titulo);
        modalBody.appendChild(img);        
        modalBody.appendChild(descricao);


        // Fecha em 1 segundo
        setTimeout(() => {
            modal.style.display = 'none';
        }, 10000);

    });
});


document.querySelector('.modal').addEventListener('click', function(event){
    if(event.target != this){
        return;
    }
    this.style.display = 'none';

})







