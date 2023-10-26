---
title: Arquitectura Micro-frontends (MFE)
description: Entendamos la necesidad y el valor que nos da una arquitectura como Microfrontends antes de entrar en su adopcion.
date: 2023-09-28
---

Es crucial entender la arquitectura de MFE antes de considerar su adopción en nuestro negocio.

Entender las ventajas, desventajas y riesgos asociados a los MFE nos permitira tomar decisiones bien fundamentadas. Asimismo, entender el contexto específico en el que se aplica la arquitectura, guiados por la famosa palabra ‘depende’, ya que la adopción de MFE, como cualquier otra arquitectura, debe ajustarse a las circunstancias particulares de cada negocio.

En este artículo, desglosaremos los conceptos clave de MFE.

# Algunos conceptos

Antes de entrar en detalles, definamos un lenguaje común sobre elementos clave en los MFE:

## Terminologia

- **Sistema de diseño:** Un framework dinámico que unifica el estilo visual y facilita la colaboración entre equipos.
- **Componentes:** Bloques de código que ofrecen funcionalidades específicas, generalmente independientes del contexto empresarial.
- **Aplicaciones web:** Plataformas digitales formadas por componentes que juntos cumplen una función o brindan un servicio.
- **Micro-frontends(MFE):** permite a los equipos operar de manera independiente al dividir la aplicación web en unidades de negocio modulares, cada una con su propio desarrollo y despliegue autónomo.

## ¿Cuándo usar MFE?

La decisión de adoptar una arquitectura de MFE debe ser estratégica y fundamentada en la estructura y necesidades de la empresa, no simplemente una respuesta a tendencias de moda.

Algunas razones que podrían justificar esta elección incluyen:

- **Migración de Frameworks:** Ya sea para actualizar a una nueva versión (como de Vue2 a Vue3) o para cambiar a un framework completamente diferente (de Angular a Vue o React).
- **Adquisición de Empresas:** Si una empresa que utiliza React adquiere otra que usa Vue, y ambas necesitan integrarse sin migrar todas sus aplicaciones.
- **Desacople y Unidades de Negocio Autónomas:** Si el objetivo es fomentar la autonomía y el desacople en las unidades de negocio, una arquitectura MFE podría optimizar significativamente los tiempos en pruebas, pipelines y despliegues, mejorando así el proceso de CI/CD.
- **Escalabilidad:** Si se anticipa un rápido crecimiento en funcionalidades o tráfico de usuarios, MFE permite escalar cada unidad de negocio de manera independiente.

Cada negocio es un universo lleno de retos, y es posible que las situaciones anteriores no se adapten a todas las circunstancias. Sin embargo, pueden servir como punto de partida para tomar la decisión.

# Microfrontends(MFE)

Hay diversos autores que tratan el tema de los Microfrontends.

Particularmente, me ha gustado como [Luca Mezzalira](https://medium.com/u/9119c54d607d?source=post_page-----23814266020b--------------------------------) aborda el tema en su libro [Building Micro-Frontends](https://a.co/d/8q7VQSa) y algunos otros recursos en blogs y canales de you tube, veamos entonces algunos de estos conceptos que en conjunto formarían nuestro framework de trabajo para MFE

# 1. Definir como distribuiremos nuestros de MFE

![](https://miro.medium.com/v2/resize:fit:1400/1*niGNgzuLn1d-oNVkBDQfSQ.jpeg)

Explorando Estrategias de Microfrontends: Comparación entre la distribución horizontal y vertical, destacando cómo diferentes equipos colaboran en función de dominios de negocio o compartiendo responsabilidades en una única vista.

Al distribuir nuestro MFE, podemos identificar dos flujos principales:

- **Horizontal**: En este enfoque, delegamos secciones de nuestra aplicación a diferentes equipos que trabajan en la misma vista. Se trata de una vista con múltiples responsabilidades.
- ⭐ **Vertical**: Aquí, dividimos nuestras aplicaciones por dominios de negocio, que generalmente son gestionados por un único equipo. Cada unidad de negocio tiene una vista propia con un solo equipo responsable.

Como en todo contexto, la elección entre estos flujos dependerá de las necesidades específicas y de quién las implemente. Sin embargo, se recomienda optar por la opción vertical, ya que esto simplificará el trabajo del equipo.

La elección entre estas dos arquitecturas presenta diferentes retos, descritos de manera más detallada en este artículo: [identify micro-frontends](https://medium.com/dazn-tech/identifying-micro-frontends-in-our-applications-4b4995f39257) A continuación, compartiré algunas lecciones aprendidas.

# 2. Definir dónde realizaremos la composición y el enrutamiento de nuestros MFE

![](https://miro.medium.com/v2/resize:fit:1400/1*Es8v3gpUm0macU7uJkGOUg.jpeg)

Composición de Microfrontends: Una comparativa visual entre la composición realizada en el lado del cliente, en el edge y en el servidor, ilustrando cómo cada enfoque maneja la integración y entrega de componentes al usuario final.

## Composición del lado del cliente

Generalmente, necesitaremos una aplicación contenedora que se encargará de hacer el llamado al MFE.

Este contenedor (Shell app) también suele gestionar tareas como enrutamiento, carga de componentes y páginas de error, logica de autenticación y permisos.

Algunos frameworks que permiten hacer esto son [Single SPA](https://single-spa.js.org/), Module-federation ([Webpack](https://webpack.js.org/concepts/module-federation/) — [Vite](https://github.com/originjs/vite-plugin-federation) ), [Client side transclusion](https://github.com/gustafnk/h-include), [Piral](https://github.com/smapiot/piral) entre [otros](https://itnext.io/11-micro-frontends-frameworks-you-should-know-b66913b9cd20)

## Composicion en el edge.

En esta distribución, tanto la composición como el enrutamiento se realizan en el edge.

El enrutamiento se basa en la URL actual, y la composición se logra mediante la modificación del body.

Personalmente, he tenido experiencia usando este enfoque con AWS: un S3 donde almaceno los recursos, un CloudFront para la distribución y una Lambda@Edge para interpretar la ruta y cambiar el origen. Desde aquí, podemos agregar autenticación con Cognito y seguridad con Route 53, entre otros.

## Composicion en el servidor.

En este escenario, la composición se realiza en el servidor, mientras que el enrutamiento puede llevarse a cabo tanto en el servidor como en el edge.

Aunque no he tenido la oportunidad de implementar MFE del lado del servidor, en el [post](https://lucamezzalira.medium.com/micro-frontends-decisions-framework-ebcd22256513) de Lucas se mencionan algunas opciones como [Ara Framework](https://ara-framework.github.io/website/), [Open Components](https://opencomponents.github.io/), [Piral](https://piral.io/) or [Tailor.js](https://github.com/zalando/tailor). Aca Lucas recomienda usar el lado del cliente para composición vertical y cualquiera de las tres opciones para composición horizontal.

Si estás interesado en este enfoque, te sugiero leer el post de Lucas e indagar un poco más para entender mejor las posibilidades y limitaciones de la composición en el servidor.
[ Micro-frontends decisions framework](https://lucamezzalira.medium.com/micro-frontends-decisions-framework-ebcd22256513)

# 3. Comunicacion

Minimizar la comunicación entre MFE es clave para mantener la independencia y la responsabilidad única en cada dominio de negocio.

Si optas por una composición horizontal, considera usar eventos personalizados o librerías de terceros para la comunicación. En una composición vertical, cada dominio de negocio debería ser autónomo. Si hay mucha comunicación entre ellos, es probable que necesites reevaluar la partición de tus dominios. Algunas estrategias podrían incluir variables en las rutas o el uso de almacenamiento web.

La comunicación mínima entre MFE no solo simplifica la gestión, sino que también refuerza la autonomía y la responsabilidad en cada dominio de negocio.

# 4. Conclusión.

Hemos explorado varios aspectos de los Microfrontends (MFE), desde la decisión de adoptar esta arquitectura hasta las diferentes formas de distribución y comunicación entre MFE.

Cada enfoque tiene sus propias ventajas, desventajas y desafíos, y la elección dependerá en gran medida del contexto específico de tu negocio y tus necesidades técnicas.

Sin embargo, este es solo el comienzo. Hay muchos otros temas pendientes que merecen una discusión detallada, como CI/CD, manejo de equipos y liderazgo, métricas, despliegues y contratos, así como ejemplos prácticos en el uso de MFE tanto en el cliente como en el edge.

Te invito a compartir tus pensamientos, experiencias y feedback en los comentarios. Tu aporte puede enriquecer esta conversación y ayudar a otros a navegar por la Arquitectura Microfrontends.

## References:

- [Building Micro-frontends](https://www.oreilly.com/library/view/building-micro-frontends/9781492082989/) by [Luca Mezzalira](https://medium.com/u/9119c54d607d?source=post_page-----23814266020b--------------------------------)
- [Micro Frontends in action](https://micro-frontends.org/) by [Michael Geers](https://medium.com/u/4e4d69830e74?source=post_page-----23814266020b--------------------------------)
- [Micro Frontends](https://martinfowler.com/articles/micro-frontends.html) by Martin Fowler
