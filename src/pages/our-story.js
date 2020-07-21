import React from 'react';
import { Link } from 'gatsby';

import Layout from 'src/components/Layout';
import MiraFarmsImage1 from 'src/images/mira-farms-1.jpeg';
import SEO from 'src/components/SEO';

const OurStoryPage = () => (
  <Layout>
    <SEO title="Our Story" />
    <div className="flex flex-col mt-16 -mx-8 justify-left">
      <div className="story-section">
        <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-gray-300 border-dashed"></div>

        <div className="flex-col items-start flex-1 max-w-4xl px-8 text-xl font-semibold leading-snug tracking-tight text-justify md:text-xl">
          <h1 className="text-4xl font-bold leading-none text-brown md:text-5xl lg:text-6xl ">
            An Idea Is Born
          </h1>

          <time
            datetime="2017-09-01"
            className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
          >
            April 2018
          </time>

          <p className="mt-8 mb-12">
            mandou started a farm and he wanted to grow rice.
            <br />
            [Flashback] Quelques jours avant, on leur annonce que leur poste va
            être remplacé par des indépendants, qu'ils n'auront pas
            d'augmentation et que la prochaine mission serait à 2h de chez eux!
            C'en était fini, ils devaient prendre leur destin en main. Une
            semaine plus tard, ils démissionnaient...
          </p>
        </div>
      </div>
      <div class="flex flex-wrap lg:justify-left pl-4">
        <a
          class="w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
          title="Burris Custom Turrets"
          href="/brands/burris/scopes"
        >
          <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
            <img
              class="sm:h-32 w-3/4 sm:w-full mx-auto"
              alt="Burris Custom Turrets"
              src="https://imgur.com/GHWFqRs.jpg"
            ></img>
            <h2 class="text-sm sm:text-xl mb-0 text-gray-900">Burris</h2>
          </div>
        </a>
        <a
          class="w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
          title="Bushnell Custom Turrets"
          href="/brands/bushnell/scopes"
        >
          <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
            <img
              class="sm:h-32 w-3/4 sm:w-full mx-auto"
              alt="Bushnell Custom Turrets"
              src="https://imgur.com/nEbeaju.jpg"
            ></img>
            <h2 class="text-sm sm:text-xl mb-0 text-gray-900">Bushnell</h2>
          </div>
        </a>
        <a
          class="w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
          title="Kahles Custom Turrets"
          href="/brands/kahles/scopes"
        >
          <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
            <img
              class="sm:h-32 w-3/4 sm:w-full mx-auto"
              alt="Kahles Custom Turrets"
              src="https://imgur.com/FxqGLzn.png"
            ></img>
            <h2 class="text-sm sm:text-xl mb-0 text-gray-900">Kahles</h2>
          </div>
        </a>
        <a
          class="w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
          title="Leupold Custom Turrets"
          href="/brands/leupold/scopes"
        >
          <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
            <img
              class="sm:h-32 w-3/4 sm:w-full mx-auto"
              alt="Leupold Custom Turrets"
              src={MiraFarmsImage1}
            ></img>
            <h2 class="text-sm sm:text-xl mb-0 text-gray-900">Leupold</h2>
          </div>
        </a>
      </div>
      <div className="story-section">
        <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-gray-300 border-dashed"></div>

        <div className="flex-col items-start flex-1 max-w-4xl px-8 mt-16 text-xl font-semibold leading-snug tracking-tight text-justify">
          <h1 className="text-4xl font-bold leading-none text-brown md:text-5xl lg:text-6xl ">
            A Company Is Born
          </h1>

          <time
            datetime="2018-03-01"
            className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
          >
            May 2018
          </time>

          <p className="mt-8 mb-12">
            Devenir des freelances, mouais, pourquoi pas. Mais ça ne nous
            suffisait pas. Pourquoi on ne créerait pas une société d’amis, où
            ces amis susdits seraient eux aussi indépendants, sans pour autant
            avoir les prises de têtes administratives? Ah ça existe déjà? Et ca
            s’appelle une société de portage? Ok, ok... Parfait,{' '}
            <strong>let’s started</strong> comme on dit lorsqu'une pénible
            réunion bourrée de graphiques et de Powerpoint est sur le point de
            commencer! Après quelques démarches et surtout des dizaines de
            papiers à remplir (merci l'administration Française), la société
            Ownway était née.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap lg:justify-left">
        <a
          class="w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
          title="Burris Custom Turrets"
          href="/brands/burris/scopes"
        >
          <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
            <img
              class="sm:h-32 w-3/4 sm:w-full mx-auto"
              alt="Burris Custom Turrets"
              src="https://imgur.com/GHWFqRs.jpg"
            ></img>
            <h2 class="text-sm sm:text-xl mb-0 text-gray-900">Burris</h2>
          </div>
        </a>
        <a
          class="w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
          title="Bushnell Custom Turrets"
          href="/brands/bushnell/scopes"
        >
          <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
            <img
              class="sm:h-32 w-3/4 sm:w-full mx-auto"
              alt="Bushnell Custom Turrets"
              src="https://imgur.com/nEbeaju.jpg"
            ></img>
            <h2 class="text-sm sm:text-xl mb-0 text-gray-900">Bushnell</h2>
          </div>
        </a>
      </div>
      <div className="story-section">
        <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-gray-300 border-dashed"></div>

        <div className="flex-col items-start flex-1 max-w-4xl px-8 mt-16 text-xl font-semibold leading-snug tracking-tight text-justify">
          <h1 className="text-4xl font-bold leading-none text-brown md:text-5xl lg:text-6xl ">
            A Farm Comes Into Life
          </h1>

          <time
            datetime="2018-05-01"
            className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
          >
            Jan 2019
          </time>

          <p className="mt-8 mb-12">
            En 2 mois à peine, 2 amis nous rejoignent pour consolider l'équipe
            et l’aventure Ownway pouvait ainsi réellement débuter. Notre
            leitmotiv? Une transparence totale assortie d’un accompagnement sans
            faille. Dont acte: avec nous, pas de difficulté, que des solutions
            (très bonne punchline ça Jean-Michel, on la garde).
          </p>
        </div>
      </div>
      <div className="story-section">
        <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-gray-300 border-dashed"></div>

        <div className="flex-col items-start flex-1 max-w-4xl px-8 mt-16 text-xl font-semibold leading-snug tracking-tight text-justify">
          <h1 className="text-4xl font-bold leading-none text-brown md:text-5xl lg:text-6xl ">
            A Farm Is Funded
          </h1>

          <time
            datetime="2018-12-31"
            className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
          >
            July 2020
          </time>

          <p className="mt-8 mb-12">
            L'année 2018 est riche en projets et en découvertes. Le
            bouche-à-oreille fonctionne bien, nos potes nous font une totale
            confiance et sont extrêmement satisfaits de nos prestations. Il n’en
            faut pas plus pour que de nouveaux portés nous rejoignent et nous
            motivent encore plus.
          </p>
        </div>
      </div>
      <div className="story-section">
        <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-gray-300 border-dashed"></div>

        <div className="flex-col items-start flex-1 max-w-4xl px-8 mt-16 text-xl font-semibold leading-snug tracking-tight text-justify">
          <h1 className="text-4xl font-bold leading-none text-brown md:text-5xl lg:text-6xl ">
            Growth
          </h1>

          <time
            datetime="2019-11-18"
            className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
          >
            July 2020
          </time>

          <p className="mt-8 mb-12">
            Forts de ce succès, il nous fallait rapidement prendre une décision:
            on ne pouvait pas rester les bras croisés... Nous nous ouvrons au
            reste du monde via ce site pour te donner l'envie de découvrir un
            nouveau mode de travail et te montrer à quel point on peut faire
            toute la différence. Mais ne t'inquiétes pas, nous restons les
            mêmes, l’esprit de Ownway reste intact (for ever).
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default OurStoryPage;
