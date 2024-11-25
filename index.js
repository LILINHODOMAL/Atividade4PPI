import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));

const host = '0.0.0.0';
const porta = 3000;

var listaCadastro = [];

function CadastroView(req, resp) {
    resp.send(`
                 <html>
                       <head>
                       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                            <title>  Cadastro  </title>
                       </head>
                       <body>
            <div class="container text-center">
                                 <h1 class="mb-3"> Cadastro  </h1>
                    <form method="POST" action="/Matricula" class="border p-3 row g-3 " novalidate>
                            <div class="col-md-4">
                                <label for="razaosocial" class="form-label">Razão Social</label>
                                    <input type="text" class="form-control" id="razaosocial" name="razaosocial" placeholder="Razao Social..." >
    
                            </div>
                            <div class="col-md-4">
                                    <label for="Nomefantasia" class="form-label">Nome fantasia</label>
                                        <input type="text" class="form-control" id="nomefantasia" name="nomefantasia" placeholder="Digite o nome fantasia..." >
                            </div>
                            <div class="col-md-4">
                                <label for="telefone" class="form-label">Telefone</label>
                                    <input type="text" class="form-control" id="telefone" name="telefone" placeholder="00 00000-0000" >
   
                            </div>
                            <div class="col-md-4">
                                <label for="Email" class="form-label">Email</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                        <input type="text" class="form-control" id="email" name="email" placeholder="Ex:username@gmail.com..." > 
                                </div>
                            </div>
                            <div class="col-md-4">
                                    <label for="endereço" class="form-label">Endereço</label>
                                        <input type="text" class="form-control" id="endereço" name="endereço" placeholder="Digite seu endereco..." >
                            </div>
                            <div class="col-md-4">
                                <label for="cnpj" class="form-label">CNPJ</label>
                                    <input type="text" class="form-control" id="cnpj" name="cnpj" placeholder="xx. xxx xxx-xxxx/xx" >
   
                            </div>
                            <div class="col-md-6">
                                <label for="cidade" class="form-label">Cidade</label>
                                    <input type="text" class="form-control" id="cidade" name="cidade" placeholder="Digite o nome da cidade..." >
                            </div>
                            <div class="col-md-3">
                                <label for="uf" class="form-label">UF</label>
                                    <select class="form-select" id="uf" name="uf" >
                                        <option selected disabled value="">Escolha...</option>
                                        <option>AC</option>
                                        <option>AL</option>
                                        <option>AP</option>
                                        <option>AM</option>
                                        <option>BA</option>
                                        <option>CE</option>
                                        <option>DF</option>
                                        <option>ES</option>
                                        <option>GO</option>
                                        <option>MA</option>
                                        <option>MT</option>
                                        <option>MS</option>
                                        <option>MG</option>
                                        <option>PA</option>
                                        <option>PB</option>
                                        <option>PR</option>
                                        <option>PE</option>
                                        <option>PI</option>
                                        <option>RJ</option>
                                        <option>RN</option>
                                        <option>RS</option>
                                        <option>RO</option>	
                                        <option>RR</option>
                                        <option>SC</option>
                                        <option>SP</option>
                                        <option>SE</option>
                                        <option>TO</option>
                                    </select>
                            </div>
                            <div class="col-md-3">
                                <label for="cep" class="form-label">Cep</label>
                                    <input type="text" class="cep" id="cep" name="cep" placeholder="xxxxx-xxx" >
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Cadastrar</button>
                            </div>
                    </form>
                            </div>
            </div>                
                       </body>
                      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> 
                 </html> 
        
        
            `)
}

function menuView(req, resp) {
    resp.send(`
              <html>
                       <head>
                       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                            <title>  Cadastro  </title>
                       </head>
                       <body>
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Menu</a>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="/Matricula">Cadastro</a>
                            </div>
                            </div>
                        </div>
                        </nav>
                      </body> 
                       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> 
                 </html>  
            `)
}

function Cadastrar(req, resp) {
      const razaosocial = req.body.razaosocial;
    const nomefantasia = req.body.nomefantasia;
    const telefone  = req.body.telefone
    const email = req.body.email;
    const cnpj = req.body.cnpj;
    const endereço = req.body.endereço
    const cidade = req.body.cidade;
    const uf = req.body.uf;
    const cep = req.body.cep;

    
    if ( nomefantasia && razaosocial && telefone && email && cnpj && endereço && cidade && uf && cep) {

    const dados = {nomefantasia, razaosocial, telefone , email, cnpj, endereço, cidade, uf, cep };

    listaCadastro.push(dados);
        resp.write(`
                     <html>
                            <head>
                                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                                <title>  Cadastros Realiados </title>
                                <meta charset=""utf-8>
                            </head>
                            <body>
                                     <table class="table table-hover">
                                        <thead>
                                             <tr>
                                                
                                                 <th scope="col"> razaosocial </th>
                                                  <th scope="col"> nomefantasia </th>
                                                   <th scope="col"> tefelone </th>
                                                    <th scope="col"> email </th>
                                                     <th scope="col"> cnpj </th>
                                                      <th scope="col"> endereço </th>
                                                       <th scope="col"> cidade </th>
                                                        <th scope="col"> uf </th>
                                                         <th scope="col"> cep </th>
                                             </tr>
                                        </thead>
                                        <tbody>`);

        for (var i = 0; i < listaCadastro.length; i++) {
            resp.write(`<tr>
                                                                
                                                                <td>${listaCadastro[i].razaosocial}</td>
                                                                <td>${listaCadastro[i].nomefantasia}</td>
                                                                <td>${listaCadastro[i].telefone}</td>
                                                                <td>${listaCadastro[i].email}</td>
                                                                <td>${listaCadastro[i].cnpj}</td>
                                                                <td>${listaCadastro[i].endereço}</td>
                                                                <td>${listaCadastro[i].cidade}</td>
                                                                <td>${listaCadastro[i].uf}</td>
                                                                <td>${listaCadastro[i].cep}</td> 
                                                            </tr>

                                                    `)
        }

        resp.write(`  </tbody>                                  

                                        </table>
                                        <a class="btn btn-primary" href="/Matricula">Efetuar outro Cadastro</a>
                                        <a class="btn btn-secondary" href="/">Voltar ao menu</a>
                                        </body>
                                            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> 
                                            <html>  
                                    `);
    }
    else{
        resp.write(`
            <html>
                       <head>
                       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                            <title>  Cadastro  </title>
                            <meta charset="utf-8">
                       </head>
                       <body>
            <div class="container text-center">
                                 <h1 class="mb-3"> Cadastro  </h1>
                    <form method="POST" action="/Matricula" class="border p-3 row g-3 " novalidate>
                            <div class="col-md-4">
                                    <label for="razaosocial" class="form-label">Razão Social</label>
                                    <input type="text" class="form-control" id="razaosocial" name="razaosocial" placeholder="Razao Social..." value="${razaosocial}">
    
            `);
        if(!razaosocial){
            resp.write(`
                <div>
                    <span><p class="bg-danger">Campo não preenchido</p></span>
                </div>
                `); 
        }
        resp.write(`</div>
                        <div class="col-md-4">
                                <label for="nomefantasia" class="form-label">Nome fantasia</label>
                                    <input type="text" class="form-control" id="nomefantasia" name="nomefantasia" placeholder="Nome fantasia..." value="${nomefantasia}">
            `);
        if(!nomefantasia){
            resp.write(`
                <div>
                    <span><p class="bg-danger">Campo não preenchido</p></span>
                </div>
                `); 
        }
        resp.write(`
            </div>
                            <div class="col-md-4">
                                <label for="telefone" class="form-label">Telefone</label>
                                    <input type="text" class="form-control" id="telefone" name="telefone" placeholder="00 00000-0000" value="${telefone}">
            `);
        if(!telefone){
            resp.write(`
                <div>
                    <span><p class="bg-danger">Campo não preenchido</p></span>
                </div>
                `);
        }
        resp.write(`
            </div>
            <div class="col-md-4">
                                <label for="Email" class="form-label">Email</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                        <input type="text" class="form-control" id="email" name="email" placeholder="Ex:username@gmail.com..." value"${email}">
            `);
        if(!email){
            resp.write(`
                <div>
                    <span><p class="bg-danger">Campo não preenchido</p></span>
                </div>
                `);
        }
        resp.write(`
             </div>
                            </div>
                            <div class="col-md-4">
                                    <label for="endereço" class="form-label">Endereço</label>
                                        <input type="text" class="form-control" id="endereço" name="endereço" placeholder="Digite seu endereco..." value="${endereço}">
            `);
        if(!endereço){
            resp.write(`
                <div>
                    <span><p class="bg-danger">Campo não preenchido</p></span>
                </div>
                `);
        }
        resp.write(`
            </div>
        <div class="col-md-4">
            <label for="cnpj" class="form-label">CNPJ</label>
                <input type="text" class="form-control" id="cnpj" name="cnpj" placeholder="xx. xxx xxx-xxxx/xx" value="${cnpj}">
            `);
        if(!cnpj){
            resp.write(`
                 <div>
                    <span><p class="bg-danger">Campo não preenchido</p></span>
                </div>
                `);
        }
        resp.write(`
             </div>
                            <div class="col-md-6">
                                <label for="cidade" class="form-label">Cidade</label>
                                    <input type="text" class="form-control" id="cidade" name="cidade" placeholder="Digite o nome da cidade..." value="${cidade}">
            `);
        if(!cidade){
            resp.write(`
                 <div>
                    <span><p class="bg-danger">Campo não preenchido</p></span>
                </div>
                `);
        }
        resp.write(`
             </div>
                            <div class="col-md-3">
                                <label for="uf" class="form-label">UF</label>
                                    <select class="form-select" id="uf" name="uf" >
                                        <option selected disabled value="">Escolha...</option>
                                        <option>AC</option>
                                        <option>AL</option>
                                        <option>AP</option>
                                        <option>AM</option>
                                        <option>BA</option>
                                        <option>CE</option>
                                        <option>DF</option>
                                        <option>ES</option>
                                        <option>GO</option>
                                        <option>MA</option>
                                        <option>MT</option>
                                        <option>MS</option>
                                        <option>MG</option>
                                        <option>PA</option>
                                        <option>PB</option>
                                        <option>PR</option>
                                        <option>PE</option>
                                        <option>PI</option>
                                        <option>RJ</option>
                                        <option>RN</option>
                                        <option>RS</option>
                                        <option>RO</option>	
                                        <option>RR</option>
                                        <option>SC</option>
                                        <option>SP</option>
                                        <option>SE</option>
                                        <option>TO</option>
                                    </select value="${uf}">
            `);
        if(!uf){
            resp.write(`
                <div>
                    <span><p class="bg-danger">Campo não preenchido</p></span>
                </div>
                `);
        }
        resp.write(`
            </div>
                            <div class="col-md-3">
                                <label for="cep" class="form-label">Cep</label>
                                    <input type="text" class="cep" id="cep" name="cep" placeholder="xxxxx-xxx" value="${cep}">
            `);
        if(!cep){
            resp.write(`
                <div>
                    <span><p class="bg-danger">Campo não preenchido</p></span>
                </div>
                `);
        }
        resp.write(`
            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Cadastrar</button>
                            </div>
                    </form>
                            </div>
            </div>                
                       </body>
                      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> 
                 </html> 
            `);

    }

    resp.end();
}

app.get('/', menuView)
app.get('/Matricula', CadastroView);
app.post('/Matricula', Cadastrar);

app.listen(porta, host, () => {
    console.log(`Servidor iniciado e em exeção no endereço http://${host}:${porta}`);
}) 