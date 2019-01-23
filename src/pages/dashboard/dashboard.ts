import { Component } from "@angular/core";
import {
  ModalController,
  Platform
} from "ionic-angular";

import { ChallengeDescriptionPage } from "../modals/challenge-description/challenge-description";

@Component({
  selector: "page-home",
  templateUrl: "dashboard.html"
})
export class DashboardPage {

  public dataChallengeList = [];

  public dataList = [
    {
      img: 'https://goo.gl/X1uwk9',
      title: 'Alcachofa',
      type: 'Alimentos alcalinos',
      text: 'La alcachofa el alimento que te cuida por dentro y por fuera. Es de fácil digestión y tiene propiedades muy beneficiosas para la salud',
      title2: 'Propiedades',
      text2: '•	Es aliada del hígado por su contenido en cinarina y de otras sustancias activas. Facilita la función del hígado colaborando en su correcta depuración y protección. Aumenta la secreción de bilis, favoreciendo así́ la función desintoxicante del hígado. ' +
        '\n•	Mejora las digestiones pesadas producidas por comidas excesivamente grasas.' +
        '\n•	Mejorar o evitar el estreñimiento por su contenido en fibra que tiene un efecto laxante suave.' +
        '\n•	Propiedades diuréticas, aumenta la producción de orina y ayuda a eliminar con ella sustancias tóxicas.' +
        '\n•	Disminuir el colesterol al facilitar su eliminación junto con la bilis para prevenir la arterioesclerosis.' +
        '\n•	Es óptima para los diabéticos, ya que contiene inulina, un hidrato de carbono fácilmente asimilable por ellos.',
      title3: 'Duración',
      text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
        'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
        'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
        'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
        'laborum.',
      circles: [
        {title: 'Días', note: 30},
        {title: 'Dosis diarias', note: 3},
        {title: 'Efectividad', note: 4.5},
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1521727747887-11e4fb3e523c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3fa84affac572e661b95c6cfe0c6bf2&auto=format&fit=crop&w=1352&q=80',
      title: 'Baños',
      type: 'challenge',
      text: 'Lorem <b>ipsum dolor sit amet</b>, consectetur adipisicing elit, sed\n' +
        'do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip.',
      title2: 'Beneficios',
      text2: '•	Relajante. Tu cuerpo al entrar en contacto con el agua caliente y los minerales que las sales marinas contienen liberará las toxinas, abrirá los poros y proporcionará un sentimiento de relajación de todos tus músculos, con lo que te desharás del estrés. ' +
        '\n•	Desintoxicante. Gracias a que tus poros se encontrarán abiertos y las sales ayudan a lavar los metales pesados y toxinas de las células de la piel, se eliminarán de manera natural. El efecto de desintoxicación de un baño de sal puede compararse con tres días de ayuno. ' +
        '\n•	Mejora la circulación. Debido a que tu cuerpo entrará en contacto como minerales como el zinc, calcio, potasio entre otros, tu sangre se llenará de nutrientes que la harán trabajar de mejor manera; el agua caliente de igual manera al relajarte de tensiones secundará el trabajo.' +
        '\n•	Humecta la piel. En la sal del mar muerto, por ejemplo, la cantidad de magnesio lograría este efecto humectante, ya que de acuerdo con una investigación publicada en el International Journal of Dermatology, este químico une el agua a la piel promoviendo su crecimiento celular.' +
        '\n•	Alivia los dolores musculares. El University of Maryland Medical Center recomienda los baños de sales de sulfuro y mar muerto, ya que está comprobado que ayudan a reducir los síntomas de artritis, oseoartritis y artritis psoriática.' +
        '\n•	Antimicrobianas. La misma International Journal of Dermatology, publica otra investigación en la que se demuestra que, las sales del mar muerto en su composición química de sal logran proporcionar una protección contra los microbios y su formación.' +
        '\n•	Sencillos de hacer. Pasando a una parte menos técnica, el hecho de que sean prácticos es un punto muy importante, en realidad no necesitas más que una bañera, agua y un poco de la variedad de sales que te gusten más para lograr un efecto de relajación total' +
        '.',
      title3: 'Duración',
      text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
        'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
        'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
        'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
        'laborum.',
      circles: [
        {title: 'Días', note: 30},
        {title: 'Dosis diarias', note: 3},
        {title: 'Efectividad', note: 4.5},
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88f76505743ef2ed04101148ba74269e&auto=format&fit=crop&w=2850&q=80',
      title: 'Bienestar',
      type: 'challenge',
      text: 'Lorem <b>ipsum dolor sit amet</b>, consectetur adipisicing elit, sed\n' +
        'do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip.',
      title2: 'Beneficios',
      text2: 'La clave es que aquí y ahora lo tenemos todo. Si no podemos ser felices' +
        ' aquí y ahora no podremos serlo nunca, porque siempre nos va a faltar algo' +
        ' o vamos a tener miedo de que nos pase algo. Pero si somos capaces de estar' +
        ' aquí y ahora sin juzgar, disfrutando de lo que está ocurriendo en cada momento,' +
        ' podremos ser felices siempre. Esto es mindfulness.',
      title3: 'Duración',
      text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
        'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
        'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
        'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
        'laborum.',
      circles: [
        {title: 'Días', note: 30},
        {title: 'Dosis diarias', note: 3},
        {title: 'Efectividad', note: 4.5},
      ]
    },
    {
      img: 'https://images.unsplash.com/photo-1534322989717-f57e38ba9120?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5bacabe8d1c88bfa90b369632e9caea0&auto=format&fit=crop&w=2095&q=80',
      title: 'Dieta',
      type: 'challenge',
      text: 'Disfrutar de una buena comida es uno de los mejores placeres de la vida, ' +
        'pero cuando lo hacemos mal o comemos en exceso puede traer consecuencias a la salud. ' +
        'Una dieta completa es la que contiene todos los nutrimentos que se requieren en donde se ' +
        'combinan todos los grupos de alimentos. ',
      title2: 'Tips',
      text2: 'Cuando escuchamos dieta normalmente lo relacionamos con comer poco y pasar hambre ' +
        'cuando en realidad hace referencia a todos los alimentos y platillos que consumimos durante' +
        ' el día.\n Entonces ¿Cómo es tu dieta?.\n Las recomendaciones son:\n ' +
        'bullet Desayuno 20% 260 kcal\n'+
        'bullet Refrigerio media mañana (10% 230 kcal)\n' +
        'bullet Comida (35% 805kcal)\n' +
        'bullet Merienda (10% 230 kcal)\n' +
        'bullet Cena (565 25% kcal)\n' +
        'bullet Poco sodio no sobrepase los 6 g/d/persona\n',
      title3: 'Duración',
      text3: 'initTb' +
        'initEl ' +
        'iniHd Grupo de alimentos endHd' +
        'iniHd Rango recomendado de porciones / día endHd' +
        'iniHd Indicaciones visuales para las porciones endHd' +
        'endEl' +
        //elemento1
        'initEl ' +
        'iniTe Cereales y tuberculos endTe' +
        'iniTe 6-8 endTe' +
        'iniTe 1 reb. de pan = tamaño de un CD.' +
        '1 taza de cereal s/leche = tamaño de una pelota de béisbol.' +
        '½ taza de pasta, papas o arroz = tamaño una flanera individual o tamaño de un mouse  de computadora (sin los botones).' +
        'También puede ser del tamaño de su puño. endTe' +
        'endEl' +
        //elemento 2
        'initEl ' +
        'iniTe Leguminosas endTe' +
        'iniTe 1-2 endTe' +
        'iniTe 1taza de frijoles, lentejas o habas = tamaño de una pelota de béisbol. endTe' +
        'endEl' +

        //Fin de tabla
        'endTb',
      circles: [
        {title: 'Días', note: 30},
        {title: 'Dosis diarias', note: 3},
        {title: 'Efectividad', note: 4.5},
      ]
    }
  ];

  constructor(
    public modalCtrl: ModalController,
    public platform: Platform
  ) {
    for(let challenge of this.dataList){
      challenge.text2 = challenge.text2.replace(/\n/g, "<br />");
      challenge.text2 = challenge.text2.replace(/bullet/g, "&#8226;");
      //Text3
      challenge.text3 = challenge.text3.replace(/initTb/g, "<table style='width:100%'>");
      challenge.text3 = challenge.text3.replace(/endTb/g, "</table>");
      challenge.text3 = challenge.text3.replace(/initEl/g, "<tr>");
      challenge.text3 = challenge.text3.replace(/endEl/g, "</tr>");
      challenge.text3 = challenge.text3.replace(/iniHd/g, "<th>" );
      challenge.text3 = challenge.text3.replace(/endHd/g, "</th>");
      challenge.text3 = challenge.text3.replace(/iniTe/g, "<td>");
      challenge.text3 = challenge.text3.replace(/endTe/g, "</td>");
      if(!platform.is('mobile'))
        challenge.img = challenge.img;
        this.dataChallengeList.push(challenge);
    }
  }

  presentContactModal( challenge ) {
    console.log("title parent: " + challenge.title);
    let descriptionModal = this.modalCtrl.create( ChallengeDescriptionPage, challenge );
    descriptionModal.present();
  }

  doRefresh(event){
    /*this.dataList = [
      {
        img: 'https://goo.gl/X1uwk9',
        title: 'Alcachofa',
        type: 'challenge',
        text: 'Lorem <b>ipsum dolor sit amet</b>, consectetur adipisicing elit, sed\n' +
          'do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip.',
        title2: 'Profit',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
          'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
          'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
          'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
          'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
          'laborum.',
        title3: 'Duración',
        text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
          'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
          'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
          'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
          'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
          'laborum.',
        circles: [
          {title: 'Días', note: 30},
          {title: 'Dosis diarias', note: 3},
          {title: 'Efectividad', note: 4.5},
        ]
      },
      {
        img: 'https://images.unsplash.com/photo-1521727747887-11e4fb3e523c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3fa84affac572e661b95c6cfe0c6bf2&auto=format&fit=crop&w=1352&q=80',
        title: 'Baños',
        type: 'challenge',
        text: 'Lorem <b>ipsum dolor sit amet</b>, consectetur adipisicing elit, sed\n' +
          'do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip.',
        title2: 'Beneficios',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
          'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
          'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
          'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
          'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
          'laborum.',
        title3: 'Duración',
        text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
          'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
          'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
          'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
          'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
          'laborum.',
        circles: [
          {title: 'Días', note: 30},
          {title: 'Dosis diarias', note: 3},
          {title: 'Efectividad', note: 4.5},
        ]
      },
      {
        img: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88f76505743ef2ed04101148ba74269e&auto=format&fit=crop&w=2850&q=80',
        title: 'Bienestar',
        type: 'challenge',
        text: 'Lorem <b>ipsum dolor sit amet</b>, consectetur adipisicing elit, sed\n' +
          'do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip.',
        title2: 'Beneficios',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
          'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
          'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
          'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
          'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
          'laborum.',
        title3: 'Duración',
        text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
          'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
          'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
          'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
          'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
          'laborum.',
        circles: [
          {title: 'Días', note: 30},
          {title: 'Dosis diarias', note: 3},
          {title: 'Efectividad', note: 4.5},
        ]
      },
      {
        img: 'https://images.unsplash.com/photo-1534322989717-f57e38ba9120?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5bacabe8d1c88bfa90b369632e9caea0&auto=format&fit=crop&w=2095&q=80',
        title: 'Dieta',
        type: 'challenge',
        text: 'Lorem <b>ipsum dolor sit amet</b>, consectetur adipisicing elit, sed\n' +
          'do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip.',
        title2: 'Beneficios',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
          'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
          'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
          'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
          'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
          'laborum.',
        title3: 'Duración',
        text3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\n' +
          'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n' +
          'enim ad minim veniam, quis nostrud exercitation ullamco\n' +
          'laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n' +
          'irure dolor in reprehenderit in voluptate velit esse cillum dolore\n' +
          'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
          'proident, sunt in culpa qui officia deserunt mollit anim id est\n' +
          'laborum.',
        circles: [
          {title: 'Días', note: 30},
          {title: 'Dosis diarias', note: 3},
          {title: 'Efectividad', note: 4.5},
        ]
      }
    ];
    this.dataChallengeList = [];

    for(let challenge of this.dataList){
      if(!this.platform.is('mobile'))
        challenge.img = challenge.img;

      this.dataChallengeList.push(challenge);

    }*/
    event.complete();
  }

}
