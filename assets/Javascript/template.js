export const PAGE_TEMPLATES={
        'index': {
        title: 'Início',
        content: `
            <section class="section-content grid-col-12 grid-col-lg-8">
                <h2>Sobre a ONG Solidariedade</h2>
                <article>
                    <p>A ONG Solidariedade é uma organização sem fins lucrativos dedicada a promover o bem-estar social em comunidades vulneráveis. Fundada em 2010, atuamos em áreas como educação, saúde e meio ambiente, impactando mais de 10.000 pessoas anualmente.</p>
                    
                    <h3>Nossa Missão</h3>
                    <p>Empoderar indivíduos e comunidades por meio de projetos inovadores e parcerias sustentáveis.</p>
                    <p class="mission-detail">Nosso foco é a ação contínua, não apenas a assistência imediata. Buscamos soluções de longo prazo, desde o reforço escolar que abre portas para o mercado de trabalho até o acesso à saúde preventiva que garante qualidade de vida. Atuamos com base na escuta ativa das necessidades locais.</p>
                    
                    <h3>Nossos Valores</h3>
                    <ul class="values-list">
                        <li><strong>Comprometimento e Transparência: </strong>Usamos cada recurso com responsabilidade e prestamos contas detalhadas aos nossos apoiadores.</li>
                        <li><strong>Equidade e Inclusão:</strong> Lutamos para nivelar as oportunidades, alcançando aqueles que estão à margem da sociedade.</li>
                        <li><strong>Respeito e Empatia:</strong> Baseamos nosso trabalho na compreensão e no acolhimento das histórias de vida de cada beneficiário.</li>
                    </ul>
                </article>
            </section>
            
            <article class="section-support grid-col-12 grid-col-lg-4">
                <h2>Por Que Nos Apoiar?</h2>
                <p>Sua solidariedade é o motor da nossa missão.Cada doação se converte diretamente em um prato de comida, um livro ou uma vacina.</p>
                <p class="support-detail">Ainda que nosso impacto seja grande, a demanda nas comunidades vulneráveis cresce diariamente. Precisamos de você para expandir nossos programas de reforço escolar e levar mais mutirões de saúde para novos bairros. Sua contribuição é essencial para manter a esperança viva.</p>
                <img src="assets/Imagens/voluntarios.webp" alt="Voluntário ajudando crianças a estudar" class="responsive-img support-img">
                <a href="#cadastro" class="button-primary">QUERO ME CADASTRAR</a>
            </article>
        `
    },
    'projetos': {
        title: 'Projetos Sociais',
        content: `
            <section class="grid-col-12 project-list-wrapper">
                <h2>Nossos Projetos Sociais</h2>
                <p>Aqui você encontra todos os detalhes dos nossos programas de Saúde e Educação.</p>
                
                <article class="project-card">
                    <h3>Projeto Educação para Todos</h3>
                    <p>Investir em educação é quebrar o ciclo da pobreza. O Projeto Educação para Todos é a ponte entre a realidade difícil e um futuro de oportunidades para crianças em comunidades vulneráveis. Nossa equipe de educadores e voluntários oferece um ambiente de aprendizado seguro e estimulante, onde o conhecimento é valorizado. Ao garantir o acesso a aulas de qualidade e a materiais escolares que muitas famílias não podem custear, plantamos a semente da autonomia e do protagonismo, capacitando a nova geração a reescrever sua história.</p>
                    <img src="assets/Imagens/crianças.jpg" alt="Crianças  recebendo livros de voluntários" width="200">
                    
                    <div class="volunteer-actions" data-project-name="Projeto Educação para Todos"> 
                    <button class="button-primary js-action-voluntariar">Voluntariar Neste Projeto</button>
                    </div>
                </article>

                <article class="project-card">
                    <h3>Projeto Saúde Comunitária</h3>
                    <p>Acreditamos que a saúde não deve ser um privilégio, mas um direito acessível a todos. O Projeto Saúde Comunitária atua nas comunidades mais carentes, rompendo barreiras geográficas e socioeconômicas. Montamos postos de atendimento itinerantes, oferecendo consultas básicas, orientações nutricionais e exames rápidos para resgatar a dignidade e a qualidade de vida. O pilar do projeto são as campanhas de vacinação em massa, essenciais para construir uma barreira de proteção coletiva e assegurar um futuro mais saudável para as famílias que vivem na margem das grandes cidades.</p>
                    <img src="assets/Imagens/medicos.jpg" alt="Equipe médica atendendo pacientes em uma feira de saúde comunitária" width="300">
                    
                    <div class="volunteer-actions" data-project-name="Projeto Educação para Todos"> 
                    <button class="button-primary js-action-voluntariar">Voluntariar Neste Projeto</button>
                    </div>
                </article>
                
                <section>
                    <h2>Voluntariado</h2>
                    <p>Seja um voluntário! Dedique seu tempo para fazer a diferença. Inscreva-se no formulário de cadastro para oportunidades.</p>
                    <img src="assets/Imagens/plantando.jpg" alt="Grupo de voluntários plantando árvores em um parque comunitário" width="300">
                    <a href="#cadastro" class="button-primary">Quero Me Cadastrar</a>
                    
                    <h2>Como Doar</h2>
                    <p>Faça sua doação via PIX (chave: doacoes@ongsolidariedade.org.br) Toda contribuição é bem-vinda!</p>
                </section>
                
            </section>
        `
    },
    'cadastro-sucesso': {
        title: 'Sucesso!',
        content: `
            <section class="grid-col-12 success-wrapper">
                <div class="alert alert-success success-box">
                    <h2>🎉 Cadastro Concluído com Sucesso!</h2>
                    <p><strong>Sua solidariedade já está fazendo a diferença!</strong></p>
                    <p>Analisaremos seus dados e entraremos em contato em breve para as próximas etapas.</p>
                    
                    <div class="next-step-block">
                        <h3>Enquanto isso, inspire-se!</h3>
                        <p>Conheça em detalhes o trabalho que você irá apoiar.</p>
                        
                        <a href="#projetos" class="button-primary button-large">
                            Ver Nossos Projetos
                        </a>
                    </div>
                </div>
            </section>
        `
    },
    'cadastro': {
        title: 'Formulário de Cadastro',
        content: `
            <section class="grid-col-12 cadastro-form-wrapper">
                <header>
                    <h2>Formulário de Cadastro</h2>
                    <p>Preencha seus dados para se tornar um voluntário e ajudar nossos projetos sociais.</p>
                </header>
                
                <div id="global-alert" class="alert alert-error hidden">
                    <p><strong>Atenção:</strong> Foram encontrados erros. Por favor, corrija os campos destacados e tente novamente.</p>
                </div>
                
                <form id="registration-form" action="#" method="POST">
                    
                    <fieldset>
                        <legend>Dados Pessoais</legend>
                        <div>
                            <div>
                                <label for="nome">Nome Completo</label>
                                <input type="text" id="nome" name="nome" required minlength="3" placeholder="Seu nome completo">
                                <span class="error-message">Obrigatório. Mínimo 3 caracteres.</span>
                            </div>
                            
                            <div>
                                <label for="email">E-mail</label>
                                <input type="email" id="email" name="email" required placeholder="exemplo@email.com">
                                <span class="error-message">Formato de e-mail inválido.</span>
                            </div>
                            
                            <div>
                                <label for="cpf">CPF</label>
                                <input type="text" id="cpf" name="cpf" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00">
                                <span class="error-message">Formato: 000.000.000-00.</span>
                            </div>
                            
                            <div>
                                <label for="telefone">Telefone</label>
                                <input type="tel" id="telefone" name="telefone" required pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}" placeholder="(11) 99999-9999">
                                <span class="error-message">Formato: (11) 99999-9999.</span>
                            </div>
                            
                            <div>
                                <label for="dataNascimento">Data de Nascimento</label>
                                <input type="date" id="dataNascimento" name="dataNascimento" required>
                                <span class="error-message">Campo obrigatório.</span>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Endereço</legend>
                        <div>
                            
                            <div>
                                <label for="cep">CEP</label>
                                <input type="text" id="cep" name="cep" required pattern="\\d{5}-\\d{3}" placeholder="00000-000">
                                <span class="error-message">Formato: 00000-000.</span>
                            </div>
                            
                            <div>
                                <label for="endereco">Endereço</label>
                                <input type="text" id="endereco" name="endereco" required placeholder="Rua, Av, etc. e número">
                                <span class="error-message">Campo obrigatório.</span>
                            </div>
                            
                            <div>
                                <label for="cidade">Cidade</label>
                                <input type="text" id="cidade" name="cidade" required>
                                <span class="error-message">Campo obrigatório.</span>
                            </div>
                            
                            <div>
                                <label for="estado">Estado</label>
                                <select id="estado" name="estado" required>
                                    <option value="">Selecione...</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                                <span class="error-message">Selecione um estado.</span>
                            </div>
                        </div>
                    </fieldset>
                    
                    <div>
                        <button type="submit" class="button-primary">
                            Enviar Cadastro
                        </button>
                    </div>
                </form>
            </section>
        `
    }
};