<details>
<summary>component-class-suffix</summary>
<p>
No arquivo tslint.json, a chave <i>component-class-suffix</i>Separa responsabilidade de página e componente
</p>
</details>
<details>
<summary>ANGULAR CLI type</summary>
<p>
Novo parametro do Angular Cli para criar novos tipos de componentes ng g c exemplo --type page
https://angular.io/cli/generate#class
</p>
</details>
<details>
    <summary>NGRX</summary>
<div>
    Utilizar o NGRX é otimo para aplicação escalar facilmente e não ter inconsistência de dados caso    varios componentes utilizem da mesma informação.
    Ciclo de como funciona
    <div align="center">
    <img width=50% height=50% src="./img/state-management-lifecycle.png">
    </div>
    <ol>
    <li>StoreModule.forRoot = Alterações globais</li>
    <li>StoreModule.forFeature = Alterações pelo componente/página</li>
    </ol>
    <p>
    A store é um JSON que guarda um estado da aplicação, no appModule é sua inicialização e nos   módulos filhos é adicionado as propriedades que são os reducers.
    </p>
    <details>
        <summary>Reducer</summary>
        <div>
        A estrutura de um reducer é:
        <ul>
        <li>Interface: Estrutura de parametros.</li>
        <li>Estado Inicial: const que precisa ser do tipo Interface.</li>
        <li>Reducer: invocação da função createReducer() da lib do ngrx/store.</li>
        <li>Exportação da função: Essa função tem como um parametro o estado, e uma ação e será invocada no StoreModule.forFeature no módulo que deseja.</li>
        </ul>
        </div>
    </details>
    <details>
        <summary>Action</summary>
        <div>
        Quando uma ação é dispachada  pelo pacote que manipula a store, e ela é capturada pelo reducer
        e dependendo de como ela for é manipulado algo da store, e aceitam props então podemos enviar algo para a store.
        <ul>
        <li>Ao criar a Action Utilize o padrão com [] e definir qual feature está executando.</li>
        <li>import * as fromHomeActions from "./home.actions"</li>
    </ul>
    <p>
        Quando a action é disparada o reducer realiza uma função de projeção recebendo o estado e a action(nesse caso as props)
        O spread operator é indicada justamente para preencher o estado com as informações que já possui e modifique somente a desejada.
        <p>
            <code>
                const reducer = createReducer(
        homeInitialState,
        on(fromHomeActions.changeText, (state, {text}) => ({
            ...state,
            text
        }))
    );
            </code>
        </p>
    </p>
        </div>
    </details>
    <details>
        <summary>Selector</summary>
        <div>
        <p>createFeatureSelector = Irá carregar toda a store referente o parametro dado. Não é interessante quando possui grande volume de dados.</p>
        <p>createSelector = Selecionar porção especifica de parte da store, </p>
    </div>
    </details>
    <details>
        <summary>Effects</summary>
    <div>
    <p>
      Diferente de actions e selectors que são componentes declarados que são utilizados, os effects são como services que precisam ser injetados e bindados com app module, precisa ser declarada como provider.
      Ele pode receber uma action ou disparar action.
      Quando um reducer não dispatcha onde foi invocada no effects, é necessário utilizado { dispatch: false }
      Ele pode ser uma reação no lado servidor depende de uma action invocada
    </p>
    </div>
    </details>
</div>
</details>
