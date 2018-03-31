function mostraPokemon(url) {

  //instancia classe responsável ao consumo da api
  const xhr = new XMLHttpRequest();
  //define opções da requisição
  xhr.open('GET', url, true);
  //envia requisição para a api
  xhr.send();
  //trata os dados de maneira assincrona 
  xhr.onload = function(e) {
    //salva resposta da api em uma variavel
    //e transforma resposta em um JSON válido
    const res = JSON.parse(xhr.response);
    console.log(res);
    populaModal( res );

    jQuery('#modalBox').modal('show');
  }

  //document.querySelector('#modal').show();
  //TO-DO:
  //  1. FAZER CONSUMO DA URL RECEBIDA COMO PARAMETRO
  //  2. TRATAR DADOS RECEBIDOS PELA URL
  //  3. CHAMAR FUNÇÃO POPULA MODAL PARA ELA ADICIONAR
  //     OS COMPONENTES HTML NO MODAL
  //  4. ABRIR MODAL (.modal) COM JAVASCRIPT
  //     (http://getbootstrap.com/docs/4.0/components/modal/#via-javascript)
}


// Mostrar o nome, imagem do pokemon, tipo (todos os tipos), peso, altura e id
function populaModal(pokemon) {

  let linebreak = document.createElement("br");

  let modal = document.querySelector('.modal');
  modal.setAttribute( 'id', 'modalBox' );
  modal.classList.add('modal', 'fade');

  let modal_dialog = document.createElement('div')
  modal_dialog.classList.add('modal-dialog', 'modal-dialog-centered');


  let modal_content = document.createElement('div');
  modal_content.classList.add('modal-content');

  let image = document.createElement("img");
  image.src = pokemon.sprites.back_default;

  let modal_title   = document.createElement('h5');
  modal_title.classList.add('modal-title');
  modal_title.append( pokemon.name );

  let modal_header  = document.createElement('div')
  modal_header.classList.add('modal-header');
  modal_header.append(modal_title);
  modal_header.append(image);
  modal_content.append(modal_header);

  let modal_body  = document.createElement('div');
  modal_body.classList.add('modal-body');

  let pokeInfo_id = document.createElement('p');
  pokeInfo_id.append( 'ID: ' + pokemon.id );
  let pokeInfo_tipo = document.createElement('p');
  pokeInfo_tipo.append( 'TIPO: ' + pokemon.types[0].type.name );
  let pokeInfo_peso = document.createElement('p');
  pokeInfo_peso.append( 'PESO: ' + pokemon.weight );
  let pokeInfo_altura = document.createElement('p');
  pokeInfo_altura.append( 'ALTURA: ' + pokemon.height );

  modal_body.append( pokeInfo_id );
  modal_body.append( pokeInfo_tipo );
  modal_body.append( pokeInfo_peso  );
  modal_body.append( pokeInfo_altura );

  modal_content.append(modal_body);
  modal_dialog.append(modal_content);

  modal.append(modal_dialog);


  //TO-DO:
  //  1. CRIAR COMPONENTES PARA MOSTRAR NO MODAL 
  //     SEGUINDO O PADRÃO DO BOOTSTRAP
  //     (http://getbootstrap.com/docs/4.0/components/modal/#modal-components)
  //  2. LINKAR TODOS OS COMPONENTES COM O MODAL .modal
  //  3. SEMPRE QUE FECHAR O MODAL LIMPAR O CONTEUDO ADICIONADO
}
jQuery(document).on('hidden.bs.modal', '#modalBox', function(){
  jQuery('#modalBox .modal-dialog').remove();
});