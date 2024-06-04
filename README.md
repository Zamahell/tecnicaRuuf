<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Instalación de dependencias

```bash
$ yarn install
```

## Levantar la aplicación

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

Prueba técnica Ruuf Solar para el puesto de desarrollador jr.

El objetivo de esta prueba técnica es demostrar a través de código la solución para el ejercicio de "¿Cuántos paneles caben?".

Para esta solución, he utilizado NestJS, un framework modular de Node.js, en el cual:

1. Primero hago unas configuraciones en el main para que tome el ValidationPipe, el cual nos servirá para las validaciones del DTO (Data Transfer Object).

2. Configuro el DTO con el fin de que, al momento de usarlos en Postman para generar una petición, sea validado con las siguientes notaciones: @IsNotEmpty (no puede estar vacío), @IsNumber (tiene que ser un número) y @Min para que tenga un valor mínimo.

3. Configuro el controller donde se hará la petición, aquí un método POST para hacer la solicitud.

4. El service, donde ocurre la lógica de lo que estoy realizando, primero calculo la cantidad de paneles que caben en las medidas del techo (las medidas que se ingresan a través de Postman), y veo la cantidad que caben, también considerando el resto o el espacio restante que queda. Hago una rotación del panel para ver si caben más.

5. Al final, sumo las cantidades de paneles (con resto si es que hay) y la cantidad de paneles rotados. En el return comparo, usando el método max, cuál tiene mayor cantidad de paneles (comparando la suma de los paneles y la suma de los paneles rotados). Esto con el fin de retornar el valor máximo al controller, y que desde acá se muestre cuál tiene una mayor cantidad de paneles en el techo, con rotación o sin esta (recordando que consideramos el resto).