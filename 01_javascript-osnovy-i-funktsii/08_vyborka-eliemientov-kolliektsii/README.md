### Задание по программированию: Выборка элементов коллекции

В этом задании необходимо написать библиотеку, которая упростит работу с коллекцией однотипных объектов.

Для управления коллекцией нужно реализовать три функции:

* query — функция, выполняющая запрос с заданными операциями;
* select— операция выбора необходимых полей объектов;
* filterIn— операция фильтрации объектов коллекции.

```
В этом задании необходимо написать библиотеку, которая упростит работу с коллекцией однотипных объектов.

Для управления коллекцией нужно реализовать три функции:

query — функция, выполняющая запрос с заданными операциями;
select— операция выбора необходимых полей объектов;
filterIn— операция фильтрации объектов коллекции.
```

### Заготовки
exercise.zip

### Условия
* После выполнения функции 'query' не должна измениться исходная коллекция.
* Если в функцию 'query' передать только коллекцию, то вернётся её копия.
* Операция 'select' должна игнорировать несуществующие в объекте поля.
* Несколько операций 'select' должны отработать как одна с пересечёнными аргументами. Например, если мы выбираем поля a и b, а затем b и c, то в результате должно выбраться только поле b.
* Несколько операций 'filterIn' должны отработать как одна с пересечёнными аргументами. Например, если фильтруем поле по значениям a и b, а затем по b и c, то в результате отфильтроваться должно только по значени b.
* Операции должны выполняться в определённом порядке. В первую очередь происходит фильтрация, а затем выборка полей. Таким образом, можно фильтровать коллекцию даже по тем полям, которые не указаны в функции select.
* Порядок элементов после выполнения операций должен сохраниться.
* Гарантируется, что функция 'query' будет вызываться корректно. Дополнительную проверку аргументов делать не нужно.
* Предполагается, что поля объектов имеют значения типа String или Number.

##### Функция 'query'
Выполняет запрос к коллекции. Принимает коллекцию и операции. Возвращает коллекцию после применения всех операций. В качестве операций может быть использован 'filterIn', 'select'.

```
lib.query(collection, operation1, operation2, ...);
```

##### Операция 'select'
Выполняет запрос к коллекции. Принимает коллекцию и операции. Возвращает коллекцию после применения всех операций. В качестве операций может быть использован 'filterIn', 'select'.

```
lib.select('fieldName1', 'fieldName2', ...);
```

##### Операция 'filterIn'
Позволяет отфильтровать коллекцию. Принимает название поля и допустимые значения. После выполнения фильтрации должны остаться объекты, у которых поле имеет одно из допустимых значений.

```
lib.filterIn('fieldName', ['acceptedValue1', 'acceptedValue2', ...]);
```

### Подсказка
К решению данной задачи есть два подхода:

Из функций select и filterIn можно возвращать названия операций с параметрами. И позже ориентироваться на них при выполнении функции query.

```
function select () {
    // var fields = ...
    
    return ['select', fields];
}
```

Из функции можно возвращать функции, в которые позже будет передана коллекция. Для определения порядка понадобится возвращать именнованные функции, чтобы позже по именам определить порядок выполнения.

```
function select () {
    // var fields = ...
    
    return ['select', fields];
}
```
