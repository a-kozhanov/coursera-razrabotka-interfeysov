### Задание по программированию: Сложить два числа

В этом задании необходимо сложить два числа. Цель заданий — настроить окружение и запустить простую программу.

```
var sum = require('./index.js');

console.info(sum(12, 33)); 

// 45

console.info(sum(101, '17')); 

// 118
```

### Заготовки
exercise.zip

### Условия
Функция в качестве аргументов может принимать как положительное или отрицательное число, так и строку, в которой содержится число (например, "12").
Если переданная строка содержит не только цифры, то функция должна вернуть NaN. Например, нельзя сложить строку "12 бегемотов" и строку "38 попугаев".

### Подсказка
Для решения задачи рекомендуем познакомиться с [исключениями][1], а также методами [parseInt][2], [NaN][3] и [Number][4].

<b>Важно.</b> В рамках курса мы следуем стандарту языка EcmaScript 5. Подробнее о EcmaScript вы можете узнать в [википедии][w].

[1]: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/throw
[2]: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseInt
[3]: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN
[4]: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
[w]: https://ru.wikipedia.org/wiki/ECMAScript

