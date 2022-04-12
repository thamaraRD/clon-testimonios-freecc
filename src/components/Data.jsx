const parse = require("html-react-parser");

export const Data = [
  {
    name: "Shawn Wang",
    country: "Singapur",
    photo: "shawn",
    position: "Ingeniero de Software",
    company: "Amazon",
    testimonial: parse(
      "Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. <b>freeCodeCamp cambió mi vida</b>."
    ),
  },
  {
    name: "Sarah Chima",
    country: "Nigeria",
    photo: "sarah",
    position: "Ingeniera de Software",
    company: "ChatDesk",
    testimonial: parse(
      "<b>freeCodeCamp fue la puerta de entrada a mi carrera</b> como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
    ),
  },
  {
    name: "Emma Bostian",
    country: "Suecia",
    photo: "emma",
    position: "Ingeniera de Software",
    company: "Spotify",
    testimonial: parse(
      "Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en <b>freeCodeCamp me dio las habilidades</b> y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
    ),
  },
];
