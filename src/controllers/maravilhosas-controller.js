
//const { request, response } = require("express")
const { request, response } = require("express")
const model = require("../models/maravilhosas-models")


/* const novaListaMusicas = musicas.map(musica => {
    const novaMusica = {
        id: musica.id,
        nome: musica.name,
        amostra: musica.preview_url,
        nome_album: musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name
    }
    return novaMusica
}) */


//get
const getMaravilhosas = (request, response) =>{
    
    response.status(200).send(model.selectAllData())
  
}


//getbyid
const getMaravilhosaById = (request, response) =>{
    const data = request.params.id
    if(id > 12 || id <= 0){
        response.status(404).send("ID não encontrado")
    }

    response.status(200).send(data.find(data => data.id == id))
    return data
    
}




//post

const criarMulher = (request, response) =>{
    
}

//const addMaravilhosa = (request, response) =>{

    /* const {titulo, descricao, prazo, responsavel} = requisicao.body;
    
    const tarefaId = tarefaModel.map(tarefa => tarefa.id == id);

    const novoId = tarefaId.length > 0 ? Math.max.apply(Math, tarefaId) + 1 : 1;

    const novaTarefa = {
        id: novoId,
        titulo: titulo,
        descricao: descricao,
        prazo: prazo,
        responsavel: responsavel,
        dataCriacao: new Date()
    }

    tarefaModel.push(novaTarefa);

    resposta.status(201).json(novaTarefa);
}
 */



module.exports = {

    getMaravilhosas,
    
    getMaravilhosaById,
    
    //addMaravilhosa 
    
    //updateMaravilhosa, 
    
    //deleteMaravilhosa
}