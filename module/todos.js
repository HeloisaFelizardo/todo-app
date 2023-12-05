/* Projeto de aplicativo para tarefas
Neste projeto, você escreverá o classque capacita um aplicativo Todo. O código fornecido no index.jsestá relacionado ao DOM que você aprenderá a implementar nos capítulos DOM.

Já fornecemos uma classe vazia Todos.

Vimos principalmente exemplos de construtores que capturam seus parâmetros. No entanto, esse construtor não precisa capturar nada. Ele constructordefine uma variável de instância todoscomo uma matriz de objetos. Incluímos 2 tarefas de exemplo para que você possa visualizar a estrutura de cada objeto de tarefa.

Você precisa implementar 7 métodos de instância para que o aplicativo funcione. Assim que você tiver os 2 primeiros métodos implementados, poderá testá-los na guia do navegador .

1. getAll()
Este método deve retornar todos os todos.

2. getCount()
Este método deve retornar um número representando o número de todos.

Depois de implementar esses 2 métodos, você poderá ver os 2 exemplos de todos renderizados na guia do navegador . Tente inserir uma nova tarefa usando o formulário. Ele falhará até que você implemente o próximo método.

3. add(título, categoria)
Este método recebe o title(string) e o category(string). Ele deve adicionar um novo objeto ao array de objetos existente, seguindo o mesmo formato.
Uma vez implementado este método, você poderá adicionar todos usando o formulário.

4. getWork()
Este método deve retornar um array de objetos contendo apenas os todos que possuem uma workcategoria.
O formato dos objetos dentro do array deve permanecer o mesmo.

5. getWorkCount()
Este método deve retornar um número representando quantos todos possuem a workcategoria. tente manter seu código DRY (Don't Repeat Yourself).

Agora você poderá filtrar todos por workcategoria na guia do navegador .

6. getPessoal()
Este método deve retornar um array de objetos contendo apenas os todos que possuem uma personalcategoria.
O formato dos objetos dentro do array deve permanecer o mesmo.

7. getPersonalCount()
Este método deve retornar um número representando quantos todos possuem a personalcategoria. tente manter seu código DRY (Don't Repeat Yourself).

Agora você poderá filtrar todos por personalcategoria na guia do navegador . Assim, todo o projeto está completo. */

export default class Todos {
	// Do NOT modify the constructor
	constructor() {
		// we don't capture any parameters here
		// we're defining an array of todos with two example todos
		this.todos = [
			{
				title: 'Learn JavaScript',
				category: 'work',
			},
			{
				title: 'Meditate',
				category: 'personal',
			},
		];
	}

	// TODO: define remaining instance methods
	getAll = () => this.todos;

	getCount = () => this.todos.length;

	add = (title, category) => this.todos.push({ title, category });

	getWork = () => this.todos.filter((todo) => todo.category === 'work');

	getWorkCount = () => this.getWork().length;

	getPersonal = () =>
		this.todos.filter((todo) => todo.category === 'personal');

	getPersonalCount = () => this.getPersonal().length;
}
