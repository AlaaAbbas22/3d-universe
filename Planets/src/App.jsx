import './App.css';
import Navbar from './components/header';
import Footer from './components/Footer';
import Template from './components/planet';
import Sidelist from './components/sidelist';
import React, { useState } from 'react';

function App() {
  const [planet, setPlanet] = useState("Mercury");

  // Mapping real planet data
  const planetData = {
    Mercury: {
      meshUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpxTPTI90R8651QREvjU4GFYNgwt-K05fCvA&s',
      landscape: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31srPIYE94kbCBDsErQeiz-IGy8l-wi97LL1Jh6b-S0PqqExqNVkP7u571dSU8GhupYE&usqp=CAU',
      name: 'Mercury',
      text: 'MERCURY, THE CLOSEST PLANET TO THE SUN, IS ALSO THE SMALLEST IN OUR SOLAR SYSTEM. IT IS KNOWN FOR ITS SWIFT ORBIT, TAKING ONLY 88 EARTH DAYS TO COMPLETE A TRIP AROUND THE SUN. DESPITE ITS PROXIMITY TO THE SUN, MERCURY IS NOT THE HOTTEST PLANET, AS IT LACKS AN ATMOSPHERE TO TRAP HEAT.',
      funFact: 'FUN FACT: MERCURY EXPERIENCES THE MOST EXTREME TEMPERATURE FLUCTUATIONS IN THE SOLAR SYSTEM, RANGING FROM A SCORCHING 800°F (427°C) DURING THE DAY TO A FREEZING -330°F (-201°C) AT NIGHT.'
    },
    Venus: {
      meshUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnfxRz5PBUtbznqrTtd04zQZhsUJGiorxTQ&s',
      landscape: 'https://manyworlds.space/wp-content/uploads/2023/10/653c1-02-nuwa-campus-v.1.jpg?w=1024&h=576',
      name: 'Venus',
      text: 'VENUS, OFTEN CALLED EARTH\'S "TWIN" DUE TO ITS SIMILAR SIZE AND COMPOSITION, IS THE SECOND PLANET FROM THE SUN. HOWEVER, ITS THICK, TOXIC ATMOSPHERE TRAPS HEAT IN A RUNAWAY GREENHOUSE EFFECT, MAKING IT THE HOTTEST PLANET IN THE SOLAR SYSTEM WITH SURFACE TEMPERATURES REACHING 900°F (475°C).',
      funFact: 'FUN FACT: A DAY ON VENUS IS LONGER THAN A YEAR—IT TAKES 243 EARTH DAYS TO ROTATE ONCE ON ITS AXIS, BUT ONLY 225 EARTH DAYS TO COMPLETE AN ORBIT AROUND THE SUN.'
    },
    Earth: {
      meshUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg',
      landscape: 'https://www.wallpaperflare.com/static/484/499/699/view-top-earth-wallpaper.jpg',
      name: 'Earth',
      text: 'EARTH, THE "BLUE PLANET," IS THE THIRD PLANET FROM THE SUN AND THE ONLY ONE KNOWN TO HARBOR LIFE. IT HAS VAST OCEANS THAT COVER MORE THAN 70% OF ITS SURFACE, AND ITS ATMOSPHERE PROTECTS LIFE FROM THE SUN\'S HARMFUL RAYS WHILE PROVIDING THE OXYGEN WE BREATHE. WITH DIVERSE ECOSYSTEMS AND COMPLEX WEATHER PATTERNS, EARTH STANDS OUT IN OUR SOLAR SYSTEM AS A UNIQUE AND DYNAMIC WORLD.',
      funFact: 'FUN FACT: DUE TO EARTH\'S ROTATION, IT IS SLIGHTLY FLATTENED AT THE POLES AND BULGES AT THE EQUATOR, MAKING IT AN OBLATE SPHEROID RATHER THAN A PERFECT SPHERE. IN FACT, MOUNT EVEREST IS NOT THE FARTHEST POINT FROM THE EARTH\'S CENTER—THAT TITLE GOES TO MOUNT CHIMBORAZO IN ECUADOR!'
    },
    Mars: {
      meshUrl: 'https://t4.ftcdn.net/jpg/05/24/34/93/360_F_524349349_C4uYauaCtSrZNKUnXmMG2wYRyyH9C9jK.jpg',
      landscape: 'https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/04/pngtree-the-planet-mars-with-water-and-mountains-picture-image_2609604.png?size=*:900',
      name: 'Mars',
      text: 'MARS, THE "RED PLANET," IS THE FOURTH FROM THE SUN AND IS KNOWN FOR ITS DISTINCT RED COLOR CAUSED BY IRON OXIDE (RUST) ON ITS SURFACE. MARS BOASTS THE TALLEST VOLCANO IN THE SOLAR SYSTEM, OLYMPUS MONS, WHICH IS THREE TIMES THE HEIGHT OF MOUNT EVEREST. ITS THIN ATMOSPHERE AND EVIDENCE OF DRIED-UP RIVERBEDS INDICATE THAT MARS MAY ONCE HAVE HELD LIQUID WATER.',
      funFact: 'FUN FACT: MARS HAS TWO MOONS, PHOBOS AND DEIMOS, BOTH THOUGHT TO BE CAPTURED ASTEROIDS. PHOBOS IS SLOWLY SPIRALING TOWARD MARS AND WILL LIKELY CRASH INTO THE PLANET OR BREAK APART IN THE NEXT 50 MILLION YEARS.'
    },
    Jupiter: {
      meshUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPHBC4mOJNKc9-qhBDDs4Kqa5Ov3rvArmzw&s',
      landscape: 'https://news.cornell.edu/sites/default/files/styles/story_thumbnail_xlarge/public/1028_jupiter_0.jpg?itok=7M98p-10',
      name: 'Jupiter',
      text: 'JUPITER, THE FIFTH PLANET FROM THE SUN, IS THE LARGEST IN THE SOLAR SYSTEM, MORE THAN TWICE AS MASSIVE AS ALL OTHER PLANETS COMBINED. ITS MOST FAMOUS FEATURE IS THE GREAT RED SPOT, A GIGANTIC STORM THAT HAS RAGED FOR AT LEAST 300 YEARS. JUPITER IS SURROUNDED BY DOZENS OF MOONS, INCLUDING GANYMEDE, THE LARGEST MOON IN THE SOLAR SYSTEM.',
      funFact: 'FUN FACT: JUPITER\'S IMMENSE GRAVITY HELPS TO PROTECT EARTH FROM ASTEROIDS BY PULLING THEM AWAY OR SLINGING THEM INTO THE OUTER SOLAR SYSTEM.'
    },
    Saturn: {
      meshUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwKKpy_GQYdmjII5NQ1NIH87tIYnXhmA8Ebic2FZcKXTDMCOa4yCyVXO30wnlbfbBOaxs&usqp=CAU',
      landscape: 'https://images.pond5.com/top-view-planet-saturn-beautiful-footage-124106242_iconl.jpeg',
      name: 'Saturn',
      text: 'SATURN, THE SIXTH PLANET FROM THE SUN, IS RENOWNED FOR ITS DAZZLING RING SYSTEM, WHICH IS MADE UP OF BILLIONS OF BITS OF ICE, ROCK, AND DUST. SATURN IS THE SECOND-LARGEST PLANET IN THE SOLAR SYSTEM, AND IT ALSO HAS A DENSE ATMOSPHERE MOSTLY COMPOSED OF HYDROGEN AND HELIUM. SATURN\'S MOON TITAN IS LARGER THAN THE PLANET MERCURY AND HAS LAKES OF LIQUID METHANE ON ITS SURFACE.',
      funFact: 'FUN FACT: IF YOU COULD FIND A LARGE ENOUGH BODY OF WATER, SATURN WOULD FLOAT! THIS IS BECAUSE SATURN IS THE LEAST DENSE PLANET IN THE SOLAR SYSTEM.'
    },
    Uranus: {
      meshUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9ca15be5-bdef-4bda-8172-2eac787b4d57/df3vhx1-53594e61-6d84-4f4f-97d9-7d9c0f0ea8db.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljYTE1YmU1LWJkZWYtNGJkYS04MTcyLTJlYWM3ODdiNGQ1N1wvZGYzdmh4MS01MzU5NGU2MS02ZDg0LTRmNGYtOTdkOS03ZDljMGYwZWE4ZGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.P55nUJM5J1N5nd9NPCc-0cbv3HuUBRHZsykE_3zf8_M',
      landscape: 'https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-nasa-is-taking-a-look-at-a-blue-body-with-lots-image_2907816.jpg',
      name: 'Uranus',
      text: 'URANUS IS THE SEVENTH PLANET FROM THE SUN AND IS UNIQUE AMONG THE PLANETS FOR ITS EXTREME TILT—IT SPINS ON ITS SIDE WITH A TILT OF OVER 90 DEGREES. THIS STRANGE ROTATION GIVES URANUS EXTREME SEASONS, WITH EACH POLE SPENDING 42 YEARS IN CONSTANT SUNLIGHT, FOLLOWED BY 42 YEARS OF DARKNESS. URANUS HAS FAINT RINGS AND A PALE BLUE COLOR DUE TO THE METHANE IN ITS ATMOSPHERE.',
      funFact: 'FUN FACT: URANUS WAS THE FIRST PLANET DISCOVERED USING A TELESCOPE, FOUND BY WILLIAM HERSCHEL IN 1781.'
    },
    Neptune: {
      meshUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2115d5b9-b53e-4f1d-81e4-1d21461eeb45/dbozsk6-f27239ad-b102-465b-a86a-7a9a1c36502f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIxMTVkNWI5LWI1M2UtNGYxZC04MWU0LTFkMjE0NjFlZWI0NVwvZGJvenNrNi1mMjcyMzlhZC1iMTAyLTQ2NWItYTg2YS03YTlhMWMzNjUwMmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Hcob9AgnIicA9QhBReA7YEd85vdtbLhgWNSveigO5UI',
      landscape: 'https://i.ytimg.com/vi/d63_KTcR4n4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCcBnyxOHnIGiTDcF1am8W8c4pYnA',
      name: 'Neptune',
      text: 'NEPTUNE, THE EIGHTH AND MOST DISTANT PLANET FROM THE SUN, IS KNOWN FOR ITS INTENSE BLUE COLOR, WHICH IS ALSO CAUSED BY METHANE IN ITS ATMOSPHERE. IT IS A COLD, WINDY WORLD WITH STORMS THAT RAGE AT SPEEDS OF OVER 1,200 MILES PER HOUR (2,000 KILOMETERS PER HOUR), MAKING IT THE WINDIEST PLANET IN THE SOLAR SYSTEM. NEPTUNE HAS 14 KNOWN MOONS, INCLUDING TRITON, WHICH ORBITS THE PLANET BACKWARD.',
      funFact: 'FUN FACT: NEPTUNE TAKES A WHOPPING 165 EARTH YEARS TO COMPLETE A SINGLE ORBIT AROUND THE SUN.'
    }
  };


  // Select the data for the current planet
  const currentPlanetData = planetData[planet];

  return (
    <div className="px-52 pt-2 bg-black">
      <div className="w-[50%]">
        <Navbar />
      </div>
      <div className="">
        <div className="mx-auto py-36">
          {/* Force Template to rebuild with unique key */}
          <Template
            key={planet} 
            meshUrl={currentPlanetData.meshUrl}
            landscape={currentPlanetData.landscape}
            name={currentPlanetData.name}
            text={currentPlanetData.text}
            funFact={currentPlanetData.funFact}
          />
        </div>
      </div>
      <Sidelist setPlanet={setPlanet} />
      <Footer/>
    </div>
  );
}

export default App;
